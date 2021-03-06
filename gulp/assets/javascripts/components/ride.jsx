var React = require('react')

var Ride = React.createClass({
  getDefaultProps() {
    return {
      driver:   'ryan.stenberg@viget.com',
      capacity: 4,
      riders:   [
        'khanh.stenberg@viget.com',
        'minh.tran@viget.com',
        'josh.korr@viget.com'
      ]
    }
  },

  renderRider(rider, index) {
    return (
      <li>{rider}</li>
    )
  },

  render() {
    var riders = this.props.riders

    return (
      <li className="ride rounded">
        <span>
          <strong>{this.props.driver}</strong>
          {this.props.riders.length} / {this.props.capacity}
        </span>

        <ul>
          { riders.map(this.renderRider) }
        </ul>
      </li>
    )
  }
})

module.exports = Ride
