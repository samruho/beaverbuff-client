import React from 'react';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import EditableText from '../components/editables/EditableText';

const Contact: React.FC = () => {
  return (
    <div style={{ background: 'white', padding: '6rem 0', color: 'black' }}>
      <div className="inner" style={{ display: 'flex' }}>
        <div className="left" style={{ width: '50%', textAlign: 'left' }}>
          <h2 style={{ fontSize: '4em', marginTop: 0, marginBottom: '0.3em' }}>
            <EditableText contentKey="contact.title" defaultValue="Contact Us" />
          </h2>

          <p style={{ fontSize: '1.5em', paddingRight: '1em' }}>
            <EditableText
              contentKey="contact.description"
              defaultValue="We aim to serve everyone’s needs, budgets, and time constraints. Provide the year/model of your vehicle as well as the areas of most concern and we will see what we can do."
            />
          </p>

          <div style={{ fontSize: '1.4em' }}>
            <p>
              <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '0.5em' }} />
              <a
                href="https://www.google.com/maps/place/14445+Peel+Regional+Rd+50,+Bolton,+ON+L7E+3H6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EditableText
                  contentKey="contact.address"
                  defaultValue="14445 Peel Regional Rd 50, Bolton, ON"
                />
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '0.5em' }} />
              <a
                href="https://www.instagram.com/beaverbuffdetails"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EditableText
                  contentKey="contact.instagram"
                  defaultValue="@BeaverBuffDetails"
                />
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5em' }} />
              <a href="tel:+14162203001">
                <EditableText
                  contentKey="contact.phone"
                  defaultValue="(416) 220-3001"
                />
              </a>
            </p>
          </div>

          <div style={{ marginTop: '2em' }}>
            <ContactForm />
          </div>
        </div>

        <div className="right" style={{ width: '50%', textAlign: 'left' }}>
          <iframe
            style={{ width: '100%', height: '100%', border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46001.94559618896!2d-79.80158002313361!3d43.89474818629332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1f735d256117%3A0x7b0e880644d0797d!2s14445%20Peel%20Regional%20Rd%2050%2C%20Bolton%2C%20ON%20L7E%203H6!5e0!3m2!1sen!2sca!4v1744565654441!5m2!1sen!2sca"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
