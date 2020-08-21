
import {setSongs, setAlbums, setArtists, setSingleAlbum} from './actions'
export const fetchAlbumsWithThunk = () => {
    let albums = [];
    const artistsArray = [
      "halsey",
      "eminem",
      "adele",
      "drake",
      "jessie",
      "stormzy",
    ];
    return (dispatch, getState) => {
      let promises = [];
      artistsArray.forEach((artist) =>
        promises.push(
          fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443",
            },
          })
            .then((resp) => resp.json())
            .then((respObj) => albums.push(respObj.data[0]))
        )
      );
      Promise.all(promises)
        .then(() => console.log("its done"))
        .then(() =>
          dispatch(setAlbums(albums)) //otherwise if setAlbum is not as constant then dispatch({type:"SET_ALBUMS"}, payload: albums)
        );
    };
  };

// https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/search/artist?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/album/${this.props.match.params.albumId}`

//for refernce https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc/
/* export const fetchData = (endpoint, param, search = true, value, index, id) => (dispatch) => {
let str = search
? `${endpoint}search/${param}?q=${value}&index=${index}`
: `${endpoint + param}/${id}`;
console.log('search', str);
fetch(str, {
    method: "GET",
    headers: {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
	}
})
.then((resp) => resp.json())
.then((data) => {
    console.log("data", data);
    if (search) {
        if (param === "track/title") dispatch(setSongs(data.data));
        else if (param === "album") {
            let filteredAlbums = data.data.filter((album) =>
            album.title.toLowerCase().includes(`${value}`));
            dispatch(setAlbums(filteredAlbums.slice(0,4)));
        } else if (param === "artist") {
            let filteredAlbums = data.data.filter((album) =>
            album.title.toLowerCase().includes(`${value}`));
            dispatch(setAlbums(filteredAlbums.slice(0,4)));
        }
         else dispatch(setArtists(data.data.slice(0,4)));
    } else {
        console.log("Not Searching direct fetching");
        dispatch(setSingleAlbum(data));
        dispatch(setSongs(data.tracks.data))
    }
})
} */