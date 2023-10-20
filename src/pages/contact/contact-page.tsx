import { contactData } from "./contact-data";

const ContactPage = () => {
  return (
    <section className="contact-section-container">
      <p className="fs-48 clr-primary-000">
        Contact <span className="fs-48 clr-neon-red ">Me</span>
      </p>

      <div className="contact-info-container">
        <div className="contact-section-background-blur"></div>
        {contactData.map((entry) => {
          return (
            <div className="contact-info-slide">
              <img alt={`${entry.contactTitle}`} src={entry.contactLogo} />
              <p className="clr-primary-000 fs-32 lh-32 fw-bold">
                {entry.contactTitle}
              </p>
              <p className="clr-primary-000 fs-22 lh-22">{entry.contactData}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ContactPage;
