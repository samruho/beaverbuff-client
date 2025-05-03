import React, { useEffect } from 'react';
import Accordion from '../components/Accordion';
import { Link, useLocation } from 'react-router-dom';
import EditableText from '../components/editables/EditableText';
import EditableRichText from '../components/editables/EditableRichText';

const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <div className="services">

        {/* Interior Detailing */}
        <section id="interior">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left' }}>
              <h2><EditableText contentKey="services.interior.title" defaultValue="Interior Detailing" /></h2>
              <p><EditableText contentKey="services.interior.description" defaultValue="Bring your cabin back to life..." /></p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion titleNode={<EditableText contentKey="services.interior.full.title" defaultValue="Full Interior Detail" />}>
                <EditableRichText
                  contentKey="services.interior.full.body"
                  defaultValue={`**Time: 3–5+ hours depending on condition**  
**Price: Sedan/Coupe $130 | SUV: $160 | Work Trucks / 3-Row SUVs: $175**

- Weather Matts  
- Compressed air, dusting, vacuum  
- Shampoo carpets & mats  
- All interior surfaces cleaned  
- Streak-free glass  
- 3-month protective dressing on leather/plastic/rubber`}
                />
              </Accordion>

              <Accordion titleNode={<EditableText contentKey="services.interior.extras.title" defaultValue="Interior Extras" />}>
                <EditableRichText
                  contentKey="services.interior.extras.body"
                  defaultValue={`- **Salt Stains - $35** (30m)  
- **Pet Hair - $30–$60** (30m–1h)  
- **Seat Shampoo - $50–$60** (1h)  
- **Odor/Ozone Treatment - $50** (1h)`}
                />
              </Accordion>

              <Accordion titleNode={<EditableText contentKey="services.interior.more.title" defaultValue="More Details" />}>
                <EditableRichText
                  contentKey="services.interior.more.body"
                  defaultValue={`Deep clean of all surfaces, vents, jambs, spare tire area.  
Ends with a 3-month coating for UV, water, and dust resistance.`}
                />
              </Accordion>
            </div>
          </div>
        </section>

        {/* Exterior Detailing */}
        <section id="exterior">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left' }}>
              <h2><EditableText contentKey="services.exterior.title" defaultValue="Exterior Detailing" /></h2>
              <p><EditableText contentKey="services.exterior.description" defaultValue="From salt to sap to swirl marks..." /></p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion titleNode={<EditableText contentKey="services.exterior.full.title" defaultValue="Full Exterior Detail" />}>
                <EditableRichText
                  contentKey="services.exterior.full.body"
                  defaultValue={`**Time: 1.5–3 hours**  
**Price: Sedans $110 | SUVs $120**

- Wheels, tires, wheel wells deep cleaned  
- Foam pre-wash, hand wash, air dry  
- Detailing of grille, badges, trims  
- Plastic & tires dressed with CarPro Perl  
- CarPro HydrO2 Sealant on paint, glass, wheels (6 mo)  
- Door jambs cleaned`}
                />
              </Accordion>

              <Accordion titleNode={<EditableText contentKey="services.exterior.basic.title" defaultValue="Basic Exterior Hand Wash" />}>
                <EditableRichText
                  contentKey="services.exterior.basic.body"
                  defaultValue={`**Time: 45m–1h**  
**Price: Sedans $50 | SUVs $60**

- Safe hand wash method  
- 3-month sealant on paint, glass, wheels  
- Quick & convenient (excludes wheels & tight spots)`}
                />
              </Accordion>

              <Accordion titleNode={<EditableText contentKey="services.exterior.extras.title" defaultValue="Exterior Extras" />}>
                <EditableRichText
                  contentKey="services.exterior.extras.body"
                  defaultValue={`**Clay Bar (add 30m)**  
**Price: Sedans $35 | SUVs $50**

Removes bugs, tar, rust spots, embedded fallout.`}
                />
              </Accordion>
            </div>
          </div>
        </section>

        {/* Paint Correction */}
        <section id="paint-correction">
          <div className="inner" style={{ display: 'flex', gap: '6rem', padding: '6rem 0' }}>
            <div className="left" style={{ width: '50%', textAlign: 'left' }}>
              <h2><EditableText contentKey="services.paint.title" defaultValue="Paint Correction" /></h2>
              <p><EditableText contentKey="services.paint.description" defaultValue="Notice hazy paint, swirl marks, or dullness? Our correction packages restore clarity and gloss..." /></p>
              <Link className="button" to="/contact" style={{ textDecoration: 'none' }}>Book Now</Link>
            </div>
            <div className="right" style={{ width: '50%' }}>
              <Accordion titleNode={<EditableText contentKey="services.paint.onestep.title" defaultValue="1-Step Polish" />}>
                <EditableRichText
                  contentKey="services.paint.onestep.body"
                  defaultValue={`Light swirls and oxidation removed to restore gloss.  
Ideal for newer or well-kept vehicles.`}
                />
              </Accordion>

              <Accordion titleNode={<EditableText contentKey="services.paint.twostep.title" defaultValue="2-Step Correction" />}>
                <EditableRichText
                  contentKey="services.paint.twostep.body"
                  defaultValue={`Cut + Polish removes deeper swirls, scratches, oxidation.  
Best for neglected finishes or resale prep.`}
                />
              </Accordion>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .services h2 {
          text-align: left;
          font-size: 4em;
        }
        .services section {
          background: white;
          margin-bottom: 0.5em;
        }
        .services Accordion {
          text-align: left;
        }
      `}</style>
    </>
  );
};

export default Services;
