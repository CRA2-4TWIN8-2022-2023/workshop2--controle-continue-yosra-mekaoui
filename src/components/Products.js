import React, { Component } from 'react';
import Product from './Product';
import products from "./products.json"
import { Alert, Col, Container, Row } from 'react-bootstrap';
class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            showAlert : false
           

        }
    }
    buy = (product ) => {
         product.quantity --;
         this.setState(() => ({
            showMessage: true,

         }));
         setTimeout(() => {
            this.setState({ showMessage: false });
         }, 2000);
     
        
        // <Alert key="success" variant="success" > 
        // You bought a element
        // </Alert>
        console.log("button buy clicked");
         this.showAlert();

    };
    // showAlert = () => {
    //     this.setState({showAlert : true}, () => setTimeout(() => {
    //         this.setState({showAlert : false });
    //    }),2000)

    // };
    showAlert =() => {
        this.setState({showAlert:true});

    }
    componentDidMount() {
        console.log("welcome");
    };
    render() {
        
         return (
           <>
           { this.state.showAlert && 
            <Alert key="success" variant="success" > 
                 You bought a element
            </Alert>}
           
           <Container style={{marginTop : '2rem'}}>
                <Row>      
                {
                    products.map((product,index) => (
                        <Col style={{margin : '1rem'}} key={index} lg={3}>
                            <Product  onBuy = {this.buy} product={product}></Product> 
                        
                        </Col>
                    ))   
                }
                </Row>  
            </Container>

           </>
            
         );
         
         
        }
}
export default Products;

