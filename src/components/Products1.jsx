import React, { useState, useEffect } from 'react';
import products from "./products.json"
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Product1 from './Product1';
function Products1() {
    const [showAlert , setAlert] = useState(false);
    const [Greetings , setGreetings] = useState(false);
    const buyProduct = (product ) => {
        product.quantity --;
        setAlert(true);
        setTimeout(() => {setAlert(true); },2000);
    }
    useEffect ( () => {
        setGreetings(true);
        setTimeout(() => {setGreetings(false); },2000);
        return () => console.log("Unmount");

    }, [])
    return ( 
        <>
         { showAlert && 
            <Alert key="success" variant="success" > 
                 You bought a element
            </Alert>
            }
           
           <Container style={{marginTop : '2rem'}}>
                <Row>      
                {
                    products.map((product,index) => (
                        <Col style={{margin : '1rem'}} key={index} lg={3}>
                            <Product1  onBuy = {buyProduct} product={product}></Product1> 
                        
                        </Col>
                    ))   
                }
                </Row>  
            </Container>

        </>
     );
}

export default Products1;