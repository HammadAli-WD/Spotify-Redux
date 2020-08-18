// https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/search/artist?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${value}&index=${index}`
// `https://deezerdevs-deezer.p.rapidapi.com/album/${this.props.match.params.albumId}`

//for refernce https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc/
import {setSongs, setAlbums, setArtists, setSingleAlbum} from './actions'


export const fetchData = (endpoint, param, search = true, value, index, id) => (dispatch) => {
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
            dispatch(setAlbums(filteredAlbums));
        } else dispatch(setArtists(data.data));
    } else {
        console.log("Not Searching direct fetching");
        dispatch(setSingleAlbum(data));
        dispatch(setSongs(data.tracks.data))
    }
})
}