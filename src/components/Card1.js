import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button ,Placeholder} from "reactstrap";

const Card1=()=>{
    return(
        <div>
        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="./paolo.jpg"
        />
        <CardBody>
        <Placeholder
      animation="wave"
      tag={function noRefCheck(){}}
    >
      <Placeholder xs={8} />
    </Placeholder>
            <CardTitle tag="h5" style={{color: "black"}}>
            Apple 14 Pro Max
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Specification
            </CardSubtitle>
            <CardText style={{color: "black"}}>
           128 GB, Storage 16 GB RAM , Solid Black , 
            </CardText>
            <Button>
            Buy
            </Button>
        </CardBody>
        </Card>
        </div>
    );
};
export default Card1;