import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Sd from "./CardArt";

export default function Articles(props) {
console.log('====================================');
console.log(props);
console.log('====================================');
  const handleSubmit = (e) => {
    e.preventDefault();
    // send({ newsletterId: selectedNewsletters, emailList: [...props.emails] })

    props.handleOpen();
    window.alert('emails send successfuly')
  };
  return (
    <Dialog open={props.open} onClose={props.handleOpen} size="xxl">
      <DialogHeader>
        Articles
      </DialogHeader>
      <DialogBody>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {props.news.articles?.map(item =>
            <Sd image={item.imageUrl} h_text={item.title} s_text={item.body} link={item.readMoreLink} newsletterId={props.news?._id} articleId={item._id} key={item._id} />
          )
          }
        </div>

      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={props.handleOpen}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog >
  );
}
