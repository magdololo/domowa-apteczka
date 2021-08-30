import {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';



function App() {
    const [counter, setCounter] = useState(0);
  const [nameDrug, setNameDrug] = useState('');
  const [expireDate, setExpireDate] = useState();
  const [quantity, setQuantity] = useState(0);
  const [drugs, setDrugs] = useState([]);
  const [editDrug, setEditDrug] = useState({});
  const [formState, setFormState] = useState("ADD");
  const [validityDate, setValidityDate] = useState();
  const [openDate, setOpenDate] = useState();

    const setNameDrugChange = (e) =>{
        setNameDrug(e.target.value);
    }
    const setExpireDateChange=(e)=>{
        setExpireDate(e.target.value);
    }
    const setQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }
   // const setValidytyDateChange = (e)



    const handleAddDrug = (e) => {
        e.preventDefault();
        let name = e.target.nameDrug.value;//e.target=form nameDrug to wartosc z atrybutu name
        let expire = e.target.expireDate.value;
        let q = e.target.quantity.value;
        console.log(name, expire, q);
        setCounter(prevValue=>prevValue + 1);
         const drug = {
            nameDrug:  name,
            expireDate: expire,
            quantity: q,
            id: counter
        }

        setDrugs([...drugs,drug]);

         alert(`Dodales ${name} z datą ważności do: ${expire} w ilości ${q} do listy leków`);
         e.target.reset();
    }
    if (drugs.length >= 2) {
        drugs.sort((a, b) => {
            a = a.nameDrug.toLowerCase();
            b = b.nameDrug.toLowerCase();

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })

    };
    const handleEditDrugInForm=(e, id)=>{
        e.preventDefault();
        let drugsArray = [...drugs];
        //console.log(drugsArray);
        const editDrug = {
            nameDrug:  e.target.nameDrug.value,
            expireDate: e.target.expireDate.value,
            quantity: e.target.quantity.value,
            id: id
        }
        drugsArray = drugsArray.filter(editDrug=>editDrug.id !== id);
        console.log(drugsArray);
        drugsArray.push(editDrug);
        setDrugs(drugsArray);
        alert(`Dodales zmiany w ${nameDrug}`);
        setFormState('ADD');
        e.target.reset();
    }

    const showEditForm=()=>{

        return (
            <Form onSubmit={(e)=>handleEditDrugInForm(e,editDrug.id)} name={formState}>
               <Form.Group as={Row} className="mb-3" controlId="nameDrug">
                   <Form.Label column sm="3">Nazwa leku: </Form.Label>
                   <Col sm="7">
                       <Form.Control type="text" placeholder="Wpisz nazwę" value={nameDrug} name={"nameDrug"} onChange={setNameDrugChange} />
                   </Col>
               </Form.Group>

               <Form.Group as={Row} className="mb-3" controlId="expireDate">
                   <Form.Label column sm="3">Data Ważności: </Form.Label>
                   <Col sm="7">
                       <Form.Control type="date" placeholder="Wybierz" value={expireDate} name={"expireDate"} onChange={setExpireDateChange}/>
                   </Col>
               </Form.Group>

               <Form.Group as={Row} className="mb-3" controlId="quantity">
                   <Form.Label column sm="3">Ilość: </Form.Label>
                   <Col sm="7">
                       <Form.Control type="number" placeholder="Podaj ilosc"  value={quantity} name={'quantity'} onChange={ setQuantityChange}/>
                   </Col>
               </Form.Group>

              <Button variant="primary" type="submit" >Edytuj Lek</Button>
          </Form>
        )
    }

    const showAddForm=()=>{
        return (
        <Form onSubmit={(e)=>handleAddDrug(e)} name={formState}>
            <Form.Group as={Row} className="mb-3" controlId="nameDrug">
                <Form.Label column sm="3">Nazwa leku: </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" placeholder="Wpisz nazwę" defaultValue="" name={"nameDrug"} onChange={setNameDrugChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="expireDate">
                <Form.Label column sm="3">Data Ważności: </Form.Label>
                <Col sm="7">
                    <Form.Control type="date" placeholder="Wybierz datę" defaultValue="" name={"expireDate"} onChange={setExpireDateChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="quantity">
                <Form.Label column sm="3">Ilość: </Form.Label>
                <Col sm="7">
                    <Form.Control type="number" placeholder="Podaj ilosc" defaultValue="" name={'quantity'} onChange={ setQuantityChange}/>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" >Dodaj Lek</Button>
        </Form>
        )
    }

    const handleEditDrugInList = (drug) =>{
         setEditDrug(drug);
         setFormState('EDIT');
         setNameDrug(drug.nameDrug);
         setExpireDate(drug.expireDate);
         setQuantity(drug.quantity);

    }

    const ListDrugs = drugs.map(drug =>
        <ListGroupItem key={drug.id}>
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{drug.nameDrug}</h5>
            <Button variant="primary" size="sm" onClick={(event)=>handleEditDrugInList(drug)}>edytuj</Button>
        </div>
        <p className="mb-1">Data ważności:  {drug.expireDate}</p>
        <p className="mb-1">Ilość: {drug.quantity}</p>
            {/*if(*/}
            {/*<p className="mb-1">Data otwarcia:  {}</p>*/}
            {/*<small>Okres ważności po otwarciu: {}dni .</small>*/}
       </ListGroupItem>);
return(
    <div className="App">
        {formState === 'EDIT'? showEditForm(editDrug) : showAddForm()}
        <ListGroup>
            {ListDrugs}
        </ListGroup>
    </div>
  );
}

export default App;
