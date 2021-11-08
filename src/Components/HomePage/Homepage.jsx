import React from 'react'
import styles from "./Homepage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card  from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

function Homepage() {
    const [para, setPara] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    async function getData()
    {
        const { data }  = await axios.get("https://rickandmortyapi.com/api/character")
        console.log(data.results);
        setPara(data.results);
    }
    return (
        <div>
             <h1>HELLO There.....!</h1>
            <div className={styles.dat}>
                {para.map((item) => {
                    return (
                        <div>
                             <Link to={`para/${item.id}`}> 
                            <Card
                            style = {{width: 200, backgroundColor:"rgb(255,226,184)", margin: "auto"}}>
                                <CardContent>
                                    <Typography
                                        style={{ fontSize: 14,fontWeight: 800 }}>{item.name}</Typography>
                                    <img className={styles.image} src={item.image} alt="/"/>
                                    <Typography
                                        style={{ fontSize: 14}}>{item.gender}</Typography>
                                    <Typography
                                        style={{ fontSize: 14 }}>{item.status}</Typography>
                                    <Typography
                                        style={{ fontSize: 14 }}>{item.species}</Typography>
                                    
                                   </CardContent>
                                   </Card> 
                                    </Link> 
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage
