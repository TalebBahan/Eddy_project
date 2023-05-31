import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

// import './a.css'
import SubscribePopup from "./SubscribePopup";
const NewsLetter = () => {
  const showSubscribe = (e) => {
    e.preventDefault()
    let element = document.getElementById("subscribe-form");
    if (element) {
      element.style.display = "flex";
    }
  };
  const [email, setEmail] = useState(null)
  return <>
    <motion.div
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
            <div className="newslettercontainer-inner">
              <form className="frame-form" onSubmit={showSubscribe}>
                <div className="enter-your-email-wrapper">
                  <AiOutlineMail
                    color="gray"
                    size="2.5rem"
                    marginRight="1rem"
                  />
                  <input
                    placeholder="Enter your Email"
                    className="enter-your-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                </div>
                <button className="subscribe-wrapper">
                  <b className="subscribe">
                    <span className="subscribe-txt" >
                      S<span className="ubscribe">ubscribe</span>
                    </span>
                  </b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
    <SubscribePopup email={email} />
  </>
}




export default NewsLetter;

