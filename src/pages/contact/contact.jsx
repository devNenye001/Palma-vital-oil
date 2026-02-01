import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";

import{ useState } from "react";
const Contact = () => {
  const form = useRef();
  const [emailResult, setEmailResult] = useState(null);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Contact" }];

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your actual IDs from EmailJS
    emailjs
      .sendForm(
        "service_luwt5cc",
        "template_qjjia9i",
        form.current,
        "OCv0Qc_rdGbtFrIAn",
      )
      .then(
        () => {
          setEmailResult("success");
          e.target.reset();
        },
        (error) => {
          // This will tell you the EXACT error from EmailJS
          console.log("EmailJS Error:", error.text);
          setEmailResult("error");
        },
      );
  };

  return (  
    <>
      <Nav />
      <Breadcrumb items={breadcrumbItems} />

      <main className="pvc-contact-wrapper">
        <header className="pvc-contact-header">
          <h1 className="pvc-header-title">
            We’re Here to <span className="pvc-text-red">Help</span>
          </h1>
          <p className="pvc-header-subtitle">
            Whether you want to order, partner with us, or ask questions — reach
            out anytime.
          </p>
        </header>

        <div className="pvc-contact-container">
          <div className="pvc-form-column">
            {/* Added ref and onSubmit handler */}
            <form ref={form} onSubmit={sendEmail} className="pvc-message-card">
              <h2 className="pvc-card-title">Send us a message.</h2>

              {/* Change 'fullName' to 'name' to match your EmailJS dashboard */}
              <div className="pvc-input-group">
                <label htmlFor="fullName">
                  Full Name<span className="pvc-required">*</span>
                </label>
                <input type="text" name="name" id="fullName" required />
              </div>

              <div className="pvc-input-group">
                <label htmlFor="email">
                  Email Address<span className="pvc-required">*</span>
                </label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="pvc-input-group">
                <label htmlFor="message">
                  Message<span className="pvc-required">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="pvc-submit-button">
                Submit
              </button>

              <p className="pvc-form-footer">
                {emailResult === "success"
                  ? "Message sent successfully!"
                  : emailResult === "error"
                  ? "There was an error sending your message. Please try again."
                  : "Please fill in all required fields."}
              </p>
            </form>
          </div>

          <div className="pvc-info-column">
            <div className="pvc-image-wrapper">
              <img
                src="/contact.svg"
                alt="Nigerian woman with Palma Vital Oil"
                className="pvc-contact-brand-img"
              />
            </div>

            <div className="pvc-details-block">
              <h3 className="pvc-details-label">Contact</h3>
              <p className="pvc-detail-item">Phone Number: +234 813 456 7789</p>
              <p className="pvc-detail-item">
                Order on WhatsApp: +234 813 456 7789
              </p>
              <p className="pvc-detail-item">
                Email Address: info@palmavital.com.ng
              </p>
              <p className="pvc-detail-item">Location: Enugu, Nigeria</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
