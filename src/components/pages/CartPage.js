import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Cart from "../../Cart";

class CartPage extends React.Component {
    render() {
        return (
            <div className="app app-cart">
                <Header />
                <main>
                    <section id="section-cart-main">
                        <h1 className="page-title">Корзина</h1>У вас в корзине:
                        <pre>{JSON.stringify(Cart)}</pre>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default CartPage;