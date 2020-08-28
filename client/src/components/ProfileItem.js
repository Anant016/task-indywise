import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
class ProfileItem extends Component {
  state = {
    booked: false,
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={profile.avatar}
              alt=""
              className="zoom rounded-circle img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>
              {profile.first_name} {profile.last_name}
            </h3>
            <p>{profile.email}</p>

            <Link
              to={{
                pathname: `/profile/${profile.id}`,
                state: {
                  profile: profile,
                },
              }}
              profile={profile}
              className="btn btn-info"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
