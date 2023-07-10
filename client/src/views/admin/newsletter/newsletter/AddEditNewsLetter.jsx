import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useUpdatenewsletterMutation } from "./newsletterApi";
import Success from "components/Success";
import Error from "components/Error";

export default function AddEditNewsletter(props) {
  const [edit] = useUpdatenewsletterMutation();
  const [formData, setFormData] = useState({
    title: props.title || "",
    subject: props.subject || "",
    body: props.body || "",
    id: props._id || "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await edit(formData);
      setSuccessMessage("Newsletter successfully edited.");
    } catch (error) {
      setErrorMessage("Error editing the newsletter.");
    }
    props.handleClose();
  };

  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleClose} size="xxl">
        <DialogHeader>Add News Letter</DialogHeader>
        <DialogBody divider>
          <div class="flex flex-col">
            <label
              for="title"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autoComplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="subject"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autoComplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="body"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Body
            </label>
            <input
              type="text"
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autoComplete="off"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={props.handleClose}
            class="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="text" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}
    </Fragment>
  );
}
