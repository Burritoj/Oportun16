
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {  Container, Row, Col } from 'react-bootstrap';

export function Page2(props){
    const {active} = props;

    const [d1, setd1] = useState('');
    const [nameEntered, setNameEntered] = useState('');

    const handleSelect = (event) => {
        console.log(event);
        setd1(event);
    }

    const handleName = event => {
        setNameEntered(event.target.value);
    }

    const JohnFunction = (document, nameEntered) => {
        if(document.name.includes(nameEntered)){
            return true;
        }
        else{
            return false;
        }
    }

    const documentArray=[
        {
            name: "lanfear",
            date: "today",
            category: "Confidentiality",
            data: "[1,3]"
        },
        {
            name: "mat",
            date: "today",
            category: "Integrity",
            data: "[3,4,5]"
        },
        {
            name: "david",
            date: "yesterday",
            category: "Availability",
            data: "[3,4,5]"
        },
        {
            name: "daniel",
            date: "yesterday",
            category: "Availability",
            data: "[3,4,5]"
        },
    ];

    return(
        <div hidden={!active}>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="Name">
                                <Form.Control onChange={handleName} autocomplete="off" type="NameSearch" placeholder="Name"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Date">
                                <Form.Control type="DateSearch" placeholder="Date Range"/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Category">
                                <Form.Control as="select">
                                <option>Confidentiality</option>
                                <option>Integrity</option>
                                <option>Availability</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                {
                    documentArray.length === 0 ? <p> "No results" </p> : documentArray
                                                                            .filter(document => JohnFunction(document, nameEntered))
                                                                            .map((document,index) => <DataRow key={index} {...document}/>)
                }
                <NumRows size = {2}/>
            </Container>
        </div>
    );
}

function DataRow(props){
    const{name, date, category, data} = props;
    return(
        <Row style={{ height: '8vh' }}>
            <Col>
                <Card style={{ width: '12rem', borderColor: 'white' }}>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {category}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {data}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Button variant="outline-success" size='lg' block>
                    Options
                </Button>
            </Col>
            <Col style={{justifyContent: 'stretch'}}>
                <Button variant="outline-success" size='lg' block>
                    Details
                </Button>
            </Col>
        </Row>
    )
}

function NumRows({size}){
    return(
        new Array(size).fill(0).map( (_,index) => {
            const props = {
                name: "Namegoeshere",
                date: "date?",
                category: "test",
                data: "test2"
            }
            return <DataRow key={index} {...props}/>;
        })
    )
}