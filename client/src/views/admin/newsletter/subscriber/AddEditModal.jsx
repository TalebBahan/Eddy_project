import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {
    useCreateSubscriberMutation,
    useUpdateSubscriberMutation,
} from "./subscriberApi";
import { useGetInterestssQuery } from "../interests/api";
import Loading from "components/Loading";

export default function AddEditModal(props) {
    const [add] = useCreateSubscriberMutation();
    const [edit] = useUpdateSubscriberMutation();
    const { data: interestsData, isLoading, isError } = useGetInterestssQuery();
    const [formData, setFormData] = useState({
        email: props?.email || "",
        firstName: props?.firstName || "",
        lastName: props?.lastName || "",
        age: props?.age || "",
        interests: props?.interests || [],
        location: props?.location || "",
    });

    if (isLoading || isError) {
        return <Loading />;
    }

    const interests = interestsData?.map((interest) => interest?.interest);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.isEdit) {
            edit(formData);
        } else {
            add(formData);
        }
        setFormData({
            email: "",
            firstName: "",
            lastName: "",
            age: "",
            interests: [],
            location: "",
        });
        props.handleOpen();
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose} size="xxl">
            <DialogHeader>
                {props.isEdit ? "Edit Subscriber" : "Add Subscriber"}
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <DialogBody>
                    <div className="mb-4">
                        {[
                            { label: "Email", name: "email", type: "email" },
                            { label: "First Name", name: "firstName", type: "text" },
                            { label: "Last Name", name: "lastName", type: "text" },
                            { label: "Age", name: "age", type: "number" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor={field.name}
                                >
                                    {field.label}
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={field.name}
                                    type={field.type}
                                    placeholder={field.label}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                        <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="interests">
                            Interests
                        </label>
                        <div className="flex items-center">
                            {interests.map((interest) => (
                                <label className="mr-2 text-gray-700" htmlFor={interest} key={interest}>
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
                </DialogBody>
            </form>
        </Dialog>
    );
}
