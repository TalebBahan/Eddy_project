import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Upload from "./Upload";
import { useCreatePostMutation, useUpdatePostMutation } from "./linkdubApi";
export default function AddEditMedia(props) {

  const [add] = useCreatePostMutation()
  const [edit] = useUpdatePostMutation()
  const [formData, setFormData] = useState({
    tags: props?.tags,
    text: props?.text,
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
    const form = new FormData();
    form.append("file", formData.file);
    form.append("tags", formData.tags);
    form.append("title", formData.text);
    form.append("link", formData.link);
    form.append("type", 'media');
    if (props.isAdd) {
      add(form)
      setFormData({
        tags: '',
        text: '',
        link: '',
        file: null,
      });
    }
    else {
      if (window.confirm('are you sure you want to save the edit ?'))
        edit({ body: { ...formData }, id: props.id })
    }


    props.handleOpen();
  };
  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
        {/* <form> */}

        <DialogHeader>{props.isAdd ? 'Add New Post ' : 'Edit this Post'}</DialogHeader>
        <DialogBody divider>
          <div class="flex flex-col">
            <label
              for="pass"
              class="self-start mb-2 font-medium text-gray-800"
            >Text</label>
            <input
              type="text"
              placeholder="Enter the post text here"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
              required
            />
          </div>
          <div class="flex flex-col">
            <label
              for="email"
              class="self-start mb-2 font-medium text-gray-800"
            >Tags</label>
            <input
              type="text"
              placeholder="#each #tag #seperated #by #space #and #start #with #a #hash"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autocomplete="off"

              required
            />
          </div>
          <div class="flex flex-col">
            <label
              for="pass"
              class="self-start mb-2 font-medium text-gray-800"
            >The Post Link</label>
            <input
              type="text"
              placeholder="Post Link"
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
            class="mr-2"
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