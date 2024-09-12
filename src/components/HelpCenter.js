import React, { useState } from 'react';
import styles from './HelpCenter.module.css';

const HelpCenter = () => {
  // Using state to track active FAQ items
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.helpCenter}>
      {/* Header */}
      <div className={styles.header}>
        <h1>AASIA Help Center</h1>
      </div>

      {/* FAQ Section */}
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqSection}>
          {/* Individual FAQ Item */}
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>

              {activeIndex === index && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2>Still need help?</h2>
          <p>
            If you couldn't find the answer you're looking for, feel free to
            contact our support team.
          </p>
          <a href="/contact" className={styles.contactButton}>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

// FAQ data to display on the page
const faqData = [
  {
    question: 'What is AASIA?',
    answer:
      "AASIA stands for Automated AI-based Student Inquiry Assistant. It's an innovative platform designed to help students with their academic inquiries using advanced AI technology.",
  },
  {
    question: 'How do I create an account?',
    answer:
      'To create an account, click on the "Register" link on the login page. Fill in your details, including your email and a strong password, then follow the verification process sent to your email.',
  },
  {
    question: 'I forgot my password. What should I do?',
    answer:
      'If you have forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and we will send you instructions to reset your password.',
  },
  {
    question: 'How do I use AASIA for my studies?',
    answer:
      'Once logged in, you can ask AASIA any academic questions you have. The AI will provide detailed explanations, suggest resources, and help guide your learning process across various subjects.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.',
  },
];

export default HelpCenter;
