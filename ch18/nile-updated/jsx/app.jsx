const React = require('react')
const ReactDOM = require('react-dom')
const {
  HashRouter,
  Route,
  Switch,
  Link
} = require('react-router-dom')

const Modal = require('./modal.jsx')
const Cart = require('./cart.jsx')
const Checkout = require('./checkout.jsx')
const Product = require('./product.jsx')

const PRODUCTS = [
  { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: 'images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

let cartItems = {}

const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

const Heading = () => {
  return <h1>Nile 서점</h1>
}

const Copy = () => {
  return <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나 붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 연결됩니다.</p>
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">카트</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link
              key={picture.id}
              to={{
                pathname: `/products/${picture.id}`,
                state: { modal: true, returnTo: '/' }
              }}
            >
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  renderProduct(routeProps) {
    const { location } = this.props
    const isModal = location.state && location.state.modal
    const product = <Product addToCart={addToCart} products={PRODUCTS} {...routeProps} />

    return isModal ? (
      <div>
        <Index {...routeProps} />
        <Modal isOpen={true} returnTo={location.state.returnTo}>
          {product}
        </Modal>
      </div>
    ) : product
  }
  renderCart(routeProps) {
    return <Cart cartItems={cartItems} products={PRODUCTS} {...routeProps} />
  }
  render() {
    return (
      <div className="well">
        <Heading/>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/products/:id" render={this.renderProduct.bind(this)} />
          <Route path="/cart" render={this.renderCart.bind(this)} />
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <HashRouter>
    <div>
      <Switch>
        <Route
          path="/checkout"
          render={routeProps => <Checkout cartItems={cartItems} products={PRODUCTS} {...routeProps} />}
        />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </HashRouter>
), document.getElementById('content'))
