// types
import C from './types'

export function createList (name){
    return{
        type: C.CREATE_LIST,
        payload:{name}
    }
}

export function deleteList (id){
    return{
        type: C.DELETE_LIST,
        payload: {id}
    }
}
export function updateList (id, name){
    return{
        type: C.UPDATE_LIST,
        payload: {id, name}
    }
}
export function addToList(id, song){
    return{
        type: C.ADD_TO_LIST,
        payload: {id, song}
    }
}
export function removeFromList (id, songId){
    return{
        type: C.REMOVE_FROM_LIST,
        payload: {id, songId}
    }
}
export function emptyList(id){
    return{
        type: C.EMPTY_LIST,
        payload: {id}
    }
}
export function songLike (id){
    return{
        type: C.SONG_LIKE,
        payload: {id}
    }
}
export function dislikeSong (id){
    return{
        type: C.SONG_DISLIKE,
        payload: {id}
    }
}
export function isLoading (){
    return{
        type: C.IS_LOADING
    }
}
export function setError (e){
    return{
        type: C.SET_ERROR,
        payload: {e}
    }
}