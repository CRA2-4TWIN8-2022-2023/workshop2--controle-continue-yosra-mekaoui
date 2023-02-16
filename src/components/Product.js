import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
    product : props.product,
    
  } 

  }
  addLike = () => {
   this.setState((oldState) =>( {
      product : {...oldState.product,like:oldState.product.like+1}
   })
   );
  //  this.setState({product : {...this.state.product,like:this.state.like+1}});
   console.log(this.state.product.like);

  }
  updateQuantity = (newQuantity) => {
    this.setState((oldState) =>( {
      product : {...oldState.product,quantity:newQuantity}
   }))

  }

  render() { 
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("../assets/images/"+this.props.product.img)} />
      <Card.Body >
        <Card.Title>Name : {this.props.product.name}</Card.Title>
        <Card.Subtitle> Description :  {this.props.product.description} </Card.Subtitle>
        <Card.Subtitle> Price : {this.props.product.price} </Card.Subtitle>
        <Card.Subtitle> Likes : {this.state.product.like} </Card.Subtitle> 
        <Card.Subtitle> Quantity  : {this.state.product.quantity} </Card.Subtitle> 

        <Button onClick={this.addLike} variant="primary"> Like</Button>
        <Button onClick={()=>this.props.onBuy(this.state.product)} disabled={this.state.product.quantity === 0 ? true : false}  variant="primary"> Buy</Button>
      </Card.Body>
    </Card>
    );
  }
}
 


export default Product;
