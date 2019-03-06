import React from "react";
import { connect } from "react-redux";

const songDetail = props => {
	console.log(props);
	return <div>Song detail </div>;
};

const mapStateToProps = state => {
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(songDetail);
