// types
import C from './types'

export const setSongs = (songs) => ({
    type: C.SET_SONGS,
    payload: songs,
  });
  
  export const setAlbums = (albums) => ({
    type: C.SET_ALBUMS,
    payload: albums,
  });
  
  export const setArtists = (artists) => ({
    type: C.SET_ARTISTS,
    payload: artists,
  });
  
  export const addPlaylist = (playlist) => ({
    type: C.ADD_PLAYLIST,
    payload: playlist,
  });
  
  export const removePlaylist = (id) => ({
    type: C.REMOVE_PLAYLIST,
    payload: id,
  });
  
  export const updatePlaylist = (playlist) => ({
    type: C.UPDATE_PLAYLIST,
    payload: playlist,
  });
  
  export const addSongToPlaylist = (playlistId, song) => ({
    type: C.ADD_SONG_TO_PLAYLIST,
    payload: song,
    playlistId: playlistId,
  });
  
  export const removeSongFromPlaylist = (playlistId, songId) => ({
    type: C.REMOVE_SONG_FROM_PLAYLIST,
    payload: songId,
    playlistId: playlistId,
  });
  
  export const likeSong = (id) => ({
    type: C.LIKE_SONG,
    payload: id,
  });
  export const unlikeSong = (id) => ({
    type: C.UNLIKE_SONG,
    payload: id,
  });
  
  export const isLoading = () => ({
    type: C.IS_LOADING,
  });
  export const setError = (e) => ({
    type: C.SET_ERROR,
    payload: e,
  });
  export const setSingleAlbum = (album) => ({
    type: C.SET_SINGLE_ALBUM,
    payload: album,
  });