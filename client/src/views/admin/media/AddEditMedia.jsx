import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Upload from "./Upload";
import Success from "components/Success";
import Error from "components/Error";
import { useAddMediaMutation, useEditMediaMutation } from "./api";
import { format } from "date-fns";
import { useGetInterestssQuery } from "../newsletter/interests/api";
export default function AddEditMedia(props) {
  const [add] = useAddMediaMutation();
  const [edit] = useEditMediaMutation();
  const [formData, setFormData] = useState({
    h_text: props?.h_text || "",
    s_text: props?.s_text || "",
    link: props?.link || "",
    file: null,
    id: props?.id || "",
    interests: props?.interests || [],
    date: props?.date ? format(new Date(props.date), "yyyy-MM-dd") : "",
  });
  const { data: interestsData, isLoading, isError } = useGetInterestssQuery();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  if (isLoading || isError) {
    return <div>Loading...</div>;
  }
  const interests = interestsData?.map((interest) => interest?.interest);




  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const formattedDate = format(new Date(value), "yyyy-MM-dd");
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((formData) => ({
        ...formData,
        interests: [...formData.interests, value],
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        interests: formData.interests.filter((interest) => interest !== value),
      }));
    }
  };

  const handleImageChange = (file) => {
    setFormData({ ...formData, file: file });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.h_text) {
      errors.h_text = "Heading is required";
    }

    if (!formData.s_text) {
      errors.s_text = "Sub Text is required";
    }

    if (!formData.link) {
      errors.link = "Link is required";
    }

    if (!formData.file && props.isAdd) {
      errors.file = "Image is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log(formData);

    const form = new FormData();
    form.append("file", formData.file);
    form.append("h_text", formData.h_text);
    form.append("s_text", formData.s_text);
    form.append("link", formData.link);
    form.append("id", props?.id);
    form.append("date", formData.date);
    form.append("interests", JSON.stringify(formData.interests));

    if (props.isAdd) {
      add(form)
        .then(() => {
          setSuccessMessage("Successfully added.");
          setFormData({
            h_text: "",
            s_text: "",
            link: "",
            interests: [],
            file: null,
            date: "",
          });
        })
        .catch(() => {
          setErrorMessage("Error adding the item.");
        });
    } else {
      if (window.confirm("Are you sure you want to save the edit?")) {
        form.append("image", props?.image);
        edit({ form, id: props.id })
          .then(() => {
            setSuccessMessage("Successfully edited.");
          })
          .catch(() => {
            setErrorMessage("Error editing the item.");
          });
      }
    }

    props.handleOpen();
  };

  return (
    <Fragment>
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}
      <Dialog open={props.open} handler={props.handleOpen} size="sm">
        <DialogHeader>
          {props.isAdd ? "Add New Media coverage or article" : "Edit this"}
        </DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="self-start mb-2 font-medium text-gray-800"
            >
              Heading
            </label>
            <input
              type="text"
              placeholder="Title"
              id="h_text"
              name="h_text"
              value={formData.h_text}
              onChange={handleChange}
              className={`outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded ${formErrors.h_text ? "border-red-500" : ""
                }`}
              autoComplete="off"
              required
            />
            {formErrors.h_text && (
              <p className="text-red-500 text-sm">{formErrors.h_text}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pass"
              className="self-start mb-2 font-medium text-gray-800"
            >
              Sub Text
            </label>
            <input
              type="text"
              placeholder="Sub text"
              id="s_text"
              name="s_text"
              value={formData.s_text}
              onChange={handleChange}
              className={`outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded ${formErrors.s_text ? "border-red-500" : ""
                }`}
              autoComplete="off"
              required
            />
            {formErrors.s_text && (
              <p className="text-red-500 text-sm">{formErrors.s_text}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pass"
              className="self-start mb-2 font-medium text-gray-800"
            >
              Read More Link
            </label>
            <input
              type="text"
              placeholder="Sub text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className={`outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded ${formErrors.link ? "border-red-500" : ""
                }`}
              autoComplete="off"
            />
            {formErrors.link && (
              <p className="text-red-500 text-sm">{formErrors.link}</p>
            )}

          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pass"
              className="self-start mb-2 font-medium text-gray-800"
            >
              Date
            </label>
            <input
              type="date"
              placeholder="Date"
              id="date"
              name="date"
              defaultValue={formData.date}
              onChange={handleChange}
              className={`outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded ${formErrors.date ? "border-red-500" : ""
                }`}
              autoComplete="off"
              required
            />
            {formErrors.date && (
              <p className="text-red-500 text-sm">{formErrors.date}</p>
            )}
          </div>
          
          <div className="flex items-center">
            {interests.map((interest) => (
              <label className="mr-2 self-start mb-2 font-medium text-gray-800" htmlFor={interest} key={interest}>
                <input
                  className="mr-1"
                  type="checkbox"
                  id={interest}
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleInterestChange}
                />
                {interest}
              </label>
            ))}
          </div>

          <div className="m-4">
            <Upload
              selectedFiles={formData.file}
              setselectedFiles={handleImageChange}
              image={props?.image}
              className={`outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded ${formErrors.file ? "border-red-500" : ""
                }`}
            />
            {formErrors.file && (
              <p className="text-red-500 text-sm">{formErrors.file}</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={props.handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="text" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
