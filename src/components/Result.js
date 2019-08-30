import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Result = (props) => {
    console.log(props.data)
    return (
        <React.Fragment>
            <Card className="mb-3 ">
                {props.data.name ? <div className="bg-success p-3 mb-3"><h2>{props.data.name}</h2></div> : undefined}
                <ul className="list-group list-group-flush list-unstyled">
                    {props.data.open_now ? <li className="list-group-item">{props.data.open_now.open_now ? <React.Fragment><span className="font-weight-bold w-25 d-inline-block">Open Now</span>Open</React.Fragment> : <React.Fragment><span className="font-weight-bold w-25">Open Now:</span>Closed</React.Fragment>}</li> : <React.Fragment><span className="font-weight-bold">Open Now:</span>No Information Available</React.Fragment>}
                    {props.data.price_level ? <li className="list-group-item"><span className="font-weight-bold w-25">Affordability:</span>{props.compute(props.data.price_level)}</li> : <li className="list-group-item"><span className="font-weight-bold w-25 d-inline-block">Affordability:</span>No Information Available</li>}
                    {props.data.rating ? <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>{props.data.rating}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Rating:</span>No Ratings Yet</li>}
                    {props.data.user_ratings_total ? <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>{props.data.user_ratings_total}</li> : <li className="list-group-item"><span className="font-weight-bold w-25">Total Ratings:</span>No One Rated Yet</li>}
                </ul>
            </Card>
        </React.Fragment>
    )
}

export default Result