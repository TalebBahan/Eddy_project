import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Upload from "./Upload";
import { useCreatenewsletterMutation } from "./newsletterApi";

export default function AddEditNewsletter(props) {

  const [add] = useCreatenewsletterMutation();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    coverImage: null,
    body: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCoverImageChange = (file) => {
    setFormData({ ...formData, coverImage: file });
  };
  const handleInterestChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      interests: [...formData.interests, value],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("subject", formData.subject);
    form.append("image", formData.coverImage);
    form.append("body", formData.body);
    add(form)
    setFormData({
      title: '',
      subject: '',
      coverImage: null,
      body: '',
    });

    props.handleOpen();
  };

  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>

        <DialogHeader>Add News Letter</DialogHeader>

        <DialogBody divider>
          <div class="flex flex-col">
            <label
              for="title"
              class="self-start mb-2 font-medium text-gray-800"
            >Title</label>
            <input
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="subject"
              class="self-start mb-2 font-medium text-gray-800"
            >Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="body"
              class="self-start mb-2 font-medium text-gray-800"
            >Body</label>
            <input
              type="text"
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="coverImage"
              class="self-start mb-2 font-medium text-gray-800"
            >Cover Image</label>
            <Upload selectedFiles={formData.coverImage}
              setselectedFiles={handleCoverImageChange} />
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
