import React from "react";
import { Element } from "react-scroll";
import axios from "axios";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <Element name="contact" className="section">
        {/* contact Us Start */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <div className="text-center mb-5">
                <h2 className="text-uppercase mb-0">Get In Touch</h2>
                <div className="my-3">
                  <img
                    src="images/title-border.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <p className="text-muted f-19">
                  Jika ada pertanyaan seputar BSS PRO, silahkan melalui form
                  dibawah ini.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-address">
                <h4 className="title mb-4">Contact Info</h4>
                <p className="text-muted f-15">
                  <i className="mdi mdi-phone-classic"></i> +62 817-7415-1730
                </p>
                <p className="text-muted f-15 mb-4">
                  <i className="mdi mdi-email"></i> admin@bsspro.id
                </p>
              </div>
              {/* <div className="row">
                <div className="col-md-12">
                  <div className="contact-address">
                    <h5 className="title f-18">Address - A</h5>
                    <p className="text-muted f-15">
                      3165 Roosevelt Wilson Riverside, CA 92507
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="custom-form mt-4 mt-lg-0">
                <div id="message" />
                <form
                  method="post"
                  name="contact-form"
                  id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group app-label">
                        <label htmlFor="name">Name</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          value={this.state.name}
                          onChange={this.onNameChange.bind(this)}
                          placeholder="Enter your name.."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group app-label">
                        <label htmlFor="email">Email address</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                          placeholder="Enter your email.."
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group app-label">
                        <label htmlFor="subject">Subject</label>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          value={this.state.subject}
                          onChange={this.onSubjectChange.bind(this)}
                          id="subject"
                          placeholder="Enter Subject.."
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group app-label">
                        <label htmlFor="comments">Message</label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows={3}
                          className="form-control"
                          value={this.state.message}
                          onChange={this.onMessageChange.bind(this)}
                          placeholder="Enter message.."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-success"
                      >
                        Send Message <i className="mdi mdi-telegram ml-2" />
                      </button>
                      <button
                        type="reset"
                        id="reset"
                        name="reset"
                        className="btn btn-warning ml-2"
                        onClick={this.resetForm.bind(this)}
                      >
                        Reset <i className="mdi mdi-backup-restore ml-2"></i>
                      </button>
                      <div id="simple-msg" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* contact Us End */}
      </Element>
    );
  }
}

export default ContactUs;
