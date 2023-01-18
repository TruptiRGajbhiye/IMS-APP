












import "../App.css";
import { Form , Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import axios from "axios";
import React,{ Fragment, useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Container } from "reactstrap";
  
const Login = () => {
  return (
    <div className="support">
      <Form>
        <Fragment>
                <h1>Login </h1>
                <form>
                    <FormGroup className="email">
                        <label for="email">Email</label>
                        <Input 
                                Type="Text"
                                placeholder="Enter email Here"
                                name="email"
                                Id="email">
                        </Input>   
                    </FormGroup>
                    <FormGroup className="email">
                        <label for="password">Password</label>
                        <Input
                                Type="text"
                                placeholder="Enter password here"
                                name="password"
                                Id="password">
                        </Input>
                    </FormGroup>
                    <FormGroup className="email">
                        <Container className="text-center">
                            <Button type="submit" color="success" href="/view-product"> Login</Button>{' '}
                            <Button type="reset" color="warning ml-2"> Clear </Button>
                            <a href="/add-user">Don't have an account? Register here...</a>
                        </Container>
                    </FormGroup>
                </form>
            </Fragment>
  </Form>
    </div>
  );
};
  
export default Login;