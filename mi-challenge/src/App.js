import React from "react";
import BookingBinsChart from "./BookingBinsChart";
import Map from "./Map";

const simulationApiUrl = "http://localhost:8090/simulate/";
const PICKUP_MARKER_COLOR = "green";
const DROPOFF_MARKER_COLOR = "red";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      invalid: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-10">
              <input type="number" className="form-control" id="numberOfRequests" placeholder="Number Of Requests" min="1" ref={el => (this.input = el)} />
            </div>
            <div className="form-group col-md-2">
              <button className="btn btn-danger">Simulate</button>
            </div>
          </div>
        </form>
        {this.state.invalid && <p className="text-danger text-left">* Please enter a valid number</p>}
        {this.state.ready && (
          <div className="jumbotron">
            <BookingBinsChart bins={this.state.bins} />
            <Map id={"pickupsMap"} points={this.state.pickups} markerColor={PICKUP_MARKER_COLOR} mapTitle={"Most Important Pickups"} />
            <Map id={"dropoffsMap"} points={this.state.dropoffs} markerColor={DROPOFF_MARKER_COLOR} mapTitle={"Most Important Dropoffs"} />
          </div>
        )}
      </React.Fragment>
    );
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.input.value !== "") {
      let numberOfRequests = this.input.value;
      console.log(`${simulationApiUrl}${numberOfRequests}`);
      fetch(`${simulationApiUrl}${numberOfRequests}`)
        .then(result => {
          result.json().then(res => {
            console.log(res);
            this.setState({
              bins: res.booking_distance_bins,
              pickups: res.most_popular_pickup_points,
              dropoffs: res.most_popular_dropoff_points,
              invalid: false,
              ready: true
            });
          });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.setState({
        invalid: true
      });
    }
    let numberOfRequests = parseInt(this.input.value);
  };
}

export default App;
