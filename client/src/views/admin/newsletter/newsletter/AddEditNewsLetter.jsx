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
    coverImage: null,
    scheduledTime: '',
    interests: [],

  });
  const interests =[
    "Leadership development",
    "Organizational transformation",
    "Corporate governance",
    "Business strategy",
    "Sales and operations management",
    "Board of director leadership",
    "Professional development",
    "Entrepreneurship",
    "Executive coaching",
    "Business analytics"
  ];
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
    form.append("image", formData.coverImage);
    form.append("scheduledTime", formData.scheduledTime);
    form.append("intersts", formData.interests);
    console.log('====================================');
    console.log(form);
    console.log('====================================');
    add(form)
    setFormData({
      title: '',
      coverImage: null,
      scheduledTime: '',
      interests: [],
    });

    props.handleOpen();
  };

  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>

        <DialogHeader>{props.isAdd ? 'Create New Newsletter' : 'Edit Newsletter'}</DialogHeader>

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
              for="coverImage"
              class="self-start mb-2 font-medium text-gray-800"
            >Cover Image</label>
            <Upload selectedFiles={formData.coverImage}
              setselectedFiles={handleCoverImageChange} />
          </div>
          <div class="flex flex-col">
            <label
              for="scheduledTime"
              class="self-start mb-2 font-medium text-gray-800"
            >Scheduled Time</label>
            <input
              type="datetime-local"
              id="scheduledTime"
              name="scheduledTime"
              value={formData.scheduledTime}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
            />
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="interests">
              Interests
            </label>
            <div className="flex items-center">
              {interests.map((interest) => (
                <label
                  className="mr-2 text-gray-700"
                  htmlFor={interest}
                  key={interest}

                >
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
