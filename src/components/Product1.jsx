import React, { useState } from 'react';

import {Card, Alert, Button} from 'react-bootstrap';

function Product1(props) {
    const [like,setLike] = useState(props.product.like)
    const addLike = (e) => {
        e.preventDefault();
        setLike(like +1);
    };
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../assets/images/"+props.product.img)} />
        <Card.Body >
          <Card.Title>Name : {props.product.name}</Card.Title>
          <Card.Subtitle> Description :  {props.product.description} </Card.Subtitle>
          <Card.Subtitle> Price : {props.product.price} </Card.Subtitle>
          <Card.Subtitle> Likes : {like} </Card.Subtitle> 
          <Card.Subtitle> Quantity  : {props.product.quantity} </Card.Subtitle> 
  
          <Button onClick={addLike} variant="primary"> Like</Button>
          {/* <Button onClick={()=>props.onBuy(product)} disabled={product.quantity === 0 ? true : false}  variant="primary"> Buy</Button> */}
        </Card.Body>
      </Card>
      </>);

}

export default Product1;