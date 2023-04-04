import React, {useEffect} from 'react';
import './App.css';
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Field from "./components/field/Field";


// import {getJokeData} from "./store/AppState/actions"

function App() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(getPic())
    // }, [])

    return (
        <div className="App">
            <Header/>
            <Field/>
            <Footer/>
        </div>
    );
}

export default App;
