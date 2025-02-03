import { Mail, MapPin, Phone } from "lucide-react";
import "./Contact.scss";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <main className="contact-container">
        <div className="contact-grid">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div>
              <h1 className="contact-heading">Get in Touch</h1>
              <p className="contact-subheading">
                Have questions about our properties? Fill out the form and we'll get back to you shortly.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h2 className="contact-info-heading">Contact Information</h2>

              <div className="contact-info-content">
                <div className="contact-info-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h3 className="contact-info-title">Office Address</h3>
                    <p className="contact-info-text">
                      123 Real Estate Avenue
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h3 className="contact-info-title">Phone</h3>
                    <p className="contact-info-text">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri from 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h3 className="contact-info-title">Email</h3>
                    <p className="contact-info-text">
                      contact@lamaestate.com
                      <br />
                      support@lamaestate.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3 className="office-hours-heading">Office Hours</h3>
                <div className="office-hours-content">
                  <div className="office-hours-item">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="office-hours-item">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="office-hours-item">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}