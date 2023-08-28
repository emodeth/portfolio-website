import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <p className="footer__copyright">
            Copyright © 2023. All rights are reserved
          </p>
          <div className="footer__socials">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/emirhan-keskin-99854b215/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/emodeth"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
