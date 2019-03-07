import { combineReducers } from "redux";

const songReducer = () => {
	return [
		{ title: "no promise", duration: "3:15" },
		{ title: "Cold heart", duration: "4.20" },
		{ title: "mountains", duration: "3.40" },
		{ title: "vapor", duration: "1:40" },
		{ title: "the way", duration: "1:23" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
