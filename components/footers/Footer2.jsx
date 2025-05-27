"use client";
import { socialLinks } from "@/data/footer";
import { services4 } from "@/data/services";
import Link from "next/link";
import React from "react";

export default function Footer2() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            © Nimbus Studio {new Date().getFullYear()}.
          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">
            {services4.slice(0, 3).map((elm, i) => (
              <div key={i} className="fw-social-inline-item">
                <a
                  href="/#services"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{elm.title}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {elm.title}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
          {/* End Social Links */}
          <div
            className="col-lg-3 text-center text-lg-end local-scroll"
            onClick={scrollToTop}
          >
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="footer-text text-center mt-n10 pb-50">
        Made with ❤️ in Hamburg, Germany.
        <div className="small">
          Read <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
          and <Link href="/privacy-policy">Privacy Policy</Link>.
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
