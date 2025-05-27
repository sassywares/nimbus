"use client";

import { config } from "@/config";
import Link from "next/link";
import React from "react";

export default function Contact() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!message) {
      alert("Please enter your message");
      return;
    }

    alert(
      "Thank you for reaching out, a member of our team will get back to you soon."
    );

    try {
      await fetch(
        `https://api.sassywares.com/contact?referrerId=${config.id}&formTypeId=${config.formTypeIds.contactForm}`,
        {
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-sm-60">
          <div className="section-descr black">
            <p>
              We bring German precision to every digital project. Contact us
              today to discuss how we can elevate your online presence.
            </p>
          </div>
        </div>
        <div className="col-md-7 offset-md-1">
          {/* Contact Form */}
          <form
            id="contact_form"
            onSubmit={onFormSubmit}
            className="form contact-form"
          >
            <div className="row mb-30">
              <div className="col-lg-6 mb-md-30">
                {/* Name */}
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-lg input-circle form-control"
                  placeholder="Name"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
                {/* End Name */}
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg input-circle form-control"
                  placeholder="Email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                {/* End Email */}
              </div>
            </div>
            {/* Message */}
            <div className="mb-50">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input-lg input-circle form-control"
                style={{ height: 130 }}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            {/* End Message */}
            <div className="row">
              <div className="col-xs-4 col-lg-6 mb-md-30">
                {/* Send Button */}
                <button
                  className="submit_btn btn btn-mod btn-white btn-circle btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Send Message</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Send Message
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-xs-8 col-lg-6 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip">
                  <i className="icon-info size-16" /> All the fields are
                  required. By sending the form you agree to the{" "}
                  <Link href="/terms-and-conditions">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and <Link href="/privacy-policy">Privacy Policy</Link>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>{" "}
    </>
  );
}
