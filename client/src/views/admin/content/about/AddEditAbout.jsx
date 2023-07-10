import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAddContentMutation,useEditContentMutation } from "../apiContent";
import Upload from "./Upload";
import Success from "components/Success";
import Error from "components/Error";

export default function AddEditAbout(props) {
  const [add] = useAddContentMutation();
  const [edit] = useEditContentMutation();
  const [formData, setFormData] = useState({
    h_text: props?.h_text || "",
    s_text: props?.s_text || "",
    link: "example.com",
    type: "about",
    id: props?.id || "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add or edit
    try {
      if (props.isAdd) await add(formData);
      else await edit({...formData})
      setSuccessMessage("Successfully added/edited !");
      props.handleOpen();
    } catch (error) {
      setErrorMessage("Error occurred while adding/editing content.");
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen} size="xxl">
        <DialogHeader>
          {props.isAdd ? "Add New Thing About You" : "Edit About"}
        </DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col">
            <label htmlFor="h_text" className="self-start mb-2 font-medium text-gray-800">
              Heading
            </label>
            <input
              type="text"
              placeholder="Title"
              id="h_text"
              name="h_text"
              value={formData.h_text}
              onChange={handleChange}
              className="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="s_text" className="self-start mb-2 font-medium text-gray-800">
              Sub Text
            </label>
            <input
              type="text"
              placeholder="Sub text"
              id="s_text"
              name="s_text"
              value={formData.s_text}
              onChange={handleChange}
              className="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autoComplete="off"
            />
          </div>
          {/* Uncomment this section if needed */}
          {/* <div className="flex flex-col">
            <label htmlFor="link" className="self-start mb-2 font-medium text-gray-800">
              Read More Link
            </label>
            <input
              type="text"
              placeholder="Sub text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autoComplete="off"
            />
          </div> */}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={props.handleOpen} className="mr-1">
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
