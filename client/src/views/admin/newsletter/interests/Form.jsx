import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {
    useCreateInterestsMutation,
    useUpdateInterestsMutation
} from "./api";
import Success from "components/Success";
import Error from "components/Error";

export default function Form(props) {
    const [add] = useCreateInterestsMutation();
    const [edit] = useUpdateInterestsMutation();
    const [formData, setFormData] = useState({
        interest: props?.interest,
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setFormData({
            interest: props?.interest?.interest,
            id: props?.interest?._id,
        });
    }, [props]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (props.isEdit) {
                await edit(formData);
                setSuccessMessage("Interest successfully edited.");
            } else {
                await add(formData);
                setSuccessMessage("Interest successfully added.");
            }
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
                    {props.isEdit ? "Edit Interest" : "Add Interest"}
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogBody>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="interest"
                            >
                                Interest
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="interest"
                                type="text"
                                placeholder="Interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={props.handleClose}
                            class="mr-1"
                        >
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
