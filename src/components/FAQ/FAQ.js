import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQstyle/FAQ.css";
import Nav from "../../Nav";

const FAQ = ({ Toggle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is this application about?",
      answer:
        "This application helps users manage their investments efficiently and provides insights through AI.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Sign Up' button on the homepage.",
    },
    {
      question: "Can I track my investments?",
      answer: "Yes, you can track your investments in the 'My Wallet' section.",
    },
    {
      question: "What types of investments can I manage?",
      answer:
        "You can manage stocks, bonds, and cryptocurrencies within the app.",
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team via the 'Contact Us' page.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <Nav Toggle={Toggle} />
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`heading${index}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${
                    openIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h5>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${openIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
