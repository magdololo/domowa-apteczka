import {Modal} from 'react-bootstrap';
import {useEffect, useState} from "react";
import FormEdit from "./FormEdit";
import FormAdd from "./FormAdd";
import 'bootstrap/dist/css/bootstrap.min.css';

const  FormModal = ({drug, formState, showFormModal, setShowFormModal, setDrugs, drugs, setFormState}) => {

    const [show, setShow] = useState(showFormModal);

    const handleClose = () => {
        setShow(false);
        setShowFormModal(false);
    }

    useEffect(() =>{
        setShow(showFormModal);
    },[showFormModal, formState]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {formState==="ADD" ?
                        <FormAdd closeModal={handleClose} setDrugs={setDrugs} drugs={drugs}/> :
                    <FormEdit  drug={drug} closeModal={handleClose} setDrugs={setDrugs} drugs={drugs} setFormState={setFormState} />}
                </Modal.Body>
            </Modal>
        </>
    );

}
export default FormModal;