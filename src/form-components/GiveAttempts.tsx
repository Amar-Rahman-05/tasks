import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [userAttempts, setUserAttempts] = useState<string>("");

    function useAttempt(): void {
        setAttempts(attempts - 1);
    }

    function gainAttempts(): void {
        const amount = parseInt(userAttempts);
        if (!isNaN(amount)) {
            setAttempts(attempts + amount);
        }
    }

    return (
        <div>
            <input
                type="number"
                value={userAttempts}
                onChange={(e) => {
                    setUserAttempts(e.target.value);
                }}
            />

            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>

            <Button onClick={gainAttempts}>gain</Button>

            <p>Attempts Left: {attempts}</p>
        </div>
    );
}
