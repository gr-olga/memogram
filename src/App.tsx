import React from 'react';
import './App.css';
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {getJokeData} from "./api/api";
// import {getJokeData} from "./store/AppState/actions"

function App() {
    getJokeData()

    return (
        <div className="App">
            <Header/>
            <Card/>
            <Footer/>
        </div>
    );
}

export default App;
