import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import MyDrugs from "./MyDrugs";
import Login from "./Login";
import './App.scss';
import {getAuth, onAuthStateChanged} from "firebase/auth";

library.add(faTrashAlt, faChevronDown)

function App() {
    const [authUser, setAuthUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onAuth");
            if (user) {
                console.log("onAuth=>true");
                setAuthUser(user);
            } else {
                console.log("onAuth=>false");
                setAuthUser(null);

            }
        });
        return () => {
            unsubscribe();
        }
    })

    return (<>
            { authUser !== null ? <MyDrugs/> : <Login /> }
            </>
    );
}

export default App;
