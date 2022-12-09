import { Card } from "react-bootstrap";

function PropertyCard(props) {
    return (
        <Card className='col-md-3 my-1 py-1 mx-1 px-1'>
            <Card.Img variant="top" src={props.info.images[0].image_url} />
            <Card.Body>
                <Card.Title>{props.info.property_name}</Card.Title>
                <Card.Text>{props.info.property_type}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;