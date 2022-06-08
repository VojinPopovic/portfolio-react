import "./Form.css";
import RedBlobFour from "./RedBlobFour.svg";
import BlackBlobTwo from "./BlackBlobTwo.svg";

function Form() {
  return (
    <section className="contact-form-main">
      <div className="contact-form-container">
        <div className="contact-subtitle-container">
          <h2 className="contact-subtitle">
            <span>Say</span> Hello!
          </h2>
          <img src={BlackBlobTwo} alt="BlackBlobTwo" className="black-blob-two" />
        </div>
        <div className="form-container">
          <form
            action="https://formsubmit.co/vojinpopovic3@gmail.com"
            method="POST"
          >
            <div className="contact-form">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
          <img src={RedBlobFour} alt="RedBlobFour" className="redblobfour" />
        </div>
      </div>
    </section>
  );
}

export default Form;
