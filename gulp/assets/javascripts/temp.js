import attachFastClick from 'fastclick'
let $ = require('jquery')

// attachFastClick(document.body)

let toggler = document.querySelector('.site-nav__toggle')
let nav = document.querySelector('.site-nav')
let scrollable = document.querySelectorAll('.page')

let toggle = function() {
  nav.classList.toggle('-open')
}

toggler.addEventListener('click', toggle)

// document.addEventListener('touchmove', function(e) {
//   e.preventDefault()
// }, false)

// Array.prototype.forEach.call(scrollable, function(el) {
//   el.addEventListener('touchmove', function(e) {
//     e.stopPropagation();
//   }, false)
// })

var selScrollable = '.page';
// Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
// Uses body because jQuery on events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', selScrollable, function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
// Stops preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', selScrollable, function(e) {
  e.stopPropagation();
});
