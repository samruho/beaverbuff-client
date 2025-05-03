import React from 'react';
import { Link } from 'react-router-dom';
import EditableText from '../components/editables/EditableText';
import EditableImage from '../components/editables/EditableImage';

const Coupe: React.FC = () => {
  return (
    <>
      <div className="coupe">
        <div className="inner" style={{ padding: '6rem 0' }}>
          <h2 style={{ fontSize: '3em' }}>
            <EditableText contentKey="coupe.title" defaultValue="Coupe Services" />
          </h2>

          <div style={{ display: 'flex', gap: '6rem' }}>
            {/* Interior Detailing */}
            <div style={{ flex: '1 1 33%' }}>
              <EditableImage
                contentKey="coupe.interior.image"
                defaultValue="/images/interior.jpg"
                alt="Interior Detailing"
                style={{ width: '100%' }}
              />
              <h3>
                <EditableText contentKey="coupe.interior.heading" defaultValue="Interior Detailing" />
              </h3>
              <p>
                <EditableText
                  contentKey="coupe.interior.body"
                  defaultValue="Bring your cabin back to life with a deep clean of every surface, crack, and crevice. Great for messy seasons, selling your car, or just starting fresh."
                />
              </p>
              <div className="button-container">
                <Link className="button secondary" to="/services#interior" style={{ textDecoration: 'none' }}>
                  More Info
                </Link>
              </div>
              <div className="button-container">
                <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>
                  Book Now
                </Link>
              </div>
            </div>

            {/* Exterior Detailing */}
            <div style={{ flex: '1 1 33%' }}>
              <EditableImage
                contentKey="coupe.exterior.image"
                defaultValue="/images/exterior.jpg"
                alt="Exterior Detailing"
                style={{ width: '100%' }}
              />
              <h3>
                <EditableText contentKey="coupe.exterior.heading" defaultValue="Exterior Detailing" />
              </h3>
              <p>
                <EditableText
                  contentKey="coupe.exterior.body"
                  defaultValue="Restore your car's shine and protect it from the elements with our comprehensive exterior detailing service."
                />
              </p>
              <div className="button-container">
                <Link className="button secondary" to="/services#exterior" style={{ textDecoration: 'none' }}>
                  More Info
                </Link>
              </div>
              <div className="button-container">
                <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>
                  Book Now
                </Link>
              </div>
            </div>

            {/* Paint Correction */}
            <div style={{ flex: '1 1 33%' }}>
              <EditableImage
                contentKey="coupe.paint.image"
                defaultValue="/images/engine.jpg"
                alt="Paint Correction"
                style={{ width: '100%' }}
              />
              <h3>
                <EditableText contentKey="coupe.paint.heading" defaultValue="Paint Correction and Coating" />
              </h3>
              <p>
                <EditableText
                  contentKey="coupe.paint.body"
                  defaultValue="Enhance your car's appearance and protect it from the elements with our paint correction and coating service."
                />
              </p>
              <div className="button-container">
                <Link className="button secondary" to="/services#paint-correction" style={{ textDecoration: 'none' }}>
                  More Info
                </Link>
              </div>
              <div className="button-container">
                <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupe;
