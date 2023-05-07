import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import Upload from "./Upload";
import { useAddArticleMutation } from "./newsletterApi";

export default function AddArticle(props) {
  const [add] = useAddArticleMutation();
  const [formData, setFormData] = useState({
    title: '',
    coverImage: null,
    body: '',
    readMoreLink:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCoverImageChange = (file) => {
    setFormData({ ...formData, coverImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formD = new FormData();
    formD.append("title", formData.title);
    formD.append("body", formData.body);
    formD.append("readMoreLink", formData.readMoreLink);
    formD.append("image", formData.coverImage);

    add({id:props.id,data:formD})
    setFormData({
      title: '',
      coverImage: null,
      body: ''
    });
    
    props.handleOpen();
  };

  return (
    <Fragment>

      <Dialog open={props.open} handler={props.handleOpen} size='xxl'>

        <DialogHeader>{props.isAdd ? 'Create New Newsletter' : 'Edit Newsletter'}</DialogHeader>
        <form onSubmit={handleSubmit}>
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
              for="readMoreLink"
              class="self-start mb-2 font-medium text-gray-800">Read More Link</label>
            <input
              type="text"
              placeholder="readMoreLink"
              id="readMoreLink"
              name="readMoreLink"
              value={formData.readMoreLink}
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
            <Textarea 
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 "
              autocomplete="off"
            ></Textarea>
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
          <Button variant="text" color="green" type="submit">
            <span>Confirm</span>
          </Button>
        </DialogFooter></form>

      </Dialog>

    </Fragment >
  );
}
