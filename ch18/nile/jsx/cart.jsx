const React = require('react')
const {
  Link
} = require('react-router')

class Cart extends React.Component {
  render() {
    return <div>
      {(Object.keys(this.props.route.cartItems).length == 0) ? <p>카트에 담은 상품이 없습니다.</p> : '' }
       <ul>
        {Object.keys(this.props.route.cartItems).map((item, index, list)=>{
          return <li key={item}>{this.props.route.products[item].title} - {this.props.route.cartItems[item]}</li>
        })}
      </ul>
      <Link to="/checkout" className="btn btn-primary">결제하기</Link>
      <Link to="/" className="btn btn-info">홈</Link>
    </div>
  }
}

module.exports = Cart