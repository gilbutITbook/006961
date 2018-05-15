let secondsLeft = 5;

let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      '\uC2DC\uAC04\uC774 \uC9C0\uB098 Note \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.'
    ), document.getElementById('content'));
    clearInterval(interval);
  } else {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(Note, { secondsLeft: secondsLeft })
    ), document.getElementById('content'));
  }
  secondsLeft--;
}, 1000);