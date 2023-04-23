import React from 'react'
import {
    Col,
    Row,
    Button

} from "reactstrap";
import Image from './Image';
import AddEditCarouselModal from './AddEditCarousel';
export default function Carousel() {
    const [addModal, setAddModal] = React.useState(false)
    return (
        <div>
            <AddEditCarouselModal open={addModal} setOpen={() => setAddModal(!addModal)} isAdd={true} />
            <div className="page-title-box">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h6 className="h1">Carousel Layer</h6>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active"></li>
                        </ol>
                    </Col>

                    <Col md="4">
                        <div className="float-end d-none d-md-block">
                            <Button color="primary" onClick={() => setAddModal(true)}><i className="mdi fas mdi-card-plus-outline me-2"  ></i> New Carousel</Button>
                        </div>
                    </Col>
                </Row>

            </div>
            <Row>
                <Col lg={4}>
                    <Image top_text={'hello'} sub_text={'hello'} />
                </Col>
                <Col lg={4}>
                    <Image top_text={'hello'} sub_text={'hello'} />
                </Col>
                <Col lg={4}>
                    <Image top_text={'hello'} sub_text={'hello'} />
                </Col>
            </Row>
        </div>
    )
}
