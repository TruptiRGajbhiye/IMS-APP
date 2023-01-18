import React,{ Fragment, useEffect, useState} from "react";
import { Button, Container, Form,FormGroup, Input, FormText } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import "../App.css";

const AddProducts=()=>{
    useEffect(()=>{
        document.title="Add Product || Learn Code with Trupti"
    },[]);


    const [product, setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/products`,data).then(
           (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Product added successfully",{position:"bottom-center"});
           },
           (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ", {position:"bottom-center"});
           }
           
        );
    };


    return(
        <div className="adduser">
        <Fragment>
            <h1 className="text-center my-3"> Fill Product Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup className="email">
                    <label for="ProductId"> Product Id</label>
                    <Input
                        Type="text"
                        placeholder="Enter Product Id here"
                        name="ProductId"
                        Id="ProductId"
                        onChange={(e)=>{
                            setproduct({...product,id:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup className="email" >
                    <label for="added_date">Added Date</label>
                    <Input
                        Type="text"
                        placeholder="Enter Date here"
                        name="added_date"
                        Id="added_date"
                        onChange={(e)=>{
                            setproduct({...product,added_date:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup className="email">
                    <label for="name">Product Name</label>
                    <Input
                        Type="text"
                        placeholder="Enter Product name here"
                        name="name"
                        Id="name"
                        onChange={(e)=>{
                            setproduct({...product,name:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup className="email">
                    <label for="specification">Product Specification</label>
                    <Input
                        Type="textarea"
                        placeholder="Enter description here"
                        Id="specification"
                        style={{height:150}}
                        onChange={(e)=>{
                            setproduct({...product,specification:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="original_price">Original Price</label>
                    <Input
                        Type="text"
                        placeholder="Enter Price here"
                        name="original_price"
                        Id="original_price"
                        onChange={(e)=>{
                            setproduct({...product,original_price:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="retail_price">Retail Price</label>
                    <Input
                        Type="text"
                        placeholder="Enter Price here"
                        name="retail_price"
                        Id="retail_price"
                        onChange={(e)=>{
                            setproduct({...product,retail_price:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="quantity">Quantity</label>
                    <Input
                        Type="text"
                        placeholder="Enter Quantity here"
                        name="quantity"
                        Id="quantity"
                        onChange={(e)=>{
                            setproduct({...product,quantity:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="exampleFile">
                    File
                    </label>
                    <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    />
                    <FormText>
                    This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>


                <Container className="text-center">
                    <Button type="submit" color="success">Add product</Button>{' '}
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>

            </Form>
        </Fragment>
        </div>
    );


    // return(
    //     <div>
    //         <Fragment>
    //             <h1>Fill Details of Products</h1>
    //             <form>
    //                 <FormGroup>
    //                     <label for="ProductId"> Product Id</label>
    //                     <Input 
    //                             Type="Text"
    //                             placeholder="Enter Product Id Here"
    //                             name="ProductId"
    //                             Id="ProductId">
    //                     </Input>   
    //                 </FormGroup>
    //                 <FormGroup>
    //                     <label for="title">Product Title</label>
    //                     <Input
    //                             Type="text"
    //                             placeholder="Enter Product Title here"
    //                             name="title"
    //                             Id="title">
    //                     </Input>
    //                 </FormGroup>
    //                 <FormGroup>
    //                     <label for="description">Description</label>
    //                     <Input 
    //                             Type="textarea"
    //                             placeholder="Enter Product description here"
    //                             Id="title"
    //                             style={{height:150}}></Input>
    //                 </FormGroup>
    //                 <FormGroup>
    //                     <Container className="text-center">
    //                         <Button type="submit" color="success"> Add Product</Button>{' '}
    //                         <Button type="reset" color="warning ml-2"> Clear </Button>
    //                     </Container>
    //                 </FormGroup>
    //             </form>
    //         </Fragment>
    //     </div>

    // );
};
export default AddProducts;