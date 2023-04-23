import React from 'react'
import {
    Col,
    Row,
    Button

} from "reactstrap";
import Image from './Image';
import AddEditMedia from './AddEditMedia';
export default function Media() {
    const [addModal, setAddModal] = React.useState(false)
    return (
        <div>
            <AddEditMedia open={addModal} setOpen={() => setAddModal(!addModal)} isAdd={true} />
            <div className="page-title-box">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h1 className="h1">Media Coverage and Aticls Layer</h1>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active"></li>
                        </ol>
                    </Col>

                    <Col md="4">
                        <div className="float-end d-none d-md-block">
                            <Button color="primary" onClick={() => setAddModal(true)}><i className="mdi fas mdi-card-plus-outline me-2"  ></i> New Event or Aricle</Button>
                        </div>
                    </Col>
                </Row>

            </div>
            <Row>
                <Col lg={4}>
                    <Image top_text={'Networking'} sub_text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'} />
                </Col>
                <Col lg={4}>
                    <Image top_text={'Networking'} sub_text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'} />
                </Col>
                <Col lg={4}>
                    <Image top_text={'Networking'} sub_text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'} />
                </Col>
                <Col lg={4}>
                    <Image top_text={'Networking'} sub_text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'} />
                </Col>
            </Row>
        </div>
    )
}
