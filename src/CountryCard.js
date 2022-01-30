import React, { useState } from "react";
import {Card, Row,Col} from "react-bootstrap";
import "./CountryCard.css"


function CountryCard(props) {
  
    return(
    
      <Row xs={1} md={2} className="g-4 ">
     
        <Col xs={1} md={2} lg={2}>
          <Card className="card" key={props.keyValue}>
        <Card.Img   className="countryImage" variant="top" src={props.flag} />
        <Card.Body>
          <Card.Title className="title">{props.name}</Card.Title>
          <Card.Text className="text">
            Population = {props.population}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
    
    </Row>
   
  )
}
export default CountryCard;
