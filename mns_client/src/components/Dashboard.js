import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Reservations from "./reservations";


import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Chip,
    Button,
    Divider,
    List,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    makeStyles,
    CardHeader, Tab,
    Tabs
} from '@material-ui/core'

import mongoose from 'mongoose'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Rating } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';




function Dashboard() {

    const [tab, setTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const [reservationCurr, setReservationCurr] = useState([])
    const [reservationPast, setReservationsPast] = useState([])
    const [reservationFut, setReservationsFut] = useState([])
    const [isFetchedCurr, setIsFetchedCurr] = useState(false)
    const [isFetchedPast, setIsFetchedPast] = useState(false)
    const [isFetchedFut, setIsFetchedFut] = useState(false)

    const user_id = '0000007b8a9efbe955ff579a'
    useEffect(() => {
        const reviewFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/reservations/upcoming/" + user_id
                )
            ).json();
            console.log(data)
            await setReservationsFut(data)
            await setIsFetchedFut(true)
        };
        reviewFetch();
    }, []);

    useEffect(() => {
        const reviewFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/reservations/past/" + user_id
                )
            ).json();
            console.log(data)
            await setReservationsPast(data)
            await setIsFetchedPast(true)
        };
        reviewFetch();
    }, []);

    useEffect(() => {
        const reviewFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/reservations/current/" + user_id
                )
            ).json();
            console.log(data)
            await setReservationCurr(data)
            await setIsFetchedCurr(true)
        };
        reviewFetch();
    }, []);


    return (

        <Container style={{ backgroundColor: "white" }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12} style={{ marginTop: "1%", marginBottom: "1%" }}>

                    <Card styles={{ padding: "10%" }}>

                        <Typography styles={{ padding: "5%" }} variant="h3">Welcome to Miles-n-Stay
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ float: "right" }}
                            >
                                View Wishlist
                            </Button></Typography>

                        <CardContent>
                            Welcome to our MilesNStay! We are so glad you have chosen to stay with us. Our goal is to make your experience with us as comfortable and enjoyable as possible. Our team is here to help with anything you need during your stay, so please don't hesitate to reach out. Thank you for choosing us, and we hope you have a wonderful time here! From cozy cottages to elegant penthouses, Hosts are happy to share their places. Whether its a work trip, weekend getaway, family vacation, or a longer stay, there are millions of amazing places to visit.
                        </CardContent>
                    </Card>

                </Grid>


                <Grid item xs={12} sm={12} style={{ marginTop: "1%", marginBottom: "1%" }}>

                    <Card>
                        <CardContent>
                            <Tabs
                                value={tab}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Current" />
                                <Tab label="Upcoming" />
                                <Tab label="Past" />
                            </Tabs>
                            {tab === 1 && (
                                <div>
                                    {isFetchedFut && <Reservations data={reservationFut} tab="1" />}
                                </div>
                            )}
                            {tab === 0 && (
                                <div>
                                    {isFetchedCurr && <Reservations data={reservationCurr} tab="0" />}
                                </div>
                            )}
                            {tab === 2 && (
                                <div>
                                    {isFetchedPast && <Reservations data={reservationPast} tab="2" />}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>

            {/* </Grid> */}
        </Container >
    );
}


export default Dashboard;
