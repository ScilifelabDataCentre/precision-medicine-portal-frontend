const NatTeamPic = "/TeamPics/NatTeamPic.jpg";
const SebTeamPic = "/TeamPics/SebTeamPic.png";
const JanTeamPic = "/TeamPics/JanTeamPic.jpg";
const MarTeamPic = "/TeamPics/MarTeamPic.png";
const SamTeamPic = "/TeamPics/SamTeamPic.jpg";

export const PrivacyPageContent = {
  content: [
    {
      header: "Privacy Policy",
      body: `
                SciLifeLab operates the Swedish Precision Medicine Portal, which provides the Service. This page is intended to 
                inform website visitors about our personal data processing policy. By using our Service, you agree that your 
                personal data will be processed in accordance with this policy. 
                `,
    },
    {
      header: "Data Collection and Usage",
      body: `
                The personal information we collect is used solely for
                providing and improving the Service. We will not use or share your information with anyone except 
                as described in this policy. All collected personal information will be processed for research purposes under 
                the lawful basis of public interest and in compliance with Regulation (EU) 2016/679 of the European Parliament 
                and of the Council of 27 April 2016, the General Data Protection Regulation (GDPR).
                `,
    },
    {
      header: "Visitor Statistics",
      body: `
                We collect information that your browser sends to us whenever you visit our Service, referred to as 'log data.' 
                This data may include: 
                •	The website you visited us from
                •	The parts of our Service you visit
                •	The date and duration of your visit
                •	Your anonymised IP address
                •	Information about the device you used during your visit (device type, operating system, screen resolution, language, country you are located in, and web browser type)
                We process this usage data using Matomo Analytics (hosted on SciLifeLab servers and operated solely by SciLifeLab)
                for statistical purposes, to improve our Service, and to recognise and prevent any misuse. You can opt out of your statistics 
                being collected below. Note that the tracking opt-out feature requires cookies to be enabled. 
                `,
    },
    {
      header: "Forms",
      body: `
                Our Service contains several forms that visitors can use to contact us or provide suggestions. 
                The website visitors may choose to provide their personal information such as their name and e-mail 
                address through these forms. The following parties will have access to processing the personal data 
                provided through the forms; SciLifeLab Data Centre, Uppsala University, Kungliga Tekniska högskolan 
                (KTH). Your personal data will be deleted when no longer needed, or when stipulated by the archival 
                rules for the university as a government authority. If you want to update or remove your personal data, 
                please contact the controller SciLifeLab Data Centre at Uppsala University using datacentre@scilifelab.se                            
                `,
    },
    {
      header: "Links to Other Sites",
      body: `
                Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. 
                These external sites are not operated by us, and we strongly advise you to review the privacy policy of these websites. 
                We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party sites or services.
                `,
    },
    {
      header: "Changes to This Privacy Policy",
      body: `
                We may update our privacy policy from time to time. We advise you to review this page periodically for any changes. 
                We will notify you of any changes by posting the new privacy policy on this page. Changes are effective immediately 
                upon being posted on this page. 
                `,
    },
    {
      header: "Contact Us",
      body: `
                If you have any questions or suggestions about our privacy policy, do not hesitate to contact 
                us (link to contact page).
                `,
    },
  ],
};

export const ContactPageContent = {
  content: [
    {
      header: "Contact Form",
      body: `
                    Please fill out this form if you need to contact us at the Swedish Precision Medicine Portal. 
                    Provide your contact information and we should get back to you within a weeks time.
                `,
    },
    {
      header: "Personal Data Policy",
      body: `
                    The personal data you provide in this form, your name and email address, will be used to 
                    process your suggestion of added resource to the Swedish Precision Medicine Portal. It is a 
                    service run by the SciLifeLab Data Centre on assignment from the … It serves to address…

                    The information you provide will be processed for research purposes, i.e. using the lawful 
                    basis of public interest and in accordance with Regulation (EU) 2016/679 of the European 
                    Parliament and of the Council of 27 April 2016, the General Data Protection Regulation.

                    The following parties will have access to processing your personal data: SciLifeLab Data 
                    Centre, Uppsala University. Your personal data will be deleted when no longer needed, or when 
                    stipulated by the archival rules for the university as a government authority. If you want to 
                    update or remove your personal data please contact the controller SciLifeLab Data Centre at 
                    Uppsala University using datacentre@scilifelab.se.
                `,
    },
  ],
};

export const TeamDescriptions = {
  teamMembers: {
    jan: {
      name: "Jan Lorenz",
      title: "Product Owner",
      description: `
                Jan holds a Master's degree in Health Informatics from Karolinska Institute and a Bachelor's degree 
                in Business Informatics. He possesses management and leadership experience from his previous roles 
                in management consultancy and from serving on the boards of startups.
                `,
      img: JanTeamPic,
      imgAlt: "Jan Lorenz - Product Owner",
    },
    natashia: {
      name: "Natashia Benzian Olsson",
      title: "Data Steward",
      description: `
                Natashia holds a MSc in Behavioural Genetics and a BSc in Psychology. She has numerous years of 
                hands-on experience with NGS data and bioinformatics at King's College London with several publications 
                in high-impact journals. She is currently involved in content development and ensuring data 
                quality at the PMD DSN.
                `,
      img: NatTeamPic,
      imgAlt: "Natashia Benzian Olsson - Data Steward",
    },
    sebastian: {
      name: "Sebastian Lindbom Gunnari",
      title: "Software Engineer",
      description: `
                Sebastian has a BSc in Computer Science from Stockholm University. He has previously worked as a 
                data engineering consultant, building platforms and pipelines handling analytical data flows. 
                Currently, he's working with web development at the PMD DSN.
                `,
      img: SebTeamPic,
      imgAlt: "Sebastian Lindbom Gunnari - Software Engineer",
    },
    saman: {
      name: "Saman Rassam",
      title: "Software Engineer",
      description: `
                Saman has a MSc in Computer Science and Engineering from KTH. He is focusing on Kubernetes and 
                back-end development at the PMD DSN. He is also supporting the TEF-Health initiative.
                `,
      img: SamTeamPic,
      imgAlt: "Saman Rassam - Software Engineer",
    },
    maria: {
      name: "Maria Ahlsén",
      title: "Coordinator",
      description: `
                Maria holds a PhD in Physiology from Karolinska Institutet and a bachelor’s degree in Chemistry 
                from Stockholm University. She has coordinated several research studies at both universities and 
                hospitals, with a particular expertise in ethics and contractual matters related to handling 
                sensitive data.
                `,
      img: MarTeamPic,
      imgAlt: "Maria Ahlsén - Coordinator",
    },
  },
};
