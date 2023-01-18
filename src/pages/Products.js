import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container,Toast,ToastBody,ToastHeader} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';


const Products=({products, update})=>{
// function Products(args,{products, update}){

    //delete course
    const deleteproduct=(id)=>{
        axios.delete(`${base_url}/products/${id}`).then(
            (response)=>{
                toast.success("Product deleted successfully",{position:"bottom-center"});
                update(id);
            },
            (error)=>{
                toast.error("Product not deleted",{position:"bottom-center"});
            }
        )
    }

    //form handler function
    const handleForm=(e)=>{
        console.log(products);
        postDatatoServer(products);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/products`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Product deleted successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };
    return (
        <Card className='text-center' style={{
            width: '25rem', margin:'10px',marginLeft:'100px'
        }}  >
             <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
            <CardBody>
                <CardSubtitle className='font-weight-bold'>{products.name}</CardSubtitle>
                <CardText>{products.specification}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                        deleteproduct(products.id);
                    }}> Delete </Button>{' '}
    
                    <Button color='warning ml-5' href="/update-product">Update</Button>
                    <Button color='primary' style={{ margin:'10px'}} onClick={() => alert('Product Added To Cart')}>Add to Cart </Button> 
                        
                </Container>
            </CardBody>
        </Card>
    );
    };
    export default Products;