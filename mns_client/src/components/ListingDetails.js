import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
} from "@material-ui/core";

import mongoose from "mongoose";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Rating } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function ListingDetails() {
  const [property, setProperty] = useState(null);
  const [startDate, setStartDate] = useState(new Date().getDate());
  const [endDate, setEndDate] = useState(new Date().getDate() + 1);

  const location = useLocation();
  const listing_id = location.state.from;

  const reserve = () => {
    let requestBody = {
      start_date: startDate,
      end_date: endDate,
      status: "pending",
      host_id: property.host_id,
      guest_id: property.host_id,
      property_id: property._id,
      property_name: property.property_name,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };
    fetch("http://localhost:3000/reservations/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const initial_review = {
    reviewer: {
      name: "Abhirup Bhattacharya",
    },
    property_id: listing_id,
    rating: 0,
    comment: "",
  };

  const [reviewData, setReviewData] = useState(initial_review);
  const [reviews, setReviews] = useState(null);
  const [wishlist, setWishList] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [wishFetched, setWishFetched] = useState(false);
  //let isFavorited = false

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:3000/listings/" + listing_id)
      ).json();
      console.log(data);
      setProperty(data);
    };

    dataFetch();
  }, []);

  // useEffect(() => {
  //   const wishlistFetch = async () => {
  //     const data = await (
  //       await fetch(
  //         "http://localhost:3000/wishlist?prop_id=6393d4817fcee3470f65b6f4&guest_id=123"
  //       )
  //     ).json();
  //     if(!data){
  //     console.log("inside useeffect wishlist")
  //     console.log(data)
  //     }
  //     if(data){
  //     setWishList(data);
  //       isFavorited = true
  //     }
  //     else{
  //       isFavorited = false
  //     }

  //   };

  //   wishlistFetch();
  // }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "http://localhost:3000/wishlist?prop_id=6393d4817fcee3470f65b6f4&guest_id=123"
    )
      .then((response) => response.json())
      .then((json) => {
        setWishFetched(true);
        if (json) {
          //isFavorited = true
          setIsFavorited(true);
          console.log("inside useeffect json");
          setWishList(json);
        } else {
          //isFavorited = false
          setIsFavorited(false);
          setWishList(json);
        }
      });
  }, []);

  useEffect(() => {
    const reviewFetch = async () => {
      const data = await (
        await fetch("http://localhost:3000/listings/reviews/" + listing_id)
      ).json();
      console.log(data);
      setReviews(data);
    };
    reviewFetch();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //const formData1 = new FormData();
    //formData1.append('property_name', 'Mi Casa');
    //formData1.append('property_type', 'Boat');

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    };
    fetch("http://localhost:3000/listings/reviews", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setOpen(false);
  };

  // console.log(property)
  const handleRating = (newRating) => {
    setRating(newRating);
    setReviewData({ ...reviewData, rating: newRating });
  };
  const [rating, setRating] = React.useState(0);

  const handleClick = () => {
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
    }

    console.log(isFavorited);

    if (!isFavorited) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guest_id: "123",
          property_id: "6393d4817fcee3470f65b6f4",
        }),
      };
      fetch("http://localhost:3000/wishlist/", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } else {
      fetch(
        "http://localhost:3000/wishlist/delete?prop_id=6393d4817fcee3470f65b6f4&guest_id=123"
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  if (property && reviews) {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ marginTop: "1%", marginBottom: "1%" }}
          >
            <Typography variant="h4">
              {property.property_name}
              <Button
                variant="contained"
                style={{ float: "right" }}
                color={isFavorited ? "secondary" : "default"}
                onClick={handleClick}
                startIcon={
                  isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
              >
                {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            </Typography>

            <Card>
              <CardMedia
                component="img"
                alt={property.name}
                height="380"
                image={`img/propertyImages${property.images[0]}`}
                title={property.name}
                style={{ margin: "1%" }}
              />
            </Card>
          </Grid>
        </Grid>

        {/* <Grid> */}
        <Grid item xs={12} sm={12} style={{ margin: "2%" }}>
          <Typography variant="h5">
            {property.property_type} hosted by {property.host_name}
          </Typography>

          <Grid container xs={12} sm={12} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card style={{ padding: "3%", marginBottom: "3%" }}>
                <Typography variant="body1" gutterBottom>
                  {property.max_guests} Guests | {property.bed_count} Beds |{" "}
                  {property.bath_count} Baths
                </Typography>
                <Divider />
                <CardContent>
                  {/* <Chip label={property.type} color="primary" /> */}
                  <Typography variant="body2" gutterBottom>
                    {property.description}
                  </Typography>
                </CardContent>
              </Card>

              <Card style={{ padding: "3%" }}>
                <Typography variant="h6">Amenities Offered</Typography>
                <Divider />
                <CardContent>
                  {/* <Chip label={property.type} color="primary" /> */}
                  <ul>
                    {property.amenities.swimming_pool && (
                      <li>
                        <Typography variant="body2" gutterBottom>
                          Swimming Pool
                        </Typography>
                      </li>
                    )}

                    {property.amenities.sun_lounger && (
                      <li>
                        <Typography variant="body2" gutterBottom>
                          Sun Lounger
                        </Typography>
                      </li>
                    )}

                    {property.amenities.garden && (
                      <li>
                        <Typography variant="body2" gutterBottom>
                          Garden
                        </Typography>
                      </li>
                    )}

                    {property.amenities.television && (
                      <li>
                        <Typography variant="body2" gutterBottom>
                          Television
                        </Typography>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ justifyContent: "center" }}
                  >
                    Book your stay
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="checkin-date"
                        label="Check-in date"
                        value={startDate}
                        type="date"
                        variant="filled"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="checkout-date"
                        value={endDate}
                        label="Check-out date"
                        type="date"
                        variant="filled"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <InputLabel id="guests-label">Guests</InputLabel>
                  <Select
                    labelId="guests-label"
                    id="guests"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 16 }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>

                  <Grid
                    container
                    style={{ marginTop: "2%", alignItems: "center" }}
                    alignContent="flex-start"
                  >
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <Typography>
                        Price Per Night : ${property.cost.per_night}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <Typography>
                        Cleaning Fee : ${property.cost.cleaning_fee}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <Typography>
                        Deposit Amount : ${property.cost.deposit}
                      </Typography>
                      <br />
                    </Grid>

                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <Divider
                        variant="fullWidth"
                        style={{ height: 2, backgroundColor: "darkgrey" }}
                      />
                      <Typography variant="h5">
                        Total : $
                        {property.cost.per_night +
                          property.cost.cleaning_fee +
                          property.cost.deposit}
                      </Typography>
                    </Grid>
                    {/* <Grid item> */}
                  </Grid>
                  {/* </Grid> */}

                  <Button
                    style={{ marginTop: "3%" }}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={reserve}
                    fullWidth
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Review Grid */}
        <Grid item xs={12} sm={12} style={{ margin: "2%" }}>
          <Card style={{ padding: "3%" }}>
            <Typography variant="h6">
              What Other Guests Have To Say
              <Button
                variant="outlined"
                color="primary"
                style={{ float: "right" }}
                onClick={handleClickOpen}
              >
                Add Review
              </Button>
              <div style={{ width: "100%" }}>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Review</DialogTitle>
                  <DialogContent>
                    <Typography variant="body1">
                      {" "}
                      Posting as Abhirup Bhattacharya
                    </Typography>
                    <TextField
                      margin="dense"
                      id="comment"
                      label="Your Comment"
                      type="text"
                      multiline
                      rows="4"
                      fullWidth
                      value={reviewData.comment}
                      onChange={(event) =>
                        setReviewData({
                          ...reviewData,
                          comment: event.target.value,
                        })
                      }
                    />
                    <div>
                      <Typography>
                        Rating:
                        {[...Array(5)].map((star, index) => {
                          const ratingValue = index + 1;

                          return (
                            <label key={index}>
                              <input
                                type="radio"
                                style={{ display: "none" }}
                                name="rating"
                                value={ratingValue}
                                onClick={() => handleRating(ratingValue)}
                              />
                              {ratingValue <= rating ? (
                                <StarIcon />
                              ) : (
                                <StarBorderIcon />
                              )}
                            </label>
                          );
                        })}
                      </Typography>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Typography>

            <Divider style={{ marginTop: "1%" }} />
            <List>
              {reviews.length > 0 && (
                <ol>
                  {reviews.map((review) => (
                    <li key={review.reviewer.id}>
                      <Typography variant="h6">
                        {review.reviewer.name}
                        <br />
                      </Typography>
                      <Typography variant="h7">
                        {review.date}
                        <br />
                      </Typography>
                      <Rating
                        name="rating"
                        defaultValue={review.rating}
                        precision={0.5}
                        size="large"
                      />
                      <Typography variant="body2" gutterBottom>
                        {review.comment}
                      </Typography>
                      <br />
                    </li>
                  ))}
                </ol>
              )}
              {reviews.length === 0 && (
                <Typography variant="h7">No Reviews Yet</Typography>
              )}
            </List>
          </Card>
        </Grid>

        {/* </Grid> */}
      </Container>
    );
  }
}

export default ListingDetails;
