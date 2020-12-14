const divs = document.querySelectorAll('div')

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}))

// event capture/stack
// captures from the top down nested elements
// if options object container capture: true, the events are fired from the top down
// meaning they don't bubble up
// false by default

// event bubble starts at the top of the stack or the bottom of the nested elements

// stopPropagation() prevents the events from bubbling up

// once: true in options object means that the event listener will only fire once
// the event listener be unbinded, and will be removed from that element afterwards
// false by default