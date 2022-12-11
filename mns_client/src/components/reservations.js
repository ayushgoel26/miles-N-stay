import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from 'react-icons/bs'
import {
    Typography,
    Grid,
    Card,
    Divider,
    List,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reservations() {
    const navigate = useNavigate();
    // var reservations = [];
    const [reservations, setReservations] = useState([])
    function refreshPage() {
        window.location.reload(false);
      }
    const deleteReservation = async (id) => {
        if (window.confirm(`Are you sure you want to delete the reservation?`)) {
            let url =`http://localhost:3000/reservations/${id}`
            const res = await axios.delete(url);
            navigate(0);
            res.status();
        };
    }

    useEffect(() => {
        const reviewFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/reservations/"
                )
            ).json();
            console.log(data)
            setReservations(data)
        };
        reviewFetch();
    }, []);

    return (
        <Grid item xs={12} sm={12} style={{ margin: "2%", width: "100%" }}>
            <Card style={{ padding: "3%" }}>
                <Typography variant="h6">
                    Your Reservations
                </Typography>
                <Divider style={{ marginTop: "1%", height: "3px" }} />

                <List>
                    {reservations.length > 0 && (
                        <ol>
                            {reservations.map((reservation) => (
                                <li key={reservation._id}>
                                    <Grid container>
                                        <Grid item>
                                            <img src='img/home.jpg' style={{ height: "100px", width: "100px" }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6">
                                                {reservation.property_name}
                                                <br />
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                {reservation.start_date.substring(0, 10)} to {reservation.end_date.substring(0, 10)}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <BsFillTrashFill color="red" onClick={(e) => { deleteReservation(reservation._id) }} />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Divider style={{ marginTop: "1%", marginBottom: "1%", height: "2px" }} />
                                </li>
                            ))}
                        </ol>
                    )}
                </List>
            </Card>
        </Grid>)
}

export default Reservations;
