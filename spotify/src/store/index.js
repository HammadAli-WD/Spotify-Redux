import { createStore , applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    albums: null,
    loading: {
      albums: true,
      albumInfo: true,
      artistInfo: true,
    },
    albumInfo: null,
    selectedSong: null,
    playing: false,
    likedSongs: []
};

export default function configureStore() {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}