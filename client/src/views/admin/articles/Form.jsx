import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useCreateArticleMutation, useUpdateArticleMutation } from "./api";
import Upload from "./Upload";
import Success from "components/Success";
import Error from "components/Error";

export default function ArticleForm(props) {
  console.log(props);
  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFormData({
      title: props.title || "",
      body: props.body || "",
      file: null,
      link: props.link || "",
    });
  }, [props]);

  const handleImageChange = (file) => {
    setFormData({ ...formData, file: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", formData.file);
    form.append("title", formData.title);
    form.append("body", formData.body);
    form.append("link", formData.link);

    try {
      if (!props.isAdd) {
        await updateArticle({ id: props._id, form });
        setSuccessMessage("Article successfully updated.");
      } else {
        await createArticle(form);
        setSuccessMessage("Article successfully created.");
      }

      setFormData({
        title: "",
        body: "",
        file: null,
        link: "",
      });
      props.handleClose();
    } catch (error) {
      setErrorMessage("Error submitting the form.");
    }
  };

  return (
    <div>
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}

      <Dialog open={props.open} onClose={props.handleClose} size="xxl">
        <DialogHeader>
          {!props.isAdd ? "Edit Article" : "Add Article"}
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="body"
              >
                Body
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="body"
                placeholder="Body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="link"
              >
                Link
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="link"
                type="text"
                placeholder="Link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Upload selectedFiles={formData.file} setselectedFiles={handleImageChange} image={props?.imageUrl} />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={props.handleClose} class="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="text" color="green" onClick={handleSubmit}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
