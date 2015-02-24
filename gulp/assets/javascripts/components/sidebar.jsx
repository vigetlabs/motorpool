var React = require('react')

var Sidebar = React.createClass({
  render() {
    return (
      <div className="sidebar">
        <h2>Motorpool</h2>
        <button className="bottom">
          <span className="white">Create New Event</span>
        </button>
      </div>
    )
  }
})

module.exports = Sidebar
