import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [initialType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function switchType(): void {
        setType(
            initialType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <Button
                onClick={() => {
                    switchType();
                }}
            >
                {"Change Type"}
            </Button>
            <p>
                {initialType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
        </div>
    );
}
