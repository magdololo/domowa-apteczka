import {Button, Modal} from 'react-bootstrap';
import {useEffect, useState} from "react";
import FormEdit from "./FormEdit";
import FormAdd from "./FormAdd";
import 'bootstrap/dist/css/bootstrap.min.css';
import {asyncFetch} from "./DrugService";
const  FormModal = ({handleAddEdit, drug, handleAdd, formState, showModal, setFormShow}) => {

    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false);
        setFormShow(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() =>{
        setShow(showModal);
    },[showModal, formState]);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/*<Modal.Title>Wypełnij formularz</Modal.Title>*/}
                </Modal.Header>
                <Modal.Body>
                    {formState==="ADD" ?
                        <FormAdd handleAdd={handleAdd}/> :
                    <FormEdit handleAddEdit={handleAddEdit} drug={drug} closeModal={handleClose} />}
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );

}
export default FormModal;