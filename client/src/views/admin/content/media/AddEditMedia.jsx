import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Upload from "./Upload";
import { useAddContentMutation, useEditContentMutation } from "../apiContent";
export default function AddEditMedia(props) {

  const [add] = useAddContentMutation()
  const [edit] = useEditContentMutation()
  const [formData, setFormData] = useState({
    h_text: props?.h_text,
    s_text: props?.s_text,
    link: props?.link,
    file: null,
    id: props?.id
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (file) => {
    setFormData({ ...formData, file: file });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const form = new FormData();
    form.append("file", formData.file);
    form.append("h_text", formData.h_text);
    form.append("s_text", formData.s_text);
    form.append("link", formData.link);
    form.append("type", 'media');
    if (props.isAdd) {
      add(form)
      setFormData({
        h_text: '',
        s_text: '',
        link: '',
        file: null,
      });
    }
    else {
      if (window.confirm('are you sure you want to save the edit ?'))
        edit(formData)
    }


    props.handleOpen();
  };
  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
        {/* <form> */}

        <DialogHeader>{props.isAdd ? 'Add New Carousel ' : 'Edit Carousel'}</DialogHeader>
        <DialogBody divider>
          <div class="flex flex-col">
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
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
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
          {props.isAdd && <Upload selectedFiles={formData.file}
            setselectedFiles={handleImageChange} />}
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