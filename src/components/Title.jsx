import React from "react";
import "../css/Variable.css";

export default function Title(){
    return <div className="pb-2 pt-5">
        <h2 className="fw-bold text-white text-center f-35">Generate your fake data with <span className="text-danger">Faker-Js UI</span></h2>
        <h3 className="text-center text-muted2 fw-bold f-25">Make sure that you have the<a href="https://github.com/RickaPrincy/faker-backend.git" target="_blank" rel="noreferrer"> faker-backend</a>!</h3>
    </div>
}