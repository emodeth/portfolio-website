import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__container container">
        <h3 className="contact__header">Contact</h3>
        <h4 className="contact__header-2">Don't be shy! Hit me up! 👇</h4>
        <div className="contact__contacts">
          <div className="contact__location">
            <span className="contact__location-icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </span>
            <div className="contact__location-content">
              <h5 className="contact__location-header">Location</h5>
              <p className="contact__location-text">Istanbul, Turkey</p>
            </div>
          </div>
          <div className="contact__mail">
            <span className="contact__mail-icon">
              <i className="fa-solid fa-envelope-open-text"></i>
            </span>
            <div className="contact__mail-content">
              <h5 className="contact__mail-header">Mail</h5>
              <p className="contact__mail-text">
                <a href="mailto:emirhankeskindev@gmail.com">
                  emirhankeskindev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
