import React from 'react'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
  } from "reactstrap";
export default function Add(props) {
    return (
        <div>
            <div className="my-4 text-center">
                <p className="text-muted">Standard modal</p>
                <Modal isOpen={props.open} toggle={props.setOpen}>
                    <ModalHeader toggle={props.setOpen}>Add New Post</ModalHeader>
                    <ModalBody>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7051604181945651201" allowfullscreen="" title="Embedded post" width="504" height="486" frameborder="0"></iframe>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={props.setOpen}>
                            Close
                        </Button>{' '}
                        <Button color="primary">
                            Save changes
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
