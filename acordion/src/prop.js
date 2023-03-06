import { useState } from "react";

function Question(props) {
    const [state, setState] = useState(false);

    var buttonText = state ? "-" : "+";

    return (
        <div key={props.item.id} className="acordion">
            <div className="question">
                <div className="main-text">{props.item.title}</div>
                <button
                    className="btn"
                    onClick={() => {
                        setState(!state);
                    }}>
                    {buttonText}
                </button>
                {
                    state ? <p className="inner-text">{props.item.info}</p> : null
                }
            </div>
        </div>
    );
}

export default Question;
