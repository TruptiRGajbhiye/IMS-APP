import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container,} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const User=({users, update})=>{
    //delete course
    const deleteuser=(id)=>{
        axios.delete(`${base_url}/users/${id}`).then(
            (response)=>{
                toast.success("User deleted successfully",{position:"bottom-center"});
                update(id);
            },
            (error)=>{
                toast.error("User not deleted",{position:"bottom-center"});
            }
        )
    }

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
                toast.success("User deleted successfully",{position:"bottom-center"});
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
                <CardSubtitle className='font-weight-bold'>{users.fName}</CardSubtitle>
                <CardText>{users.lName}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                        deleteuser(users.id);
                    }}> Delete </Button>{' '}
    
                    <Button color='warning ml-5' href="/update-user">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
    };
    export default User;