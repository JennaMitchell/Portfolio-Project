import { useAppSelector } from "../../library/store/typescript-hooks";
import { contactData } from "./contact-data";

const ContactPage = () => {
  const darkModeActive = useAppSelector((state) => state.theme.darkModeActive);
  return (
    <section className="contact-section-container bg-primary-1000">
      <p className="section-title-text lh-82 fs-82 primary-clr-primary-000">
        Contact{" "}
        <span className="section-title-text lh-82 fs-82 accent-clr-primary-500">
          Me
        </span>
      </p>

      <div className="contact-info-container">
        {darkModeActive && (
          <div className="contact-section-background-blur contact-section-background-blur-black" />
        )}
        {!darkModeActive && (
          <div className="contact-section-background-blur contact-section-background-blur-white" />
        )}
        {contactData.map((entry) => {
          return (
            <div className="contact-info-slide">
              {darkModeActive && (
                <img
                  alt={`${entry.contactTitle}`}
                  src={entry.contactWhiteIcon}
                />
              )}
              {!darkModeActive && (
                <img
                  alt={`${entry.contactTitle}`}
                  src={entry.contactBlackIcon}
                />
              )}
              <p className="primary-clr-primary-000 fs-32 lh-32 fw-bold">
                {entry.contactTitle}
              </p>
              <p className="primary-clr-primary-000 fs-22 lh-22">
                {entry.contactData}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ContactPage;
