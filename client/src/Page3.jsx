import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Page3(props){
    const {active} = props;

    const [d1, setd1] = useState('');

    const handleSelect=(e)=>{
        console.log(e);
        setd1(e);
    }

    return(
        <div hidden={!active}>
            <DropdownButton title={d1} id = "dropdown" onSelect={handleSelect}>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">3</Dropdown.Item>
                <Dropdown.Item eventKey="5">3</Dropdown.Item>
            </DropdownButton>


            <Container>
  <Row>
    <Col><Button variant="primary">Button</Button>{' '}
    <Button variant="primary">Button</Button>{' '}</Col>
    <Col lg = {8}> HEAT MAP</Col>

  </Row>
  <Row>
  <Col><Button variant="primary">button</Button>{' '}</Col>
    <Col lg={8}>HEAT MAP</Col>


  </Row>
</Container>

        </div>
    );
}
