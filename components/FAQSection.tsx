"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How long does it take to learn an instrument?",
      answer: "Learning an instrument is a personal journey that varies based on factors like practice consistency, prior musical experience, and your goals. Most students can play simple songs within 2-3 months, while developing intermediate skills typically takes 1-2 years of regular practice. Our instructors create personalized learning plans to help you progress at your optimal pace."
    },
    {
      question: "Do I need to own an instrument to start lessons?",
      answer: "While having your own instrument is recommended for regular practice, we provide instruments during in-person lessons for beginners. For online lessons, we can guide you on renting or purchasing affordable instruments suited to beginners. We also offer guidance on what features to look for when buying your first instrument."
    },
    {
      question: "How often should I take lessons?",
      answer: "For optimal progress, we recommend weekly lessons, especially for beginners. This consistent schedule helps build momentum in your learning while allowing enough time to practice between sessions. More advanced students might benefit from bi-weekly lessons with longer practice periods. Your instructor will help determine the best frequency based on your goals and availability."
    },
    {
      question: "What age groups do you teach?",
      answer: "We welcome students of all ages! For children, we typically recommend starting around age 6-7 for most instruments, though this can vary based on the instrument and the child's development. We have specialized teaching approaches for young children, teens, adults, and seniors, ensuring everyone receives age-appropriate instruction that matches their learning style."
    },
    {
      question: "Do you offer online lessons?",
      answer: "Yes, we offer high-quality online lessons using professional video conferencing tools. Our online program includes the same personalized instruction as our in-person lessons, along with supplemental learning materials and recordings. Many students find online lessons convenient and just as effective as in-person instruction."
    },
    {
      question: "How do the typing classes work?",
      answer: "Our typing classes combine live instruction with progressive practice exercises. Students learn proper hand positioning, ergonomics, and techniques to increase both speed and accuracy. Classes include benchmarking to track progress, personalized feedback, and specialized exercises targeting your specific improvement areas. Most students see significant improvement within 4-8 weeks of consistent practice."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <p className="text-gray-600">Find answers to common questions about our music lessons and typing classes.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-5 text-left font-medium rounded-lg transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0" />
                )}
              </button>
              
              <div
                className={`bg-white rounded-b-lg px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;