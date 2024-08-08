import React from 'react';
import { Link } from 'react-router-dom';
import { BODY_CLASSES } from '/Users/natbe181/Desktop/precision-medicine-portal-frontend/pmp-frontend-app/src/constants'; // 

// A functional component
const AccessClinicalData: React.FC = () => {
  const headingStyle = {
    fontSize: '2em',
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '10px 0' // Add margin
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0' // Add margin
  };

  const arrowStyle = {
    marginLeft: '10px',
    fill: 'teal',
    width: '30px',
    height: '30px'
  };

  const firstParagraphStyle = {
    margin: '10px 0' // Add margin
  };

  const secondHeadingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0' // Add margin
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '40px', // Ensure the bullets are indented properly
    margin: '10px 0' // Add margin
  };

  const linkStyle = {
    color: 'teal',
    textDecoration: 'none'
  };

  const linkHoverStyle = {
    color: 'black'
  };

  return (
    <div className={BODY_CLASSES}>
      {/* Paragraph before the first heading */}
      <p style={firstParagraphStyle}>
        Human data for research can be accessed from various sources such as medical records, quality registries, and research databases. If the research involves sensitive personal data (definition available here), the project must be approved by the Swedish Ethical Review Authority. This requirement applies even if the sensitive personal data is pseudonymised. Additionally, all necessary legal measures must be in place before transferring data from the agency or organisation providing the source data. Procedures for requesting and disclosing data vary between different authorities and organisations.
      </p>
      {/* The first heading */}
      <div style={containerStyle}>
        <h1 style={headingStyle}>Patient records and medical records</h1>
        <Link to="/patient-records">
          <svg style={arrowStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="19-Arrow Right">
              <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"/>
              <path d="m26.71 15.29-7-7-1.42 1.42 5.3 5.29H5v2h18.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z"/>
            </g>
          </svg>
        </Link>
      </div>
      {/* Paragraph under the first heading */}
      <p style={firstParagraphStyle}>
        Healthcare staff document patient interactions, and after a confidentiality assessment, this information can be requested for medical research. In Sweden, the 21 regions are responsible for most healthcare services, while municipalities handle services like home care, and private practitioners manage their own records. Consequently, to conduct research using patient records from across the country, it may be necessary to request data from multiple sources.
      </p>

      {/* The second heading */}
      <div style={secondHeadingContainerStyle}>
        <h1 style={headingStyle}>Quality registers</h1>
        <Link to="/quality-registers">
          <svg style={arrowStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="19-Arrow Right">
              <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"/>
              <path d="m26.71 15.29-7-7-1.42 1.42 5.3 5.29H5v2h18.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z"/>
            </g>
          </svg>
        </Link>
      </div>
      {/* Paragraph under the second heading */}
      <p style={firstParagraphStyle}>
        The Swedish quality registries aim to improve the health care system by collecting individualised health data about, for example, certain diagnoses or problems (further information in Swedish). Data from a certain registry can be requested by researchers after approval by a steering group consisting of health care professionals and patient representatives.
      </p>
      <p style={firstParagraphStyle}>
        Healthcare providers must inform patients before their medical information is collected in a quality register. This procedure differs from the inclusion of a research subject in a study, where written consent is required. However, personal data cannot be processed in a quality register or research study if the individual objects. If a person opposes the processing of their personal data after it has begun, the information should be erased from the register as soon as possible (further information in Swedish).
      </p>
      <p style={firstParagraphStyle}>
        Every quality registry in Sweden is connected to one of six centres that provide support:
      </p>
      <ul style={listStyle}>
        <li><a href="https://qrcstockholm.se/" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>Stockholm (QRC STHLM)</a></li>
        <li><a href="https://rcsyd.se/" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>Syd (RC SYD)</a></li>
        <li><a href="https://rcnorr.se/" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>Norr (RCN)</a></li>
        <li><a href="https://www.ucr.uu.se/" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>Uppsala Clinical Research Center (UCR)</a></li>
        <li><a href="https://registercentrum.se/rc-vast/vastra-gotaland" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>Västra Götaland</a></li>
        <li><a href="https://registercentrum.se/rc-sydost/sydost" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color}>SydOst (RCSO)</a></li>
      </ul>
    </div>
  );
};

export default AccessClinicalData;