import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Singlepage.module.css";

function Singlepage() {
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const  data  = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`);
        console.log("second", data);
        setProduct(data);
    }
    return (
        <div>
            
        </div>
    )
}

export default Singlepage
