import React, { Component } from "react";

import ProfileItem from "./ProfileItem";
import axios from "axios";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: null,
      allprofiles: null,
      search: "",
    };
  }
  componentDidMount() {
    axios.get("https://reqres.in/api/users").then((data) => {
      let d = data.data.data;
      this.setState({ profiles: d, allprofiles: d });
    });
  }

  onChange(e) {
    this.setState({ search: e.target.value });
    if (e.target.value == "") {
      this.setState({
        profiles: this.state.allprofiles,
      });
    } else {
      let daata = [];
      this.state.allprofiles.forEach((doc) => {
        let name = doc.first_name + " " + doc.last_name;
        if (name.toLowerCase().includes(this.state.search.toLowerCase())) {
          daata.push(doc);
        }
      });
      this.setState({
        profiles: daata,
      });
    }
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
              <div className="col col-12 col-lg-4 col-sm-12 col-md-12  mt-2 mb-2  justify-content-end">
                <label id="search" style={{ display: "none" }}>
                  Search
                </label>
                <input
                  id="search"
                  style={{}}
                  className="form-control"
                  placeholder="Search"
                  type="text"
                  name="search"
                  onChange={this.onChange.bind(this)}
                  value={this.state.search}
                />
              </div>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
