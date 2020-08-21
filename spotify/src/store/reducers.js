import C from './types';

export default (state = {}, action) => {
    switch (action.type) {
        case C.SET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: {
                    ...state.loading,
                    albums: false,
                    albumInfo: true
                },
                albumInfo: null,
            }
        case C.SET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            };
        case C.SET_ARTISTS:
            return {
                ...state,
                artists: action.payload
            };
        case C.ADD_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, action.payload]
            };
        case C.REMOVE_PLAYLIST:
            let index = state.playlist.findIndex(
                (playlist) => playlist.id === action.payload
            );
            return {
                ...state,
                playlist: [
                    ...state.playlist.slice(0, index),
                    ...state.playlist.slice(index + 1)
                ]
            };
        case C.UPDATE_PLAYLIST:
            let i = state.playlist.findIndex(
                (playlist) => playlist.id === action.payload.id
            );
            return {
                ...state,
                playlist: [
                    ...state.playlist.slice(0, i),
                    action.payload,
                    ...state.playlist.slice(i + 1)
                ]
            }
        case C.ADD_SONG_TO_PLAYLIST:
            let addSongToPlaylist = state.playlists.find(
                (playlist) => playlist.id === action.playlistId
            );
            let x = state.playlists.findIndex(
                (playlist) => playlist.id === action.playlistId
            );
            return {
                ...state,
                playlists: [
                    ...state.playlists.slice(0 , x),
                    {
                        ...addSongToPlaylist,
                        songs:[...addSongToPlaylist.songs, action.payload],
                    },
                    ...state.playlists.slice(x + 1),
                ],
            };
        case C.REMOVE_SONG_FROM_PLAYLIST:
            let removeSongFromPlaylist = state.playlists.find(
                (playlist) => playlist.id === action.playlistId
            );
            let indexPlaylist = state.playlists.findIndex(
                (playlist) => playlist.id === action.playlistId
            );
            // let songIndex = playListIndex.findIndex(
            //   (song) => song.id === action.payload
            // );


            return {
                ...state,
                playlist: [
                    ...state.playlist.slice(0, indexPlaylist),
                    {
                        ...removeSongFromPlaylist,
                        songs: [
                        ...removeSongFromPlaylist.songs.filter(
                            (song) => song.id !== action.payload
                        ),
                        //...removeSongFromPlaylist.songs.slice(0, songIndex),
                        //...removeSongFromPlaylist.songs.slice(songIndex + 1)
                    ]
                    },
                    ...state.playlist.slice(indexPlaylist + 1)
                ]
            }
        case C.LIKE_SONG:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    liked: [...state.songs.liked, action.payload]
                },
            };
        case C.UNLIKE_SONG:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    liked: [...state.songs.liked.filter((id) => id !== action.payload)]
                }
            };
        case C.IS_LOADING:
            return {
                ...state,
                loading: !state.loading,
            };
        case C.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case C.SET_SINGLE_ALBUM:
            return {
                ...state,
                singleAlbum: action.payload,
            };

        default:
            return state;
    }
};