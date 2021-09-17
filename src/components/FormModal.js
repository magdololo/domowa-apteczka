import {Button, Modal} from 'react-bootstrap';
import {useState} from "react";
import FormEdit from "./FormEdit";
import 'bootstrap/dist/css/bootstrap.min.css';
function  FormModal({handleAddEdit, drug}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("funkcja handleAddEdit w formModal"+ handleAddEdit) ;
    console.log(handleAddEdit) ;


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                edytuj
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormEdit handleAddEdit={handleAddEdit} drug={drug} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/**<Button variant="primary" type="submit"/> edytuj lek <Button/>*/}
                    {/*<Button variant="primary" >*/}
                    {/*    Edytuj lek*/}
                    {/*</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default FormModal;