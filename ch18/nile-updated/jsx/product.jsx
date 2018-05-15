const React = require('react')
const {
  Link
} = require('react-router-dom')

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }
  handleBuy (event) {
    // v2: this.props.route.addToCart(this.props.params.id)
    this.props.addToCart(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <img src={this.props.products[this.props.match.params.id].src} style={{ height: '80%' }} />
        <p>{this.props.products[this.props.match.params.id].title}</p>
        <Link
          to={{
            pathname: `/cart`,
            state: { productId: this.props.match.params.id}
          }}
          onClick={this.handleBuy}
          className="btn btn-primary">
          구매하기
        </Link>
      </div>
    )
  }
}

module.exports = Product