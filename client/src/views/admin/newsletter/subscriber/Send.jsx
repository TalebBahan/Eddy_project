import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useSendMutation } from "./subscriberApi";
import { useGetnewslettersQuery } from "../newsletter/newsletterApi";

export default function Send(props) {
    const { data } = useGetnewslettersQuery();
    const [send] = useSendMutation();
    const [selectedNewsletters, setSelectedNewsletters] = useState([]);

    const handleChange = (e) => {
        const newsletterId = e.target.value;
        if (e.target.checked) {
            setSelectedNewsletters((prevSelected) => [...prevSelected, newsletterId]);
        } else {
            setSelectedNewsletters((prevSelected) => prevSelected.filter((id) => id !== newsletterId));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send({ newsletterId: selectedNewsletters, emailList: [...props.emails] })

        props.handleOpen();
        window.alert('emails send successfuly')
    };

    return (
        <Dialog open={props.open} onClose={props.handleOpen} size="xxl">
            <DialogHeader>
                {props.isEdit ? "Edit Subscriber" : "Add Subscriber"}
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <DialogBody>
                    <div className="grid grid-cols-2 gap-4">
                        {data?.map((newsletter) => (
                            <div key={newsletter._id}>
                                <label htmlFor={newsletter._id}>
                                    <input
                                        id={newsletter._id}
                                        name="newsletter"
                                        type="radio"
                                        value={newsletter._id}
                                        onChange={handleChange}
                                        checked={selectedNewsletters.includes(newsletter._id)}
                                    />
                                    {newsletter.title}
                                </label>
                            </div>
                        ))}
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
                    <Button variant="text" color="green" type="submit">
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </form>
        </Dialog>
    );
}
