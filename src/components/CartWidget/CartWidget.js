import cart from './assets/cart-shopping-solid.svg';

const CartWidget = () => {
    return (
        <button className="nav-link">
           <img src={cart} alt="Cart-widget" height="18" /> Su pedido: <span className="badge bg-primary">0</span>
        </button>
    );
}

export default CartWidget;