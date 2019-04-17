import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getSwapi } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    console.log("cdm");
    props.getSwapi();
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>loading...</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  characters: state.characters,
  fetching: state.fetching
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStatetoProps,
  { getSwapi }
)(CharacterListView);
