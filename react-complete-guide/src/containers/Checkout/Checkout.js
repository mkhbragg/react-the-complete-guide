import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        this.getQueryParams();
    }

    getQueryParams () {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                // + sign converts param[1] to a number
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, price: price });
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients} 
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                    <Route path={`${this.props.match.path}/contact-data`} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />} />
            </div>
        );
    }
}

export default Checkout;