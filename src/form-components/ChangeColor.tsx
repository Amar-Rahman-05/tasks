import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "brown",
];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    style={{
                        backgroundColor: c,
                        padding: "5px",
                        borderRadius: "4px",
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
