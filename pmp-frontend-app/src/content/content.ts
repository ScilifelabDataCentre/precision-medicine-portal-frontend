import NatTeamPic from '../assets/TeamPics/NatTeamPic.jpg';
import SebTeamPic from '../assets/TeamPics/SebTeamPic.png';
import JanTeamPic from '../assets/TeamPics/JanTeamPic.jpg';
import MarTeamPic from '../assets/TeamPics/MarTeamPic.png';
import SamTeamPic from '../assets/TeamPics/SamTeamPic.jpg';

export const PrivacyPageContent = {
    textBar: 'Transparency is one of our guiding principles. Get acquainted with how we\'re creating a secure space for you.',
    content: [
        {
            header: 'Privacy Policy', 
            body:
                `
                SciLifeLab operates the Swedish Precision Medicine Portal, which provides the Service. This page is 
                used to inform website visitors regarding our personal data processing policy. If you choose to use 
                our Service, then your personal data will be processed in accordance with this policy. The personal 
                information that we collect is used for providing and improving the Service. We will not use 
                or share your information with anyone except as described in this policy. All collected personal 
                information will be processed for research purposes, i.e. using the lawful basis of public interest 
                and in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 
                27 April 2016, the General Data Protection Regulation.
                `,
        },
        {
            header: 'Visitor statistics', 
            body:
                `
                We want to inform you that whenever you visit our Service, we collect the information that your 
                browser sends to us, which is called "log data". Log data may include: the website that you 
                visited us from, the parts of our Service you visit, the date and duration of your visit, 
                your anonymised IP address, information from the device that you used during your visit (device 
                type, operating system, screen resolution, language, country you are located in, and 
                web browser type), and more. We process this usage data in Matomo Analytics (hosted on 
                SciLifeLab servers and operated solely by SciLifeLab) for statistical purposes, to 
                improve our Service, and to recognise and stop any misuse. You can opt out of your 
                statistics being collected below:\n\nThe tracking opt-out feature requires cookies to be enabled.
                `,
        },
        {
            header: 'Forms', 
            body:
                `
                Our Service contains a number of forms that visitors can use to contact us or send us suggestions. 
                The website visitors may choose to provide their personal information such as their name and e-mail 
                address through these forms. The following parties will have access to processing the personal data 
                provided through the forms; SciLifeLab Data Centre, Uppsala University, Kungliga Tekniska högskolan 
                (KTH). Your personal data will be deleted when no longer needed, or when stipulated by the archival 
                rules for the university as a government authority. If you want to update or remove your personal data, 
                please contact the controller SciLifeLab Data Centre at Uppsala University using x@scilifelab.se                            
                `,
        },
        {
            header: 'Links to Other Sites',
            body:
                `
                Our Service may contain links to other sites. If you click on a third-party link, you will be 
                directed to that site. Note that these external sites are not operated by us. Therefore, we 
                strongly advise you to review the privacy policy of these websites. We have no control over, 
                and assume no responsibility for, the content, privacy policies, or practices of any third-party 
                sites or services.
                `,
        },
        {
            header: 'Changes to This Privacy Policy',
            body:
                `
                We may update our privacy policy from time to time. Thus, we advise you to review this page 
                periodically for any changes. We will notify you of any changes by posting the new privacy policy 
                on this page. These changes posted on this page are effective immediately.
                `,
        },
        {
            header: 'Contact Us',
            body:
                `
                If you have any questions or suggestions about our privacy policy, do not hesitate to contact 
                us (link to contact page).
                `,
        },
    ],
}

export const ContactPageContent = {
    textBar: 'We\'re here to help. Reach out to us with any questions or suggestions you may have.',
    content: [
        {
            header: 'Contact Form', 
            body:
                `
                    Please fill out this form if you need to contact us at the Swedish Precision Medicine Portal. 
                    Provide your contact information and we should get back to you within a weeks time.
                `,
        },
        {
            header: 'Personal Data Policy',
            body: 
                `
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
    ]
}

export const TeamDescriptions = {
    teamMembers: {
        jan: 
            {
                name: 'Jan Lorenz',
                title: 'Product Owner',
                description: 
                `
                Jan holds a Master's degree in Health Informatics from Karolinska Institute and a Bachelor's degree 
                in Business Informatics. He possesses management and leadership experience from his previous roles 
                in management consultancy and from serving on the boards of startups.
                `,
                img: JanTeamPic,
                imgAlt: "Jan Lorenz - Product Owner",
            },
        natashia: 
            {
                name: 'Natashia Benzian Olsson',
                title: 'Data Steward',
                description: 
                `
                Natashia holds a MSc in Behavioural Genetics and a BSc in Psychology. She has numerous years of 
                hands-on experience with NGS data and bioinformatics at King's College London with several publications 
                in high-impact journals. She is currently involved in content development and ensuring data 
                quality at the PMD DSN.
                `,
                img: NatTeamPic,
                imgAlt: "Natashia Benzian Olsson - Data Steward",
            },
        sebastian:
            {
                name: 'Sebastian Lindbom Gunnari',
                title: 'Software Engineer',
                description: 
                `
                Sebastian has a BSc in Computer Science from Stockholm University. He has previously worked as a 
                data engineering consultant, building platforms and pipelines handling analytical data flows. 
                Currently, he's working with web development at the PMD DSN.
                `,
                img: SebTeamPic,
                imgAlt: "Sebastian Lindbom Gunnari - Software Engineer",
            },
        saman:
            {
                name: 'Saman Rassam',
                title: 'Software Engineer',
                description: 
                `
                Saman has a MSc in Computer Science and Engineering from KTH. He is focusing on Kubernetes and 
                back-end development at the PMD DSN. He is also supporting the TEF-Health initiative.
                `,
                img: SamTeamPic,
                imgAlt: "Saman Rassam - Software Engineer",
            },
        maria:
            {
                name: 'Maria Ahlsén',
                title: 'Coordinator',
                description: 
                `
                Maria holds a PhD in Physiology from Karolinska Institutet and a bachelor’s degree in Chemistry 
                from Stockholm University. She has coordinated several research studies at both universities and 
                hospitals, with a particular expertise in ethics and contractual matters related to handling 
                sensitive data.
                `,
                img: MarTeamPic,
                imgAlt: "Maria Ahlsén - Coordinator",
            },
    }
}

export const DataSourcesPageContent = {
    textBar: 'This page is currently under construction. Please check back later for updates.',
}

export const EventsAndTrainingsPageContent = {
    textBar: 'This page is currently under construction. Please check back later for updates.',
}

export const AboutPageContent = {
    textBar: 'Get to know about the team behind the portal and our mission to connect you with the data you need.',
}