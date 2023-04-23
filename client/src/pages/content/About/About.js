import React from 'react'
import {
    Col,
    Row,
    Card,
    CardBody,
    Button
} from 'reactstrap'
import AboutAddEdit from './AboutAddEdit'
import Image from './Image'
import AddImage from './AddImage'
export default function SecondLayer() {
    const [addModal, setAddModal] = React.useState(false)
    const [editModal, setEditModal] = React.useState(false)
    return (
        <div>
            <AboutAddEdit open={addModal} setOpen={() => setAddModal(!addModal)} isAdd={true} />
            <AboutAddEdit open={editModal} setOpen={() => setEditModal(!editModal)} isAdd={false} />
            <div className="page-title-box">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h6 className="h1">About Layer</h6>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active"></li>
                        </ol>
                    </Col>

                    <Col md="4">
                        <div className="float-end d-none d-md-block">
                            <Button color="primary" onClick={() => setAddModal(true)} ><i className="mdi fas mdi-card-plus-outline me-2"></i> New Heading</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col lg={4}>
                    <Card>
                        <h4 className="card-header mt-0">Vision</h4>
                        <CardBody>
                            <p className="card-text">
                                To be a leading force in driving positive transformation and growth for individuals and organizations, creating a brighter future together.
                            </p>
                            <Button className="btn btn-primary me-2" color='primry'>
                                Edit
                            </Button>
                            <Button className="btn btn-primary" color='danger'>
                                delete
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <h4 className="card-header mt-0">Mission</h4>
                        <CardBody>
                            <p className="card-text">
                                Leading the transformation of individuals and corporations for a sustainable future, one ethical, legal, and economical decision at a time.
                            </p>
                            <Button color='primry' className="btn btn-primary me-2" onClick={() => setEditModal(true)}>
                                Edit
                            </Button>
                            <Button className="btn btn-primary" color='danger'>
                                delete
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image />
                </Col>
                <Col>
                    <Image />
                </Col>
                <Col>
                    <Image />
                </Col>

            </Row>
            <Row>
                <AddImage />
            </Row>
        </div>
    )
}




