import React from "react";
import "./App.css";
<<<<<<< HEAD
import image from "./assets/images/pleasework.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - AMAR RAHMAN
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>

            <h1>Header</h1>
            <img src={image} alt="please work" />
            <ul>
                <li>Please</li>
                <li>Please</li>
                <li>Work</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#ff0000",
                            }}
                        />
                    </Col>
                    <Col>
                        Second column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#ff0000",
                            }}
                        />
                    </Col>
                    <Col>
                        Third column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#ff0000",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
