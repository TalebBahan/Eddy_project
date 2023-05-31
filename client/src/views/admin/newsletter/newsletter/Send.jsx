import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useSendIAMutation } from "../subscriber/subscriberApi";
export default function Send(props) {
    const [send] = useSendIAMutation();
    const interests = [
      "Leadership development",
      "Organizational transformation",
      "Corporate governance",
      "Business strategy",
      "Sales and operations management",
      "Board of director leadership",
      "Professional development",
      "Entrepreneurship",
      "Executive coaching",
      "Business analytics"
    ];
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [age, setAge] = useState('');
  
    const handleInterestChange = (event) => {
      const { value } = event.target;
      setSelectedInterests((prevInterests) => {
        if (prevInterests.includes(value)) {
          return prevInterests.filter((interest) => interest !== value);
        } else {
          return [...prevInterests, value];
        }
      });
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      send({ interests: selectedInterests, age ,id:props.id});
      setSelectedInterests([]);
      setAge('');
      props.handleOpen();
    };
  
    return (
      <Dialog open={props.open} onClose={props.handleOpen} size="xxl">
        <DialogHeader>
          Send to subscribers with:
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="grid grid-cols-2 gap-4">
              {/* Interests */}
              <div>
                <label className="block font-medium">Interests In</label>
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={interest}
                      checked={selectedInterests.includes(interest)}
                      onChange={handleInterestChange}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
              {/* Age */}
              <div>
                <label className="block font-medium">Age Over</label>
                <input
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  className="border border-gray-300 rounded px-2 py-1"
                />
              </div>
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
