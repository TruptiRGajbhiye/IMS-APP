import React,{ Fragment, useEffect, useState} from "react";
import { Button, Container, Form,FormGroup, Input, FormText } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import "../App.css";

const AddUsers=()=>{
    useEffect(()=>{
        document.title="Add Users || Learn Code with Trupti"
    },[]);


    const [users, setusers]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(users);
        postDatatoServer(users);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/users`,data).then(
           (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Users added successfully",{position:"bottom-center"});
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
            <h1 className="text-center my-3">Register User</h1>
            <Form onSubmit={handleForm}>
                <FormGroup className="email">
                    <label for="UserId"> Users Id</label>
                    <Input
                        Type="text"
                        placeholder="Enter User Id here"
                        name="UserId"
                        Id="UserId"
                        onChange={(e)=>{
                            setusers({...users,id:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="f_name">First Name</label>
                    <Input
                        Type="text"
                        placeholder="Enter First name here"
                        name="f_name"
                        Id="f_name"
                        onChange={(e)=>{
                            setusers({...users,fName:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup className="email">
                    <label for="l_name">Last Name</label>
                    <Input
                        Type="text"
                        placeholder="Enter Last name here"
                        name="l_name"
                        Id="l_name"
                        onChange={(e)=>{
                            setusers({...users,lName:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="email">Email</label>
                    <Input
                        Type="text"
                        placeholder="Enter email here"
                        name="email"
                        Id="email"
                        onChange={(e)=>{
                            setusers({...users,email:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="password">Password</label>
                    <Input
                        Type="text"
                        placeholder="Enter password here"
                        name="password"
                        Id="password"
                        onChange={(e)=>{
                            setusers({...users,password:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="address">Address</label>
                    <Input
                        Type="text"
                        placeholder="Enter address here"
                        name="address"
                        Id="address"
                        onChange={(e)=>{
                            setusers({...users,address:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup className="email">
                    <label for="pincode">Pincode</label>
                    <Input
                        Type="text"
                        placeholder="Enter pincode here"
                        name="pincode"
                        Id="pincode"
                        onChange={(e)=>{
                            setusers({...users,pincode:e.target.value});
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
                    <Button type="submit" color="success">Add User</Button>{' '}
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
export default AddUsers;