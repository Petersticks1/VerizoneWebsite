import { useState } from "react";
import data from "./Qus-data.json";
import "./Questions.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <h3 className="faq-subtitle">
        Question? <span>Look here</span>
      </h3>
      <div className="faq-body">
        <div className="faq-list">
          {data.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-header" onClick={() => toggleAnswer(index)}>
                <div className="faq-question">{faq.question}</div>
                <div className="faq-icon">
                  {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              <div className="faq-answer">
                <h3 className="faq-answer-head">{faq["answer-head"]}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-contain">
          <img
            src="./Chat.png"
            alt="FAQ illustration"
            className="faq-contain-img"
          />
          <p className="faq-contain-heading">You have different questions?</p>
          <p className="faq-contain-p">
            Our team will answer all your questions. We ensure a quick response.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
