import {useContext} from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ToggleDrugAccordion({ children, eventKey, callback, }) {

    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        callback && callback(eventKey),
    );
    const isCurrentEventKey = activeEventKey === eventKey;


    return (
        <button
            type="text"
            className = {isCurrentEventKey ? "arrow-down" : "arrow-up"}
            style={
                {
                  border: "0",
                }
            }

            onClick={decoratedOnClick}
        >
            {isCurrentEventKey ?  <FontAwesomeIcon icon="chevron-down" rotation={180} size="lg" /> :  <FontAwesomeIcon icon= "chevron-down"  size="lg" />}

            {children}
        </button>
    );
}
export default ToggleDrugAccordion;

// `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`