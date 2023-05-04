import React, { useState, useEffect } from "react";
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

export default function AddEditModal(props) {
    const [add] = useCreateSubscriberMutation()
    const [edit] = useUpdateSubscriberMutation()
    const [formData, setFormData] = useState({
        email: props?.email,
        firstName: props?.firstName,
        lastName: props?.lastName,
        age: props?.age,
        interests: props?.interests || [],
        location: props?.location,
        
    });
    const interests = ['swimming','hiking','photography']

    useEffect(() => {

            setFormData({
                email: props?.email,
                firstName: props?.firstName,
                lastName: props?.lastName,
                age: props?.age,
                interests: props?.interests || [],
                location: props?.location,
                id: props?._id,
            });

    }, [props]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
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
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="age">
                            Age
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="age"
                            type="number"
                            placeholder="Age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
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

                        <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />


                    </div>
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
                </DialogBody>
            </form>
        </Dialog>
    )
}
