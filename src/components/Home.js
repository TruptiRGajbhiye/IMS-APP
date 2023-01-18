import React from 'react'
import Carousel1 from './Carousel1';
import Card1 from './Card1';
import { Container, Row, Col, Button } from 'reactstrap';
import "../App.css";
import  Footer  from './Footer';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { textAlign } from '@mui/system';
import { useState } from 'react';
import { Card, CardBody, CardTitle} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Card2 from './Card2';




function Home(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Carousel1/>
      <div>
      <Button className='text-center' style={{color:'white',fontWeight:'bold', textAlign:'center',marginLeft:'600px',marginRight:'50px'}}
      onClick={toggle}> Login To Buy </Button>

                    <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Oppss...</ModalHeader>
                    <ModalBody>
                    You Are Not a Registered User. Please Register yourself First....
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" href="/add-user">
                        Register
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                    </ModalFooter>
                    </Modal>
    </div>
      <div>
      <Container>
        <Row className='row'>
          <Col className='col'>
          <Card1/>
          </Col>
          <Col className='col'>
          <Card2/>
          </Col>
          <Col className='col'>
          <Card1/>
          </Col>
          <Col className='col'>
          <Card2/>
          </Col>
          <Col className='col'>
          <Card1/>
          </Col>
          <Col className='col'>
          <Card2/>
          </Col>
        </Row>
      </Container>
      </div>
      
    <Footer/>
    </div>
    
  );
};

export default Home;