import React, { Component } from "react";
import { Button, Input, FormGroup } from "reactstrap";
import ProfileItem from "./ProfileItem";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      booked: false,
      bookedTime: null,
      bookedDate: null,
      date: "",
      time: "",
      error: "",
    };
    this.book = this.book.bind(this);
  }
  componentDidMount() {
    //get user
    axios
      .get(`https://reqres.in/api/users/${this.props.match.params.id}`)
      .then((data) => {
        this.setState({ profile: data.data.data });
        let ob = {
          id: data.data.data.id,
        };
        //get booking info
        axios.post("/users/find", ob).then((data) => {
          if (data && data.data.length > 0) {
            this.setState({
              booked: data.data[0].booked,
              bookedTime: data.data[0].time,
              bookedDate: data.data[0].date,
            });
          }
        });
      });
  }

  onChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  // to book
  book = (id, booked) => {
    this.setState({ error: "" });
    console.log(this.state.date);
    console.log(this.state.time);
    if (
      this.state.booked == false &&
      (this.state.date == "" || this.state.time == "")
    ) {
      this.setState({ error: "Select Date and Time" });
    } else {
      let ob = {
        id: id,
        booked: booked,
        date: this.state.date,
        time: this.state.time,
      };
      axios.post("/users/toggle", ob).then((data) => {
        if (data) {
          this.setState({
            booked: data.data.booked,
            bookedDate: ob.date,
            bookedTime: ob.time,
          });
        }
      });
    }
  };
  render() {
    let profile = this.state.profile;
    let OneProfile;
    if (profile === null) {
      OneProfile = "Loading";
    } else {
      if (profile) {
        OneProfile = (
          <div className="text-center mt-5">
            <h1 className=" display-4 ">
              <img
                src={profile.avatar}
                alt=""
                className="zoom rounded-circle img-fluid"
              />
              <br />
              {profile.first_name} {profile.last_name}
            </h1>
            <p className="lead">{profile.email}</p>
            {this.state.error === "" ? (
              <span></span>
            ) : (
              <p style={{ color: "red" }}>{this.state.error}</p>
            )}
            <p>
              <center>
                <FormGroup>
                  <Input
                    style={{ width: "25%" }}
                    type="date"
                    name="date"
                    id="date"
                    onChange={this.onChange.bind(this)}
                    placeholder="date placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    style={{ width: "25%" }}
                    type="time"
                    name="time"
                    id="time"
                    onChange={this.onChange.bind(this)}
                    placehold="time"
                  />
                </FormGroup>
              </center>
            </p>
            <p>
              <Button
                onClick={() => this.book(profile.id, this.state.booked)}
                className="btn btn-info"
              >
                {this.state.booked ? "Click to cancel" : "Click to Book"}
              </Button>
            </p>
            {this.state.booked ? (
              <p>
                Booking Done At {this.state.bookedTime} :{" "}
                {this.state.bookedDate}
              </p>
            ) : (
              <span></span>
            )}
          </div>
        );
      } else {
        OneProfile = <h4>No profile found...</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{OneProfile}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
