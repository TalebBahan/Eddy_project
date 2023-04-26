import { Fragment, useState,useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useAddLinkMutation, useEditLinkMutation } from "./apiLink";

export default function AddEditModal(props) {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    const [add] = useAddLinkMutation()
    const [editLink] = useEditLinkMutation()

    const [formData, setFormData] = useState('');
    useEffect(
        ()=>setFormData(
            {
                text: props?.text,
                link: props?.link,
                platform: props?.platform,
                is_active: props?.is_active,
                id: props?._id,
            }
        ),[props]
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.isAdd) add(formData)
        else editLink(formData)
        setFormData({
            text: '',
            link: '',
            platform: '',
            is_active: false,
        });
        props.handleOpen();
    };
    return (
        <Fragment>

            <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
                {/* <form> */}

                <DialogHeader>{props.isAdd ? 'Add New Link ' : 'Edit Link'}</DialogHeader>
                <DialogBody divider>
                    <div class="flex flex-col">
                        <label
                            for="email"
                            class="self-start mb-2 font-medium text-gray-800"
                        >Link Text</label>
                        <input
                            type="text"
                            placeholder="Title"
                            id="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 rounded"
                            autocomplete="off"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label
                            for="pass"
                            class="self-start mb-2 font-medium text-gray-800"
                        >Link @</label>
                        <input
                            type="text"
                            placeholder="Link"
                            id="link"
                            name="link"
                            value={formData.link}
                            onChange={handleChange}
                            class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
                            autocomplete="off"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label
                            for="pass"
                            class="self-start mb-2 font-medium text-gray-800"
                        >Platform</label>
                        <input
                            type="text"
                            placeholder="Sub text"
                            id="platform"
                            name="platform"
                            value={formData.platform}
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
                {/* </form> */}
            </Dialog>

        </Fragment >
    );
}