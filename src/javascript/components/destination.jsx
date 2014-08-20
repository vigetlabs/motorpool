var React = require('react')
var Ride  = require('./ride.jsx')

var Destination = React.createClass({
  getDefaultProps() {
    return {
      origin         : 'Viget HQ',
      departure_time : 'May 2, 2014 @ 9:00am',
      destination    : 'Earth Treks',
      arrival_time   : 'May 2, 2014 @ 11:00am'
    }
  },

  render() {
    var { origin, departure_time, destination, arrival_time } = this.props;

    return (
      <div className="destination">
        <span>
          <h1 className="green-txt">{origin}</h1>
          <p className="black">{departure_time}</p>
          <h2 className="green-txt">{destination}</h2>
          <p className="black">{arrival_time}</p>
          <button className="btn">Edit Destinations</button>
        </span>

        <hr />

        <div className="rides">
          <h4>Motor Pool</h4>
          <h4>Capacity</h4>
          <ul>
            <Ride />
            <Ride />
            <Ride />
            <Ride />
            <Ride />
            <Ride />
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Destination
