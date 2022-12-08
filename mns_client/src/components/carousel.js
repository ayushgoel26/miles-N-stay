import { Carousel, Card, Stack, Button, Container } from 'react-bootstrap';

function CarouselMulti(props) {
    return (
        // <div class="col-md-9 col-lg-10">
        //     <div class="row container-fluid py-3 mt-4 pe-0 me-0">
        //         <h2 class="h3">City</h2>
        //         <div class="row mt-4 justify-content-center">
        //             <div id="cityCarousel" class="carousel slide" data-bs-ride="carousel">
        //                 <div class="carousel-inner" role="listbox">
        //                     <div class="carousel-item active">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/austin.jpeg"
        //                                         class="img-fluid card-img-top rounded" alt="Austin" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a href="#">
        //                                         <h5 class="card-title">Austin</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="carousel-item">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/chicago.jpeg"
        //                                         class="img-fluid card-img-top rounded" alt="Chicago" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a href="#">
        //                                         <h5 class="card-title">Chicago</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="carousel-item">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/denver.jpeg"
        //                                         class="img-fluid card-img-top rounded" alt="Denver" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a href="#">
        //                                         <h5 class="card-title">Denver</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="carousel-item">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/NewYork.jpeg"
        //                                         class="img-fluid card-img-top rounded" alt="New York" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a href="#">
        //                                         <h5 class="card-title">New York</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="carousel-item">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/SanFrancisco.webp"
        //                                         class="img-fluid card-img-top rounded" alt="San Francisco" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a href="#">
        //                                         <h5 class="card-title">San Francisco</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="carousel-item">
        //                         <div class="col-md-3">
        //                             <div class="card-city border-0">
        //                                 <div class="card-img">
        //                                     <img src="img/city-thumbnails/seattle.jpeg"
        //                                         class="img-fluid card-img-top rounded" alt="Seattle" />
        //                                 </div>
        //                                 <div class="card-body">
        //                                     <a class="cityanchor" href="#">
        //                                         <h5 class="card-title">Seattle</h5>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <a class="carousel-control-prev bg-dark w-aut" href="#cityCarousel" role="button"
        //                     data-bs-slide="prev">
        //                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //                 </a>
        //                 <a class="carousel-control-next bg-dark w-aut" href="#cityCarousel" role="button"
        //                     data-bs-slide="next">
        //                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/welcome.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/welcome.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/welcome.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
};

export default CarouselMulti;