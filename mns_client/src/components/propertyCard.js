function PropertyCard(props) {
    console.log(props.info)
    return (
        <div class="col-md-3 my-1 py-1 mx-1 px-1 card">
            <img src={props.info.images[0].image_url} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.info.property_name}</h5>
                <p class="card-text">{props.info.property_type}</p>
            </div>
        </div>
    );
}

export default PropertyCard;