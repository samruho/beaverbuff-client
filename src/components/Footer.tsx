import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import EditableLink from './editables/EditableLink';

const Footer: React.FC = () => {
    return (
        <footer style={{ background: "#222222", color:'white', padding: '2rem 0' }}>
            <div  className="inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem'}}>
                <div className="left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{textAlign:'left'}}>Beaver Buff <span style={{display:'block', fontSize:'0.6em'}}>Details</span></h1>
                </div>
                <div className="right" style={{textAlign: 'left'}}>
                    <p><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"0.5em"}}/><EditableLink style={{color:"white"}} textKey="footer.locationText" hrefKey="footer.locationLink"/></p>
                    <p><FontAwesomeIcon icon={faInstagram} style={{marginRight:"0.5em"}}/><EditableLink style={{color:"white"}} textKey="footer.socialText" hrefKey="footer.socialLink"/></p>
                    <p><FontAwesomeIcon icon={faPhone} style={{marginRight:"0.5em"}}/><EditableLink style={{color:"white"}} textKey="footer.phoneText" hrefKey="footer.phoneLink"/></p>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
