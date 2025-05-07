import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useMeasure } from "@react-hookz/web"; // auto height support

const faqs = [
  {
    question: "What do you need from me to get started?",
    answer: "I’ll need your brief, brand assets, goals, and any reference material."
  },
  {
    question: "What if I need more revisions?",
    answer: "You can request more revisions depending on the plan. Additional ones may cost extra."
  },
  {
    question: "How long will it take to complete my video project?",
    answer: "Depending on the complexity, usually between 3–7 days."
  },
  {
    question: "Do you provide subtitles or captions for videos?",
    answer: "Yes! Captions can be included upon request."
  },
  {
    question: "Do you offer a bulk discount for multiple thumbnails?",
    answer: "Absolutely. Let's discuss your quantity and I’ll offer a package deal."
  },
  {
    question: "What if I don't like the thumbnail?",
    answer: "You'll get revisions until you're satisfied as per the agreed number of changes."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  const [ref, { height }] = useMeasure();

  return (
    <div className="bg-white p-2 rounded-full shadow-md overflow-hidden mb-2 transition-all duration-300">
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
      <span className="text-lg text black font-medium">Can't find your answer?</span>
      <button className="border-none mt-4 px-10 py-4 mx-auto rounded-full text-xl text-white/90 bg-black/90 flex shadow-black/50 shadow-lg items-center justify-center">
            Get in touch
      </button>
    </div>
  );
};

export default FAQSection;
