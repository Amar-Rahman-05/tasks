import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [text, setText] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setText(!text);
                }}
            >
                {"Reveal Answer"}
            </Button>
            {text && (
                <div>
                    <p>42</p>
                </div>
            )}
        </div>
    );
}
