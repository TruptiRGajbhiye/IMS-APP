
import "../App.css";
import { Form , Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import axios from "axios";
import React,{ Fragment, useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Container, FormText } from "reactstrap";
  
const Support = () => {
  return (
    <div className="support">
      <Form>
        <Fragment>
                <h1>Fill Details of Course</h1>
                <form>
                    <FormGroup className="email">
                        <label for="CourseId"> Course Id</label>
                        <Input 
                                Type="Text"
                                placeholder="Enter Course Id Here"
                                name="CourseId"
                                Id="CourseId">
                        </Input>   
                    </FormGroup>
                    <FormGroup className="email">
                        <label for="title">Course Title</label>
                        <Input
                                Type="text"
                                placeholder="Enter Course Title here"
                                name="title"
                                Id="title">
                        </Input>
                    </FormGroup>
                    <FormGroup className="email">
                        <label for="description">Description</label>
                        <Input 
                                Type="textarea"
                                placeholder="Enter Course description here"
                                Id="title"
                                style={{height:150}}></Input>
                    </FormGroup>
                    <FormGroup className="email">
                        <Container className="text-center">
                            <Button type="submit" color="success"> Add Course</Button>{' '}
                            <Button type="reset" color="warning ml-2"> Clear </Button>
                        </Container>
                    </FormGroup>
                </form>
            </Fragment>
  </Form>
    </div>
  );
};
  
export default Support;