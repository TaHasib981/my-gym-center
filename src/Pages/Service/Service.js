import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
   const {id, name, description,img} = service
   console.log(name);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary"> <Link to="/checkout">more details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;