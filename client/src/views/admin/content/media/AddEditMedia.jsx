import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Upload from "./Upload";
export default function AddEditMedia(props) {

  const [formData, setFormData] = useState({
    h_text: props?.h_text,
    s_text: props?.s_text,
    link: props?.link,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g. send it to an API)
    console.log(formData);
    // Clear the form
    setFormData({
      h_text: '',
      s_text: '',
      link: '',
    });
    // Close the modal
    props.handleOpen();
  };
  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
        {/* <form> */}

          <DialogHeader>{props.isAdd ? 'Add New Media Coverage and Articles ' : 'Edit Media Coverage Or Articles'}</DialogHeader>
          <DialogBody divider>
            <div class="flex flex-col" >
            
              <label
                for="email"
                class="self-start mb-2 font-medium text-gray-800"
              >Heading</label>
              <input
                type="text"
                placeholder="Title"
                id="h_text"
                name="h_text"
                value={formData.h_text}
                onChange={handleChange}
                class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
                autocomplete="off"
              />
            </div>
            <div class="flex flex-col">
              <label
                for="pass"
                class="self-start mb-2 font-medium text-gray-800"
              >Sub Text</label>
              <input
                type="text"
                placeholder="Sub text"
                id="s_text"
                name="s_text"
                value={formData.s_text}
                onChange={handleChange}
                class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
                autocomplete="off"
              />
            </div>
            <div class="flex flex-col">
              <label
                for="pass"
                class="self-start mb-2 font-medium text-gray-800"
              >Read More Link</label>
              <input
                type="text"
                placeholder="Sub text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
                autocomplete="off"
              />
            </div>
            <Upload />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={props.handleOpen}
              class="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="text" color="green" onClick={handleSubmit}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        {/* </form> */}
      </Dialog>

    </Fragment >
  );
}