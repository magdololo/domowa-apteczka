import {useContext} from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ToggleDrugAccordion.scss";

function ToggleDrugAccordion({ children, eventKey, callback, }) {

    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        callback && callback(eventKey),
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div
            type="text"
            className = {isCurrentEventKey ? "arrow-down" : "arrow-up"}
            style={
                {
                  border: "0", display: "flex", flex: "1 1 auto"
                }
            }
            onClick={decoratedOnClick}
        >
            {isCurrentEventKey ?  <FontAwesomeIcon icon="chevron-down" rotation={180} size="lg"  className="chevron" /> :  <FontAwesomeIcon icon= "chevron-down"  size="lg" className="chevron"/>}
            {children}
        </div>
    );
}
export default ToggleDrugAccordion;
