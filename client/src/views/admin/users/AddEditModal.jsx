import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAddUsersMutation, useEditUsersMutation } from "./apiUsers";

export default function AddEditModal(props) {
  const [add] = useAddUsersMutation();
  const [editUser] = useEditUsersMutation();

  const [formData, setFormData] = useState("");
  useEffect(
    () =>
      setFormData({
        username: props?.username,
        password: props?.password,
        email: props?.email,
        id: props?._id,
      }),
    [props]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.isAdd) add(formData);
    else editUser(formData);
    setFormData({
      username: "",
      password: "",
      email: "",
    });
    props.handleOpen();
  };
  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen} size="xxl">
        <DialogHeader>
          {props.isAdd ? "Add New User" : "Edit User"}
        </DialogHeader>
        <DialogBody divider>
          <div class="flex flex-col">
            <label
              for="username"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="password"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-col">
            <label
              for="email"
              class="self-start mb-2 font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
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
    </Fragment>
  );
}
