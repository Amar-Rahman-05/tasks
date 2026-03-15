import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [userAttempts, setUserAttempts] = useState<string>("");
    const addAttempts = parseInt(userAttempts) - 1 || 0;

    function use(): void {
        setAttempts(attempts - 1);
    }

    function give(): void {
        setInProgress(false);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            <Button onClick={use} disabled={attempts === 0}>
                Stop Quiz
            </Button>

            <Button onClick={give} disabled={inProgress}>
                Mulligan
            </Button>

            <p>Attempts Left: {attempts}</p>
        </div>
    );
}
