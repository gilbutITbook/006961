class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = '정말 닫으시겠습니까?';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  }
  componentDidMount() {
    console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 등록');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  componentWillUnmount() {
    console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 제거');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  render() {
    console.log('Render');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        '\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ',
        this.props.secondsLeft,
        '\uCD08 \uB4A4\uC5D0 \uC81C\uAC70\uB41C\uB2E4.'
      ),
      React.createElement('input', { type: 'text' })
    );
  }
}