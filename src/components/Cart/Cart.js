import React from 'react';
import {Card ,Button} from "react-bootstrap";

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd)=> total+prd.price1 , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const courses = cart[i];
        total=( total + courses.price1);
    }
   
    
    return (
        <div>
            <Card  style={{ width: '17rem' }}>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <Card.Text>Course Ordered : {cart.length}</Card.Text>
                <Card.Text>Total : £{(total).toFixed(2)}</Card.Text>
                <Button variant="primary">Payment</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;