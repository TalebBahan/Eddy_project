import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
} from "reactstrap";

import Add from './Add';
import { Link } from 'react-router-dom';
export default function Posts() {
    const [addModal,setAddModal] = React.useState(false)
    return (
        <div className="page-content">
            <Add open={addModal} setOpen={()=>setAddModal(!addModal)} />
            <Container fluid>
                <div className="page-title-box">
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h6 className="page-title">Welcome</h6>
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item active">to Stas Sorokin, Bles dashboard</li>
                            </ol>
                        </Col>

                        <Col md="4">
                            <div className="float-end d-none d-md-block">
                                <Button color="primary" onClick={()=>setAddModal(true)}><i className="mdi fas mdi-card-plus-outline me-2"></i> Post</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Latest Transaction</h4>
                        <div className="table-responsive">
                            <table className="table table-hover table-centered table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">(#) Id</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col" colSpan="2">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">#14256</th>
                                        {/* <td>
                                            <div>
                                                <img
                                                    src={user2}
                                                    alt=""
                                                    className="avatar-xs rounded-circle me-2"
                                                />{" "}
                                                Philip Smead
                                            </div>
                                        </td> */}
                                        <td>15/1/2018</td>
                                        <td>$94</td>
                                        <td>
                                            <span className="badge bg-success">
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <div>
                                                <Link to="#" className="btn btn-primary btn-sm mr-2">
                                                    Edit
                                                </Link>
                                                <Link to="#" className="btn btn-danger btn-sm">
                                                    Delete
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
