var React       = require('react')
var Destination = require('./destination.jsx')

var Event = React.createClass({
  getDefaultProps() {
    return { name: 'Test' }
  },

  render() {
    return (
      <div className="main">
        <span>
          <h1>{this.props.name}</h1>
          <button className='transparent green-txt right rounded'>Edit</button>
        </span>
        <hr />
        <Destination />
      </div>
    )
  }
})

module.exports = Event
