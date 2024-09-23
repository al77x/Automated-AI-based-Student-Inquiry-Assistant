import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      {/* Header */}
      <div className={styles.header}>
        <h1>AASIA Privacy Policy</h1>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <h2>Our Commitment to Your Privacy</h2>
        <p>
          At AASIA (Automated AI-based Student Inquiry Assistant), we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and safeguard your data.
        </p>

        <div className={styles.policySection}>
          <h3>Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, such as when you create an account, use our services, or contact our support team. This may include:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Academic details</li>
            <li>Usage data and interaction with our platform</li>
          </ul>
        </div>

        <div className={styles.policySection}>
          <h3>How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our AI-based student assistance services</li>
            <li>Personalize your experience on our platform</li>
            <li>Communicate with you about your account and our services</li>
            <li>Ensure the security and integrity of our platform</li>
          </ul>
        </div>

        <div className={styles.policySection}>
          <h3>Data Security</h3>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your data is encrypted and stored on secure servers, and we regularly review and update our security practices.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection practices. To exercise these rights, please contact our privacy team.
          </p>
        </div>

        <h2>Still have questions about your privacy?</h2>
        <p>
          If you couldn't find the answer you're looking for, feel free to contact our privacy team.
        </p>
        <button
          className={styles.contactButton}
          onClick={() => window.location.href = 'mailto:privacy@aasia-ai.example.com'}
        >
          Contact Privacy Team
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
