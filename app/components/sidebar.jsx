var React = require('react')

var Sidebar = React.createClass({
  render() {
    return (
      <div className='sidebar charcoal'>
        <h2>Motorpool</h2>
        <button className='green bottom'>
          <span className='white'>Create New Event</span>
        </button>
      </div>
    )
  }
})

module.exports = Sidebar
