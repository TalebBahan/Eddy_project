import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,

} from "reactstrap";
export default function Links() {
  const [addModal,setAddModal] = React.useState(false)
  const [editModal,setEditModal] = React.useState(false)
  return (
    <div className="page-content">
      <Add open={addModal} setOpen={()=>setAddModal(!addModal)} />
      <Edit open={editModal} setOpen={()=>setEditModal(!editModal)} />
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
                <Button color="primary" onClick={() => setAddModal(true)}><i className="mdi fas mdi-card-plus-outline me-2"></i> Link</Button>
              </div>
            </Col>
          </Row>

        </div>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Ative Links</h4>
            <div className="table-responsive">
              <table className="table table-hover table-centered table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">Link</th>
                    <th scope="col">Platforme</th>
                    <th scope="col">Staus</th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

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
                    <td>https://wathsapp.com</td>
                    <td>Whatsapp</td>
                    <td>
                      <span className="badge bg-success">
                        Active
                      </span>
                    </td>
                    <td>
                      <div>
                        <Link to="#" className="btn btn-info btn-sm mr-2">
                          Activer
                        </Link>
                        <Button className="btn btn-primary btn-sm mr-2" onClick={() => setEditModal(true)}>
                          Edit
                        </Button>
                        <Link to="#" className="btn btn-danger btn-sm">
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>

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
                    <td>https://facebook.com</td>
                    <td>Facebook</td>
                    <td>
                      <span className="badge bg-danger">
                        Not Active
                      </span>
                    </td>
                    <td>
                      <div>
                        <Link to="#" className="btn btn-info btn-sm mr-2">
                          desactiver
                        </Link>
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
