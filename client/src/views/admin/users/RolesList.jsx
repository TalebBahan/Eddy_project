import React, { useEffect, useState } from "react";
import Card from "components/card";
import Switch from "components/switch";
import { useUpdateUserRolesMutation } from "./apiUsers";
import { Fragment } from "react";
import { Button, Dialog, DialogFooter } from "@material-tailwind/react";

export default function RolesList({ _id, username, roles: initialRoles, open, handleOpen }) {
  
  const [roles, setRoles] = useState({});
  useEffect(() => {
    setRoles({ ...initialRoles });
  }, [initialRoles]);
  const [updateUserRoles] = useUpdateUserRolesMutation();

  const handleRoleChange = (roleName) => {
    setRoles((prevState) => ({
      ...prevState,
      [roleName]: !prevState[roleName],
    }));
  };

  const handleSave = () => {
    const userRoles = Object.keys(roles).reduce((acc, role) => ({
      ...acc,
      [role]: roles[role] ? 1 : 0,
    }), {});

    if (window.confirm('Are you sure you want to submit this?')) {
      updateUserRoles({ _id, roles: userRoles });
    }
    handleOpen();
  };

  const roleNames = [
    { key: "Admin", label: "Admin" },
    { key: "content", label: "content" },
    { key: "articles", label: "articles" },
    { key: "books", label: "books" },
    { key: "newsletter", label: "newsletter" },
    { key: "subscriber", label: "subscriber" },
    { key: "youtube", label: "youtube" },
    { key: "linkedin", label: "linkedin" },
    { key: "User", label: "User" },
  ];
  const handleclose = () => {
      handleOpen();
  };

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} size="xxl">
        <Card extra="w-full h-full p-3">
          <div className="relative mb-3 flex items-center justify-between pt-1">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {`${username} Permissions`}
            </h4>
          </div>
          <div className="flex flex-col">
            {roleNames.map((role) => (
              <div className="mt-3 flex items-center gap-3" key={role.key}>
                <Switch
                  id={`switch-${role.key}`}
                  checked={roles[role.key] > 0}
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
              <Button variant="text" color="red" onClick={handleclose} class="mr-1">
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
