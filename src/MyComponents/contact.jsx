import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="contactMain">
      <div className="contactHeader">
        <h1>
          <span className="contactHead">CONTACT</span>{" "}
        </h1>
      </div>
      <h3 className="contactDesc">
        I'm Looking forward to new Opportunities, My inbox is always open.
        Whether you have a question or just want to say hi, Feel free to sneak
        into my mailbox.
      </h3>

      <form className="contactForm" onSubmit={handleSubmit}>
        <section className="formEle">
          <span>
            <label htmlFor="name"></label>
            <input
              className="formInput"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </span>
          <span>
            <label htmlFor="mail"></label>
            <input
              className="formInput"
              type="email"
              id="mail"
              placeholder="Email Address"
              name="email"
              required
            />
          </span>
          <span>
            <label htmlFor="subject"></label>
            <input
              className="formInput"
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              required
            />
          </span>
        </section>
        <section className="formEle">
          <span>
            <label htmlFor="description"></label>
            <textarea
              className="formInput"
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Enter your message here"
              required
            ></textarea>
          </span>
        </section>
        <section className="formEle">
          <button className="formBtn">Submit</button>
        </section>
      </form>
    </div>
  );
}

export default Contact;
