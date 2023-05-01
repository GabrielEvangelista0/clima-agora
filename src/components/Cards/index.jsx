import { useEffect, useState } from "react";
import Card from "./Card";
import './card.css'
import axios from "axios";

export default function Cards(props){
    const { cidade } = props
    const key = 'f0W0zcL1GImdUsaoxMWdmbMlOK8E46HG'
    
    console.log(cidade);
    return(
        <div className="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}