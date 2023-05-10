import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useUpdateVideoMutation } from "./youtubeApi";
export default function Edit(props) {
  
  const [update] = useUpdateVideoMutation()
  const [formData, setFormData] = useState({
    title: props?.title,
    description: props?.description,
    videoId: props?.videoId,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    update(formData)
    setFormData({
      title: '',
      description: '',
      videoId: '',
    });
    props.handleOpen();
  };


  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
        {/* <form> */}

        <DialogHeader>{'Edit Video Info'}</DialogHeader>
        <DialogBody divider>
          <div class="flex flex-col">
            <label
              for="email"
              class="self-start mb-2 font-medium text-gray-800"
            >title</label>
            <input
              type="text"
              placeholder="title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="pass"
              class="self-start mb-2 font-medium text-gray-800"
            >description</label>
            <input
              type="text"
              placeholder="description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
            />
          </div>
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
      </Dialog>

    </Fragment >
  );
}