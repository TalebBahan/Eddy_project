import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";
import React, { useState } from "react";
import { useGetUserByIdQuery, useUpdateUserRolesMutation } from "./apiUsers";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export default function RolesList({ _id, username, roles: rolesL, open, handleOpen }) {
  const [roles, setRoles] = useState({ ...rolesL });
  console.log(_id);
  const [updateUserRoles] = useUpdateUserRolesMutation();

  const handleRoleChange = (roleName) => {
    setRoles((prevState) => ({
      ...prevState,
      [roleName]: !prevState[roleName],
    }));
  };

  const handleSave = () => {
    const userRoles = Object.keys(roles).reduce((acc, role) => {
      return { ...acc, [role]: roles[role] ? 1 : 0 };
    }, {});

    if (window.confirm('are you sure you want to submmit this ?')) updateUserRoles({ _id, roles: userRoles });
    handleOpen();
  };
  const roleNames = [
    { key: "Admin", label: "Admin" },
    { key: "Editor", label: "Editor" },
    { key: "User", label: "User" },
    { key: "postAdmin", label: "postAdmin" },
    { key: "postEditor", label: "postEditor" },
    { key: "postUser", label: "postUser" },
    { key: "linkAdmin", label: "linkAdmin" },
    { key: "linkEditor", label: "linkEditor" },
    { key: "linkUser", label: "linkUser" },
    { key: "contentAdmin", label: "contentAdmin" },
    { key: "contentEditor", label: "contentEditor" },
    { key: "contentUser", label: "contentUser" },
  ];


  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} size="xxl">
        <Card extra={"w-full h-full p-3"}>
          <div className="relative mb-3 flex items-center justify-between pt-1">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {username} {' '}Permissions
            </h4>
          </div>
          <div className="flex flex-col">
            {roleNames.map((role) => (
              <div className="mt-3 flex items-center gap-3" key={role.key}>
                <Switch
                  id={`switch-${role.key}`}
                  checked={roles[role.key]}
                  onChange={() => handleRoleChange(role.key)}
                />
                <label
                  htmlFor={`switch-${role.key}`}
                  className="text-base font-medium text-navy-700 dark:text-white"
                >
                  {role.label}
                </label>
              </div>
            ))}

            {/* other switches here... */}
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                class="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="text" color="green" onClick={handleSave}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </div>
        </Card>
      </Dialog>
    </Fragment>
  );
}


