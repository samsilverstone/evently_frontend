import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Result = (props) => {
    console.log(props.data)
    return (
        <React.Fragment>
            <Card className="d-flex flex-row p-3">
                <img src={require('../images/image.jpg')} width="500" height="300" />
            </Card>
        </React.Fragment>
    )
}



export default Result