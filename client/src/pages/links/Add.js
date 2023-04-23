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
                <Modal isOpen={props.open} toggle={props.setOpen}>
                    <ModalHeader toggle={props.setOpen}>Add New Link</ModalHeader>
                    <ModalBody>
                    
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
