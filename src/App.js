import { useRef, useState } from "react";
import { Button, Container, Col, Row, FormControl } from "react-bootstrap"

export default function App() {
    // using Hooks for State Management for Application
    const [listA, setListA] = useState([])
    const [listB, setListB] = useState([])
    const inputListA = useRef()
    const inputListB = useRef()
    
    // Computing method which renders data 
    const compute = e => {
        e.preventDefault()
        setListA(inputListA.current.value.split(' '))
        setListB(inputListB.current.value.split(' '))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>List A</h1>
                    <FormControl as="textarea" ref={inputListA} />
                </Col>
                <Col>
                    <h1>List B</h1>
                    <FormControl as="textarea" ref={inputListB} />
                </Col>
            </Row>
            
            <Button variant="secondary" onClick = {e => compute(e)}> Compute </Button>{' '}
            
            <Row>
                <Col>
                    {/* Map function for displaying data as items */}
                    <h3>List A</h3>
                    <ul>
                    {listA.map(item => {
                        return (<li>{item}</li>)
                    })}
                    </ul>
                </Col>
                <Col>
                    <h3>List B</h3>
                    <ul>
                    {listB.map(item => {
                        return (<li>{item}</li>)
                    })}
                    </ul>
                </Col>
                <Col>
                    {/* Filter function for applying filter, and includes to check commons */}
                    <h3>Present in both</h3>
                    <ul>
                    {listA.filter(value => listB.includes(value)).map(item => {
                        return (<li>{item}</li>)
                    })}
                    </ul>
                </Col>
                <Col>
                    {/* Set Object for deleting duplicates and displaying only uniques */}
                    <h3>List A & B combined</h3>
                    <ul>
                    {[...new Set([...listA, ...listB])].map(item => {
                        return (<li>{item}</li>)
                    })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
