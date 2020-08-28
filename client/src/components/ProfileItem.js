import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
class ProfileItem extends Component {
  state = {
    booked: false,
  };
  constructor(props) {
    super(props);
    this.book = this.book.bind(this);
  }
  componentDidMount() {
    let ob = {
      id: this.props.profile.id,
    };
    axios.post("/users/find", ob).then((data) => {
      if (data && data.data.length > 0) {
        this.setState({ booked: data.data[0].booked });
      }
    });
  }

  book = (id, booked) => {
    let ob = {
      id: id,
      booked: booked,
    };
    // this.setState({ booked: !this.state.booked });
    axios.post("/users/toggle", ob).then((data) => {
      if (data) {
        this.setState({ booked: data.data.booked });
      }
    });
  };
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

            <Button
              onClick={() => this.book(profile.id, this.state.booked)}
              className="btn btn-info"
            >
              {this.state.booked ? "Click to cancel" : "Click to Book"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
