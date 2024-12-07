import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import SpiritTreeModal from '../components/SpiritTreeModal';

const faqItems = [
  {
    title: "What payment methods do you accept?",
    content: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
  },
  {
    title: "What is your return policy?",
    content: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return."
  },
  {
    title: "Do you ship internationally?",
    content: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location."
  },
  {
    title: "How can I track my order?",
    content: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website."
  },
  {
    title: "Do you offer warranty on products?",
    content: "Yes, all our electronic products come with a standard one-year manufacturer warranty. Extended warranty options are available for select items."
  }
];

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to The Tree Site</h1>
      <section className="card">
        <h2>About Us</h2>
        <p>Welcome to our modern web application. We provide a seamless experience across all devices.</p>
        <button 
          className="button"
          onClick={() => setIsModalOpen(true)}
          style={{ marginTop: '1rem' }}
        >
          Tell me my spirit tree
        </button>
      </section>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion items={faqItems} />
      </section>

      <SpiritTreeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Home;