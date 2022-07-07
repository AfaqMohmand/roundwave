import React, { useState } from "react";
import { Headings } from "../RoadMap/RoadMapHeader";
import faqsImg from "../../assets/svg.svg";
import "./faqs.css";
import FAQ from "./FAQ";
const Faqs = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "What is Round Wave NFT ?",
      answer:
        "There are total of 5000 NFTs available to mint. Owning a Round Wave NFT will give you the power to change someone’s life and help others in their projects’ growth.",
      open: true
    },
    {
      question: "Where will I be able to mint and trade my Round Wave NFTs?",
      answer:
        "Our project will be living on the solana blockchain and mainly on MagicEden",
      open: false
    },
    {
      question: "How many NFTs are available?",
      answer:
        "All our collection of 5000 unique Roundies and 151 legendary NFTs are available for purchase.",
      open: false
    },
    {
      question: "When does minting begin?",
      answer:
        "We don’t have a release date yet, but we’re aiming to drop the collection by June 2022. Follow our Twitter page or join our Discord server to get the latest updates and be the first one to know."
    }
  ]);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <>
      <section className="faqs-section">
        <section className="grid">
          <div className="faqs-heading">
            <h1>
              FAQS
              <span>
                <sup>
                  <img src={faqsImg} alt="" />
                </sup>
              </span>
            </h1>
          </div>
          <div className="questions-container">
            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Faqs;
