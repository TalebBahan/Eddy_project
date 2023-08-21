import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Icon1 from "../assets/achivement/1.svg";
import Icon2 from "../assets/achivement/2.svg";
import Icon3 from "../assets/achivement/3.svg";
import Icon4 from "../assets/achivement/4.svg";
import Icon5 from "../assets/achivement/5.svg";
import Icon6 from "../assets/achivement/6.svg";
import Icon7 from "../assets/achivement/7.svg";
const Achievements = ({ data }) => {
  const credentialsObj1 = [
    {
      img: Icon1,
      value: data[0].rest[0].count,
      text: "Recognitions",
      subText: "Personal Awards ",
    },
    {
      img: Icon2,
      value: data[1].rest[0].count,
      text: "Featured Media and Press",
      subText: "(Video, Audio, Magazines and PR)",
    },
    {
      img: Icon3,
      value: data[2].rest[0].count,
      text: "Advisory Board Membership",
      subText: null,
    },
    {
      img: Icon4,
      value: data[3].rest[0].count,
      text: "Global Reach",
      subText: "Companies",
    },
  ];
  const credentialsObj2 = [
    {
      img: Icon5,
      text: "Diverse Clientele",
      info: [
        {
          subText: "Industries",
          value: data[4].rest[0].count,
        },
        {
          subText: "Executives",
          value: data[4].rest[1].count,
        },
      ],
    },
    {
      img: Icon6,
      text: "Events and Workshops",
      info: [
        {
          subText: "Industries",
          value: data[5].rest[0].count,
        },
        {
          subText: "Executives",
          value: data[5].rest[1].count,
        },
      ],
    },
    {
      img: Icon7,
      text: "Mentoring",
      info: [
        {
          subText: "Mentoring",
          value: data[6].rest[0].count,
        },
      ],
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
      >
        <section className="credentials">
          <div className="credentialscontainer">
            <div className="credentailscontainer1">
              {credentialsObj1.map((item, index) => {
                return (
                  <>
                    <div className="credentailsbox1" key={index}>
                      <div className="group-parent">
                        <img className="frame-child" alt="" src={item.img} />
                        <b className="exclusive-articles">{item.text}</b>
                        <span className="light-white-text">{item.subText}</span>
                        <div className="parent">
                          <b className="b">
                            {" "}
                            <CountUp
                              enableScrollSpy
                              duration={2}
                              end={item.value}
                            />
                          </b>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="credentailscontainer1">
              {credentialsObj2.map((item, index) => {
                return (
                  <>
                    <div className="credentailsbox1" key={index}>
                      <div className="group-parent">
                        <img className="frame-child" alt="" src={item.img} />
                        <b className="exclusive-articles">{item.text}</b>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            textAlign: "center",
                          }}
                        >
                          {item.info.map(({ subText, value }) => (
                            <div>
                              <span className="light-white-text">
                                {subText}
                              </span>
                              <div className="parent">
                                <b className="b">
                                  {" "}
                                  <CountUp
                                    enableScrollSpy
                                    duration={2}
                                    end={value}
                                  />
                                </b>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Achievements;
