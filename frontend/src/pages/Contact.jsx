import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Have questions? We're here to help! Reach out to our friendly support
          team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Send us a message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="order">Order Inquiry</option>
                <option value="shipping">Shipping Question</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="product">Product Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We typically reply within 24 hours
                  </p>
                  <a
                    href="mailto:support@ecoliving.com"
                    className="mt-2 inline-flex items-center text-green-600 hover:underline"
                  >
                    support@ecoliving.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Mon-Fri, 9am-5pm EST
                  </p>
                  <a
                    href="tel:+18005551234"
                    className="mt-2 inline-flex items-center text-green-600 hover:underline"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">
                    Location
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Our virtual office is always open
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    123 Green Way
                    <br />
                    Eco City, EC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  What's your return policy?
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We offer a 30-day return policy for most items. Some
                  exclusions apply.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  How long does shipping take?
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Most orders ship within 1-2 business days and arrive in 3-5
                  business days.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Do you ship internationally?
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Yes! We ship to over 50 countries worldwide.
                </p>
              </div>
            </div>
            <a
              href="/faq"
              className="mt-4 inline-flex items-center text-green-600 hover:underline"
            >
              View all FAQs{" "}
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
