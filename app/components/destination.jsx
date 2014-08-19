var React = require('react')
var Ride  = require('./ride.jsx')

var Destination = React.createClass({
  getDefaultProps() {
    return {
      origin:         'Viget HQ',
      departure_time: 'May 2, 2014 @ 9:00am',
      destination:    'Earth Treks',
      arrival_time:   'May 2, 2014 @ 11:00am'
    }
  },

  render() {
    return (
      <div className='destination'>
        <span>
          <h1 className='green-txt'>{this.props.origin}</h1>
          <p className='black'>{this.props.departure_time}</p>
          <h1 className='green-txt'>{this.props.destination}</h1>
          <p className='black'>{this.props.arrival_time}</p>
          <button className='transparent gray right rounded'>Edit Destinations</button>
        </span>

        <hr />

        <div className='rides'>
          <h4>Motor Pool</h4>
          <h4>Capacity</h4>
          <Ride />
          <Ride />
          <Ride />
          <Ride />
          <Ride />
          <Ride />
        </div>
      </div>
    )
  }
})

module.exports = Destination
