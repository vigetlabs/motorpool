var React   = window.React = require('react')
var Sidebar = require('./components/sidebar.jsx')
var Event   = require('./components/event.jsx')

var App = React.createClass({
  render() {
    return (
      <div>
        <Sidebar />
        <Event name='TTT: Earth Treks' />
      </div>
    )
  }
})

React.renderComponent(App(), document.querySelector('#app'))
