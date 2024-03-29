import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSendIAMutation } from "../subscriber/subscriberApi";
import { useGetInterestssQuery } from "../interests/api";
import Success from "components/Success";
import Error from "components/Error";
function getAllInterests(obj) {
  const allInterests = [];

  // Iterate over each property of the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Extract the array of interests from the current property
      const interestsArray = obj[key].flatMap(item => item.interests);

      // Merge the interests from the current property into the allInterests array
      allInterests.push(...interestsArray);
    }
  }

  return allInterests;
}



export default function Send({ newsletter, ...props }) {
  const [send] = useSendIAMutation();
  const { data: interestsData, isLoading, isError } = useGetInterestssQuery();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [age, setAge] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectAllInterests, setSelectAllInterests] = useState(false);



  useEffect(() => {

    setSelectedInterests(getAllInterests({
      articlesWithImages: newsletter.articlesWithImages,
      articlesWithoutImages: newsletter.articlesWithoutImages,
      books: newsletter.books,
      medias: newsletter.medias,
    }));
  }, [newsletter]);
  if (isLoading) return <div></div>



  const interests = interestsData?.map((interest) => interest?.interest);

  const handleInterestChange = (event) => {
    const { value } = event.target;
  
    // Toggle individual interest selection
    setSelectedInterests((prevInterests) => {
      if (prevInterests.includes(value)) {
        return prevInterests.filter((interest) => interest !== value);
      } else {
        return [...prevInterests, value];
      }
    });
  
    // Check if all interests are now selected or not
    setSelectAllInterests(selectedInterests.length === interests.length - 1);
  };

  const handleSelectAllInterests = () => {
    if (selectAllInterests) {
      setSelectedInterests([]);
    } else {
      setSelectedInterests([...interests]);
    }
    setSelectAllInterests(!selectAllInterests);
  };
  
  

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await send({ interests: selectedInterests, age, newsletter });
      setSuccessMessage("Newsletter sent successfully.");
    } catch (error) {
      setErrorMessage("Error sending the newsletter.");
    }
    setSelectedInterests([]);
    setAge("");
    props.handleOpen();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleOpen} size="xxl">
        <DialogHeader>Send to subscribers with:</DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="grid grid-cols-2 gap-4">
              {/* Interests */}
              <div>
                <label className="block font-medium">Interests In</label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectAllInterests}
                    onChange={handleSelectAllInterests}
                  />
                  <span>Select All</span>
                </label>
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
      {successMessage && <Success message={successMessage} />}
      {errorMessage && <Error message={errorMessage} />}
    </div>
  );
}
