import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Singlepage.module.css";
import Card  from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';


function Singlepage() {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data }  = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`);
        console.log("second", data);
        setProduct(data);
        console.log( "product", product)
    }

    return (
        <div>
            <h1>Full Details About me</h1>
            <Card
                            style = {{width: 200, backgroundColor:"rgb(255,226,184)", margin: "auto"}}>
                                <CardContent>
                                    <Typography
                                        style={{ fontSize: 14,fontWeight: 800 }}>{product.name}</Typography>
                                    <img className={styles.image} src={product.image} alt="/"/>
                                    <Typography
                                        style={{ fontSize: 14}}>{product.gender}</Typography>
                                    <Typography
                                        style={{ fontSize: 14 }}>{product.status}</Typography>
                                    <Typography
                                        style={{ fontSize: 14 }}>{product.species}</Typography>
                                    
                                   </CardContent>
                                   </Card> 
            
        </div>
    )
}

export default Singlepage
