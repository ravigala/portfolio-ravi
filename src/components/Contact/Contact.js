import { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactbanner } from "../../Assets";
import Particle from "../Particle";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    } else {
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "border-b-2 border-primary text-primary ",
      });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxCj58GXv5EfVUZgKeFB9ZwCg-YP2eD55p7hN6znhDnXYzln9htqDkw7izwBYK7C8Tc/exec', {
        method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(formData),
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      });
  
      if (response.ok) {
        notify("Email sent successfully", false);
        setLoading(false);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        notify("Email not sent", true);
        setLoading(false);
      }
    } catch (error) {
      notify("Error sending email", true);
      setLoading(false);
    }
  };


  return (
    <Container fluid className="contact-section">
    <Particle />
    <Container>
      <Row>
      <h1 className="section-heading">
          <strong>Contact</strong>
        </h1>
        <Col md={6}>
          <img
            src={contactbanner}
            alt="casestudiesbanner"
            className="img-fluid rounded-3"
          />
        </Col>
  
        <Col md={6}>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="contact-form mt-4 p-4 shadow rounded"
          >
            <h1 className="h3 mb-4 text-white">Get In Touch</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                name="name"
                required
                className="form-control"
                placeholder="What's your good name?"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                name="email"
                required
                className="form-control"
                placeholder="What's your email address?"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                rows={4}
                required
                className="form-control"
                placeholder="What do you want to say?"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {!loading ? "Send Message" : "Sending...."}
            </button>

            <ToastContainer />
          </form>
        </Col>
      </Row>
    </Container>
  </Container>
  
  );
};

export default Contact;
