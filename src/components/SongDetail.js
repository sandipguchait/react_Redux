import React from "react";
import { connect } from "react-redux";

const songDetail = ({ selectedSong }) => {
	if (!selectedSong) {
		return <div>Select a Song</div>;
	}
	return (
		<div style={{ marginTop: "20px" }}>
			<h3>Details For: </h3>
			<p>
				Title: {selectedSong.song.title}
				<br />
				Duration: {selectedSong.song.duration}
			</p>
		</div>
	);
};

const mapStateToProps = state => {
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(songDetail);
