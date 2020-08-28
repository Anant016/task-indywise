import React, { Component } from "react";

import ProfileItem from "./ProfileItem";
import axios from "axios";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: null,
    };
  }
  componentDidMount() {
    axios.get("https://reqres.in/api/users").then((data) => {
      let d = data.data.data;
      this.setState({ profiles: d });
    });
  }

  render() {
    let profileItems = [];
    let profiles = this.state.profiles;
    if (profiles === null) {
      profileItems = "Loading";
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map((user) => (
          <ProfileItem key={user.id} profile={user} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Profiles</h1>
              <p className="lead text-center">Browse</p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
