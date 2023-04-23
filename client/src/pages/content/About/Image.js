import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    Button
} from "reactstrap";
import img2 from "../../../assets/images/small/img-2.jpg";


export default function Image(props) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="h4">
                        <Button color="danger" className='float-end mb-2'>
                            <i className='mdi mdi-delete '></i>
                        </Button>
                    </CardTitle><br></br>
                    <CardImg className="img-fluid" src={img2} alt="veltrix" />
                </CardBody>
            </Card>
        </div>
    )
}
