import React from 'react';
import Accordion from '../components/Accordion';
import { Link } from 'react-router-dom';


const Services: React.FC = () => {
  return (
    <>
      <div className="services">
        
        {/* Interior Detailing */}
        <section id="interior">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left'  }}>
              <h2>Interior Detailing</h2>
              <p>Bring your cabin back to life with a deep clean of every surface, crack, and crevice. Great for messy seasons, selling your car, or just starting fresh.</p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }} >Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion title="Full Interior Detail">
                <p><strong><u>Time: 3–5+ hours depending on condition</u></strong></p>
                <p><strong>Sedan/Coupe $130 | SUV: $160 | Work Trucks / 3-Row SUVs: $175</strong></p>
                <ul>
                  <li>Weather Matts</li>
                  <li>Compressed air, dusting, vacuum</li>
                  <li>Shampoo carpets & mats</li>
                  <li>All interior surfaces cleaned</li>
                  <li>Streak-free glass</li>
                  <li>3-month protective dressing on leather/plastic/rubber</li>
                </ul>
              </Accordion>
              <Accordion title="Interior Extras">
                <ul>
                  <li><strong>Salt Stains - $35</strong> (30m)</li>
                  <li><strong>Pet Hair - $30–$60</strong> (30m–1h)</li>
                  <li><strong>Seat Shampoo - $50–$60</strong> (1h)</li>
                  <li><strong>Odor/Ozone Treatment - $50</strong> (1h)</li>
                </ul>
              </Accordion>
              <Accordion title="More Details">
                <p>
                  Deep clean of all surfaces, vents, jambs, spare tire area. Ends with a 3-month coating for UV, water, and dust resistance.
                </p>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Exterior Detailing */}
        <section id="exterior">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left' }}>
              <h2>Exterior Detailing</h2>
              <p>From salt to sap to swirl marks, our exterior packages bring back shine and add long-lasting protection. Choose a quick hand wash or go all-in with a full detail.</p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }} >Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion title="Full Exterior Detail">
                <p><strong>Time: 1.5–3 hours</strong></p>
                <p><strong>Sedans: $110 | SUVs: $120</strong></p>
                <ul>
                  <li>Wheels, tires, wheel wells deep cleaned</li>
                  <li>Foam pre-wash, hand wash, air dry</li>
                  <li>Detailing of grille, badges, trims</li>
                  <li>Plastic & tires dressed with CarPro Perl</li>
                  <li>CarPro HydrO2 Sealant on paint, glass, wheels (6 mo)</li>
                  <li>Door jambs cleaned</li>
                </ul>
              </Accordion>
              <Accordion title="Basic Exterior Hand Wash">
                <p><strong>Time: 45m–1h</strong></p>
                <p><strong>Sedans: $50 | SUVs: $60</strong></p>
                <ul>
                  <li>Safe hand wash method</li>
                  <li>3-month sealant on paint, glass, wheels</li>
                  <li>Quick & convenient (excludes wheels & tight spots)</li>
                </ul>
              </Accordion>
              <Accordion title="Exterior Extras">
                <p><strong>Clay Bar (add 30m)</strong></p>
                <p><strong>Sedans: $35 | SUVs: $50</strong></p>
                <p>Removes bugs, tar, rust spots, embedded fallout</p>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Paint Correction */}
        <section id="paint-correction">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left'  }}>
              <h2>Paint Correction</h2>
              <p>Notice hazy paint, swirl marks, or dullness? Our correction packages restore clarity and gloss, giving your paint a second life.</p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }} >Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion title="1-Step Polish">
                <p>Light swirls and oxidation removed to restore gloss. Ideal for newer or well-kept vehicles.</p>
              </Accordion>
              <Accordion title="2-Step Correction">
                <p>Cut + Polish removes deeper swirls, scratches, oxidation. Best for neglected finishes or resale prep.</p>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
      <style>{`
        .services h2 {
          text-align: left;
          font-size:4em;
        }
        .services section {
          background:white;
          margin-bottom:0.5em;
        }
        .services Accordion {
          text-align: left;}
      `}</style>
    </>
  );
};


export default Services;
