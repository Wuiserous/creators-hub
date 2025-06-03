import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useMeasure } from "@react-hookz/web"; // auto height support

const faqs = [
  {
    question: "What services does Creators Hub offer?",
    answer: "We specialize in full-suite social media management including content creation, post scheduling, community engagement, analytics reporting, and paid ad campaign management."
  },
  {
    question: "Which platforms do you manage?",
    answer: "We handle major social media platforms including Instagram, Facebook, Twitter (X), LinkedIn, and YouTube. We also work with emerging platforms as per client needs."
  },
  {
    question: "Can you help grow our followers and engagement organically?",
    answer: "Absolutely! We use proven strategies like content optimization, trend analysis, and targeted engagement to build a loyal and active audience over time—without relying solely on ads."
  },
  {
    question: "How do you create content for our brand?",
    answer: "Our creative team collaborates closely with you to understand your brand voice and goals. We handle everything from designing graphics to writing captions, ensuring the content aligns perfectly with your identity."
  },
  {
    question: "What’s the process to get started with Creators Hub?",
    answer: "Simply click the “Get in Touch” button or reach out via our contact form. We’ll schedule a discovery call to understand your needs and craft a custom plan tailored to your brand."
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  const [ref, { height }] = useMeasure();

  return (
    <div className={`bg-white p-2 ${isOpen? 'rounded-2xl': 'rounded-2xl'} hover:scale-[1.05] shadow-md overflow-hidden mb-2 transition-all lg:w-[600px] duration-300`}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        onClick={onClick}
      >
        <span className="text-base font-medium text-gray-800">{faq.question}</span>
        <span className="text-white bg-black/50 p-3 rounded-full">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>

      <motion.div
        animate={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
        style={{ overflow: "hidden" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div ref={ref} className="px-4 pb-4 text-sm text-gray-600">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-fit px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
      <p className="text-black/50 mb-10 text-sm">Everything you need to know before getting started</p>

      <div className="mb-5 text-left">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      <span className="text-lg text-black font-medium">Can't find your answer?</span>
      <button className="border-none mt-4 px-10 py-4 mx-auto rounded-full text-xl text-white/90 bg-black/90 flex shadow-black/50 shadow-lg items-center justify-center">
        Get in touch
      </button>
    </div>
  );
};


export default FAQSection;
