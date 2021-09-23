import {Button, FormControl, Stack} from "react-bootstrap";
import {useState} from "react";

const BottomMenu = ({setFilterDrugs, drugs, setShowFormModal, setFormState})=> {
     const [search,setSearch] = useState("");

     const filter = (e) => {

         const keyword = e.target.value;
         if(keyword !== ''){
             let filterDrugs = [...drugs].filter((drug)=>{
                 if(drug.nameDrug.toLowerCase().startsWith(keyword)){
                     return drug;
                 } else {
                     return ;
                 }
             });
             setFilterDrugs(filterDrugs);
         } else {
             setFilterDrugs (drugs);
         }
         setSearch(keyword);
     };

     return(
     <div className="bottom_menu">
         <Stack direction="horizontal" gap={1}>
             <FormControl className="me-auto" placeholder="Wyszukaj lek..." onChange={filter} value={search}/>
             <Button variant="secondary" onClick={() => {
                 setSearch("");
                 setFilterDrugs(drugs);
             }}>Wyczyść</Button>
             <div className="vr"/>
             <Button variant="outline-danger" onClick={() => {
                 setShowFormModal(true);
                 setFormState("ADD");
             }}>Dodaj&nbsp;lek</Button>
         </Stack>
     </div>
     )
 }
 export default BottomMenu;