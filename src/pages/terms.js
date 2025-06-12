import React from "react";
import Footer from "../components/Footer";

const Terms = () => (
  <div className="container py-5">
    <div className="section-title position-relative mb-4 pb-2 topPaddingMeduim">
      <h6 className="position-relative text-primary ps-4">Terms And Condition12</h6>
      <h2 className="mt-2">Terms And Condition1</h2>
      <h4>Last Updated: 05-06-2025</h4>
    </div>
    <div>
      <ol>
        <li>
          <strong>Acceptance of Terms</strong><br />
          By purchasing and using our digital NFC card and AI-generated review service, you agree to comply with these terms and conditions. If you do not agree with these terms, please do not use our products or services.
        </li>
        <li>
          <strong>Description of Products and Services</strong>
          <ol type="a">
            <li>
              <strong>Digital NFC Cards:</strong><br />
              We offer digital NFC cards for sale at the price mentioned in the Manufacturer's Recommended Price (MRP). Each card is to be used for the intended purpose of accessing review services.
            </li>
            <li>
              <strong>AI-Generated Reviews:</strong><br />
              When you scan the NFC card using a compatible device, you will receive an AI-generated review free of charge, as of the date of this agreement. Please note that we reserve the right to charge for this service in the future, and any such changes will be communicated to users in advance.
            </li>
          </ol>
        </li>
        <li>
          <strong>Payment and Pricing</strong>
          <ol type="a">
            <li>
              The pricing for our digital NFC cards is as specified in the MRP. Payment is required before we provide you with the NFC card.
            </li>
          </ol>
        </li>
        <li>
          <strong>User Responsibilities</strong>
          <ol type="a">
            <li>
              You are responsible for using the digital NFC card in accordance with the intended purpose and any applicable laws and regulations.
            </li>
            <li>
              You are responsible for any device and connectivity requirements necessary to access the AI-generated reviews.
            </li>
          </ol>
        </li>
        <li>
          <strong>Privacy and Data</strong>
          <ol type="a">
            <li>
              We may collect and use data related to your use of the NFC card and AI-generated review service. Please refer to our Privacy Policy for more information on how we handle your data.
            </li>
          </ol>
        </li>
        <li>
          <strong>Changes to Terms and Services</strong>
          <ol type="a">
            <li>
              We reserve the right to modify these terms and conditions at any time. Any changes will be effective upon posting the updated terms on our website or notifying you via email or other means.
            </li>
            <li>
              We also reserve the right to modify or discontinue the AI-generated review service, with or without notice.
            </li>
          </ol>
        </li>
        <li>
          <strong>Disclaimer of Warranties</strong>
          <ol type="a">
            <li>
              We provide our products and services on an "as-is" and "as available" basis. We do not make any warranties or representations regarding the accuracy, completeness, or reliability of the AI-generated reviews.
            </li>
          </ol>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <ol type="a">
            <li>
              To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of our products or services.
            </li>
          </ol>
        </li>
        <li>
          <strong>Governing Law</strong>
          <ol type="a">
            <li>
              These terms and conditions shall be governed by and construed in accordance with the laws of India.
            </li>
          </ol>
        </li>
        <li>
          <strong>Contact Information</strong>
          <ol type="a">
            <li>
              If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:contactus@codentechnologies.com">contactus@codentechnologies.com</a>.
            </li>
          </ol>
        </li>
      </ol>
    </div>
    <Footer />
  </div>
);

export default Terms;