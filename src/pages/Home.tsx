// src/pages/Home.tsx
import React from 'react';
import homeBannerImg from '../assets/home_banner.jpg';
import coupe from '../assets/coupe.png';
import sedan from '../assets/sedan.png';
import suv from '../assets/suv.png';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';
import EditableText from '../components/editables/EditableText';
import EditableImage from '../components/editables/EditableImage';

const Home: React.FC = () => {

  return (
    <>
    <div className="home-banner" style={{ background: "#222222", color:'white'}}>
        <div className="inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "6rem"}}>
            <EditableImage contentKey="home.bannerImage" style={{borderRadius: '4rem', width: '600px'}} />
            {/* <img src={homeBannerImg} style={{borderRadius: '4rem', width: '600px'}} /> */}
            <div style={{marginLeft: "6em", textAlign:'left'}}>
                {/* <h1>Beaver Buff Detailing</h1> */}
                <h2 style={{ fontSize: '4rem', lineHeight: '4rem'}}>
                  <EditableText
                    contentKey="home.subtitle"
                  />
                </h2>
                <Link className="button" to="/contact" style={{ textDecoration: 'none' }} >Contact Us</Link>
            </div>
        </div>
    </div>
    <FadeIn>
      <div className="explore-offerings">
        <div className="inner" style={{ padding: "6rem"}}>
          <h2 style={{textAlign:'left', fontSize:'4em', marginTop:0}}><EditableText contentKey="home.subtitle2" /></h2>
          <div style={{ display: 'flex', gap: '6rem'}}>
            <div style={{width: '33%', display: 'flex', flexDirection: 'column', justifyContent:'flex-end'}}>
              <img src={coupe} style={{borderRadius: '2rem', width: '100%'}} />
              <Link to="/coupe" style={{textAlign:'center', fontSize:'2em', marginTop:'1em'}}><EditableText contentKey="home.leftOffering" /></Link>
            </div>
            <div style={{width: '33%', display: 'flex', flexDirection: 'column', justifyContent:'flex-end'}}>
              <img src={sedan} style={{borderRadius: '2rem', width: '100%'}} />
              <Link to="/sedan" style={{textAlign:'center', fontSize:'2em', marginTop:'1em'}}><EditableText contentKey="home.centerOffering" /></Link>
            </div>
            <div style={{width: '33%', display: 'flex', flexDirection: 'column', justifyContent:'flex-end'}}>
              <img src={suv} style={{borderRadius: '2rem', width: '100%'}} />
              <Link to="/suv" style={{textAlign:'center', fontSize:'2em', marginTop:'1em'}}><EditableText contentKey="home.rightOffering" /></Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div className="contact-us-container" style={{ textAlign: 'left'}}>
        <div className="inner" style={{ padding: "6rem", display:'flex', gap:'6rem'}}>
          <div className="left" style={{width:'50%'}}>
            <h2 style={{textAlign:'left', fontSize:'4em', marginTop:0}}>Contact Us</h2>
            <p style={{fontSize:'1.5em'}}><EditableText contentKey="home.contactBody"/></p>
          </div>
          <div className="right" style={{width:'50%'}}>
            <ContactForm />
          </div>
        </div>
      </div>
    </FadeIn>
    </>
  );
};

export default Home;

