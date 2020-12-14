const divs = document.querySelectorAll('div')

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, { capture: false }))

// event capture/stack
// captures from the top down nested elements
// if options object container capture: true, the events are fired from the top down
// meaning they don't bubble up
// false by default

// event bubble starts at the top of the stack or the bottom of the nested elements

// stopPropagation() prevents the events from bubbling up