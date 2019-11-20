import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        // should calculate price on the server in a real app
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    street: 'Teststreet',
                    zipCode: '41324',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        // .json is firebase-specific url structure
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({ loading: false });
            });
    }

    render () {
        let form = this.state.loading ? <Spinner /> :
            <form>
                <input className="Input" type="text" name="name" placeholder="Your name" />
                <input className="Input" type="email" name="email" placeholder="Your email" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>;
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;