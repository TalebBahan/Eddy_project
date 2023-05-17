import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import './a.css'

const Head = () => {

  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.9 }}
    id="news-letter"
  >
    <section className="newsletter">
      <div className="newletterleft">
        {/* <img
        className="zka-6935-1-icon"
        alt=""
        src="Images/newsletter@2x.jpg"
      /> */}
      </div>
      <div className="newsletterright">
        <div className="newslettercontainer">
          <div className="frame-parent1">
            <div className="subscribe-to-parent">
              <div className="subscribe-to">Subscribe to</div>
              <div className="subscribe-to">Eddy’s Newsletter</div>
            </div>
            <div className="get-weekly-update">
              Join the community today and never miss out on exclusive
              content and updates! This newsletter is the perfect way to
              stay up-to-date with the latest news, posts, books, and
              articles related to personal and organizational
              transformation.
              <br />
              <br />
              Whether you're a customer or not, this newsletter is a
              valuable resource for anyone interested in creating a brighter
              future together. Don't miss out – subscribe now!
            </div>
          </div>
          {/* <div className="newslettercontainer-inner"> */}

        </div>
      </div>
      {/* </div> */}
    </section>
  </motion.div>
}
const NewsLetter = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const subscriberData = {
      email,
      firstName: name,
      interests: selectedInterests,
      location: '', // You didn't specify how to capture the location, so I left it empty
    };

    // Make the API request to submit the form data
    fetch(`${process.env.REACT_APP_API}/api/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful form submission
          setIsSubmitted(true);
          console.log('Form submitted successfully');
        } else {
          // Handle form submission error
          console.log('Error submitting form');
        }
      })
      .catch((error) => {
        // Handle any network or API errors
        console.error('An error occurred while submitting the form:', error);
      });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setSelectedInterests((prevInterests) => prevInterests.filter((interest) => interest !== value));
    }
  };


  if (isSubmitted) {
    return (
      <div>
        <Head />
      </div>
    );
  }
  return (
    <>
      <Head />
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="mail" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label>Age:</label>
              <input type="radio" id="under_13" value="under_13" name="user_age" checked={age === 'under_13'} onChange={() => setAge('under_13')} />
              <label htmlFor="under_13" className="light">Under 13</label><br />
              <input type="radio" id="over_13" value="over_13" name="user_age" checked={age === 'over_13'} onChange={() => setAge('over_13')} />
              <label htmlFor="over_13" className="light">Over 13</label>

              <label>Interests:</label>
              {interests.map((interest) => (
                <div key={interest}>
                  <input
                    type="checkbox"
                    id={interest}
                    value={interest}
                    name="user_interest"
                    onChange={handleInterestChange}
                    checked={selectedInterests.includes(interest)}
                  />
                  <label htmlFor={interest} className="light">
                    {interest}
                  </label>
                </div>
              ))}
            </fieldset>

            <button type="submit" className="subscribe-wrapper">
              <b className="subscribe">
                <span className="subscribe-txt">
                  S<span className="ubscribe">ubscribe</span>
                </span>
              </b>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;

