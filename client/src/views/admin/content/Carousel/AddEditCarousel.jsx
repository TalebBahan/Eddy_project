import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useUpdateHeroMutation } from "./api";

export default function AddEditCarousel(props) {

  const [edit] = useUpdateHeroMutation()
  const [formData, setFormData] = useState({
    h_text: props?.h_text,
    s_text: props?.s_text,
    reward: props?.reward,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('are you sure you want to save the edit ?'))
      edit({ formData, id: props.id })

    props.handleOpen();
  };
  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
        {/* <form> */}

        <DialogHeader>{'Edit Hero section'}</DialogHeader>
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
            >reward</label>
            <input
              type="text"
              placeholder="Sub text"
              id="reward"
              name="reward"
              value={formData.reward}
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