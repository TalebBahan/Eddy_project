import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Button } from 'reactstrap';
import UploadImageDropZone from './UploadImageDropZone';


const AddEditMedia = (props) => {
  const [formData, setFormData] = useState({
    h_text: props?.h_text,
    s_text: props?.s_text,
    selectedImage: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (file) => {
    setFormData({ ...formData, selectedImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g. send it to an API)
    console.log(formData);
    // Clear the form
    setFormData({
      h_text: '',
      s_text: '',
      selectedImage: []
    });
    // Close the modal
    props.setOpen(false);
  };

  return (
    <Modal isOpen={props.open} toggle={props.setOpen}>
      <form onSubmit={handleSubmit}>
        <ModalHeader toggle={props.setOpen}>{props.isAdd ? "Add New Carasol" : "Edit The Carousel"}</ModalHeader>
        <ModalBody>
          <Row className="mb-3">
            <label htmlFor="h_text" className="col-md-2 col-form-label">
              Heading Text
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                id="h_text"
                name="h_text"
                value={formData.h_text}
                onChange={handleChange}
              />
            </div>
          </Row>
          <Row className="mb-3">
            <label htmlFor="s_text" className="col-md-2 col-form-label">
              Sub Text
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="text"
                placeholder="Sub text"
                id="s_text"
                name="s_text"
                value={formData.s_text}
                onChange={handleChange}
              />
            </div>
          </Row>
          <Row className="mb-3">
            <UploadImageDropZone
              selectedFiles={formData.selectedImage}
              setselectedFiles={handleImageChange}
            />
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => props.setOpen(false)}>
            Close
          </Button>{" "}
          <Button color="primary" type="submit">
            Save changes
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddEditMedia;
