import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Froms from "./components/Forms";
import "./css/Variable.css";

export default function App(){

    return <div className="bg-black-hidden">
        <Header/>
        <Title/>
        <Froms/>
    </div>
}