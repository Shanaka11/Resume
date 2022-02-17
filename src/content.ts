import { IContent } from './interfaces/IContent';
import { IProject } from './interfaces/IProject';

const projects:IProject[] = [
    {
        id: 1,
        title: 'Booking Management System',
        subtitle: 'In Progress',
        summary: [
            'A web application to handle bookings and promote events for Frolicz Family Hub'
        ],
        techStack: 'React | C# | AWS Amplify | Azure Functions',
        image: 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/frolicz.png',
        link: 'https://www.frolicz.com.au/',
        otherLinks: [
            {
                type: 'Source',
                link: 'https://github.com/Shanaka11/AeseckProFrontend'
            },
            {         
                type: 'Design',   
                link: 'https://www.figma.com/file/8ydbAQ22MwBMTBQUSIyVw2/Com-Center?node-id=0%3A1'
            },
            {
                type: 'Demo',
                link: 'https://frolicz.aseckpro.com.au/'
            }
        ],
        details: [
            'This web application was developed to handle bookings and promote events for Frolicz Family Hub. In addition to bookings, membership maintenance and payment handling were provided by an admin interface.',
            'I was responsible for the design and implementation of the frontend for both the client-facing and admin interface according to the client specification. Additionally, I was involved in the testing and implementation of some backend features as well.  Furthermore was involved in setting up CI/CD pipelines using AWS Codepipeline and AWS Amplify.',
            'Frontend implementation used React & Typescript with the use of React - Query and context API for state management. Deployment was done using AWS Amplify. Backend implementation was done using C# and entity framework and deployed using Azure functions.'
        ]

    },
    {
        id: 2,
        title: 'Insurance Application Management System',
        subtitle: 'In Progress',
        summary: [
            'A platform to process insurance applications/claims for insurance brokers, Mainly for the cyber security domain'
        ],
        techStack: 'React | Express | Graphql | AWS Lambda | Python',
        link: '#',
        details: [
            'The platform was developed to process insurance claims for insurance brokers. It supports multiple tenants with theming capabilities. The development was for Waratah Analytics.',
            'I was responsible for the full-stack development of this platform under the guidance of a tech lead. Additionally, I was partially involved in solution design as well.',
            'Front-End implementations have used React and Typescript using Material UI. The back-end implementation used a Hasura GraphQL server. Apollo client as the primary state manager, Auth0 to handle authentication. Additional business logic was implemented as Microservices and was deployed serverless as AWS Lamda. Microservices implementation using docker, python, and NodeJS.'
        ]
    },
    {
        id: 3,
        title: 'Project Resume',
        subtitle: 'Completed',
        summary: [
            'A simple web page to display your achivements'
        ],
        techStack: 'React | AWS S3,Amplify',
        image: 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/Resume.jpg',
        link: '#',
        otherLinks: [
            {
                type: 'Design',
                link: 'https://www.figma.com/file/AzLjTS8KAppAgVvWAmp34o/ResumeWeb?node-id=0%3A1'
            }
        ],
        details: [
            'Simple website site designed to showcase your skills & experiance',
            'Since this is only a front-end project implementation is done using React and Typescript. Additionally Styled Components and React-Router Libraries are used to help styling and routing.',
            'All the animations and styling is done without using any 3rd party libraries'
        ]
    }
]

export const content:IContent = {
    name: "Shanaka Abeysinghe",
    title: "Full Stack Engineer",
    aboutMe: "I am an accomplished Software Engineer with more than five years of industry experience. During that period, I have gained extensive knowledge and experience in Software Development, Testing, Deploying, and Delivery. Furthermore, I'm well versed in Requirement gathering, Client handling, Problem-solving, and Solution Designing.I consider myself a professional who believes Quality of Delivery and Customer Satisfaction are the keys to the success of a business. Therefore always strive to achieve that.I find joy in learning and problem solving and a bit of soccer as well.",
    avatar: 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/911080710A_2x2.jpeg',
    contact: {
        phone: '+94 71 414 5 998',
        email: 'shanakaabeysinghe@gmail.com',
        location: 'Kandy, Sri Lanka',
        github: 'https://github.com/shanaka11',
        linkedIn: 'https://linkedin.com/in/shanakaabeysinghe'
    },
    skills: [
        {
            label: 'React',
            score: 89,
            description: 'More than 2 years of experiance. Worked on number of freelance projects for clients around the globe.'
        },
        {
            label: 'Django',
            score: 80,
            description: 'More than 2 years of experiance. Worked on a freelance projects for an south american client. Used in many of my personal projects.'
        },
        {
            label: 'AWS (S3/Amplify/Lambda)',
            score: 67,
            description: 'Preferred cloud service provider. Maintained a private package repository using Code Artifact. Used Lamda to deploy microservices as serverless functions. Amplify is the main service used to deploy react apps.'
        },
        {
            label: 'Typescript',
            score: 75,
            description: 'Used in conjunction with React projects. experiance using with libraries such as React-Query and React-Hook-Form.'
        },
        {
            label: 'Django Rest Framework',
            score: 76,
            description: 'When the need of rest apis were required I resorted to Django Rest Framework. Used in multiple projects for about 2 years.'
        },
        {
            label: 'Version Control Systems ( git) ',
            score: 70,
            description: 'In addition to version controlling. Github was used to manage deployments.'
        },
        {
            label: 'Figma',
            score: 60,
            description: 'My main design tool. Experiances in prototyping as well.'
        },
        {
            label: 'Python',
            score: 55,
            description: 'Close to 2 years of expeirance. Mostly have familier with functionality required in Django.'
        },
        {
            label: 'SQL / PLSQL',
            score: 89,
            description: 'More than 5 years of experiance. Mainly in PLSQL development. This is the main backend technology used in IFS Applications.'
        },
        {
            label: 'NodeJS',
            score: 85,
            description: 'Familier with multiple node libraries such as Axios, Express and so on.'
        },
        {
            label: 'GraphQL',
            score: 86,
            description: 'Used in a one major project recently. Server was implemented using Hasura Graphql Services. In the frontend apollo client was used for data fetching.'
        },
        {
            label: 'ERP (IFS Applications)',
            score: 95,
            description: 'Hands on experiance on developing customizations on IFS Applications. From applications 8 upto 10 and Aurena. On both client and server customizations.'
        },
        {
            label: 'C#',
            score: 50,
            description: 'Close to 5 years experiance. A big issue would be that the experiance is in relation to IFS Framework therefore knowledge on some c# functionlaity could be lacking.'
        }
    ],
    workHistory: [
        {
            time: '2019-02 - Present',
            title: 'Full Stack Engineer - Project Basis - Five12Days (SL)',
            description: 'React | Typescript | Django | Django Rest Framework | GraphQl | AWS (S3/Amplify/Lambda/CodeArtifact) | C# | CI/CD | postgreSQL | Git | Figma',
            avatar: 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/F12Days.svg',
            avatarAlt: 'Five12Days',
            link: '#',
            responsibilities: [
                'UI/UX Design',
                'Software Development',
                'Database Management',
                'CI/CD, Branching and Migrations',
                'Software Architecture Design'
            ],
            projects: [
                {
                    description:'Insurance Claim Platform for Waratah Analytics (Work In Progress)',
                    details: [
                        'Frontend Using React',
                        'Microservices & Integrations through AWS Lambda / Express',
                        'Hasura graphql server management'
                    ]
                },
                {
                    description:'Booking Platform for Frolicz Familiy Hub, Australia (Work In Progress)',
                    details: [
                        'Client Wep Application',
                        'Admin Web Application'
                    ]
                },
            ],
            experiance:[
                'Amazon Web Services such as S3, Lambda, Amplify',
                'CI/CD Pipelines with AWS Code Pipeline & Git Flow',
                'Designing and managing a Hasura Graphql server',
                'Microservice Architecture to handle 3rd Party Integration',
                'Design Libraries such as MaterialUI to design and implement UI in react',
                'Context API, Apollo, React Query and Redux for state management',
                'Client Handling'
            ]
        },
        {
            time: '2021-12 to Present',
            title: 'Senior Technical Consultant - Full Time Permanent - Axzenze Pvt Ltd (SL)',
            description: 'C# | PLSQL | IFSApplications 8-10 | IFSAurena | IFSMiddleTierDevelopment',
            avatar: 'https://www.axcenze.com/images/logo2x.png',
            avatarAlt: 'Axcenze',
            link: 'https://www.axcenze.com/',
            responsibilities: [
                'Design & Implement Client Customizations for IFS Applications',
                'IFS Report designing'
            ],
            experiance:[
                'C#',
                'SQL/PLSQL',
                'IFS Aurena',
                'Working on IFS Integration solutions for 3rd Party Applications'
            ]
        },
        {
            time: '2020-01 to 2021-11',
            title: 'Senior Software Engineer - Full Time Permanent - Addovation Pvt Ltd (Sweeden, Site KAN01 )',
            description: 'C# | PLSQL | IFSApplications 8-10 | IFSAurena | IFSMiddleTierDevelopment',
            avatar: 'https://www.addovation.com/wp-content/themes/addovation/assets/images/logo-positiv.svg',
            avatarAlt: 'Addovation',
            link: 'https://www.addovation.com/',
            responsibilities: [
                'Design & Implement Client Customizations for IFS Applications',
                'Uplift Customizations to newer IFS versions',
                'Testing and manage deliveries',
                'Design & Implement IFS Integrations & Transformers (XSL / Java)'
            ],
            experiance:[
                'C#',
                'SQL/PLSQL',
                'Java',
                'Client Handling'
            ]
        },
        {
            time: '2016-09 to 2019-12',
            title: 'Software Engineer - Full Time Permanent - IFS R&D International (Sweeden, Site KDY)',
            description: 'C# | PLSQL | IFSApplications 8-10 | IFSAurena | IFSMiddleTierDevelopment',
            avatar: 'https://www.ifs.com/content/images/logo.png',
            avatarAlt: 'IFS',
            link: 'https://www.ifs.com/',
            responsibilities: [
                'Implement Client Customizations for IFS Applications',
                'Uplift Customizations to newer IFS versions',
                'Testing and manage deliveries',
            ],
            projects: [
                {
                    description:'Customizations for Sizewise Rentals LLC',
                    details: [
                        'Complete overhaul of Rental Component',
                        'Introduction of new Invoice Systems'
                    ]
                }
            ],
            experiance:[
                'C#',
                'SQL/PLSQL',
                'Delivery Management',
                'Version control using Harvest',
            ]
        }
    ],
    projects: projects,
    education: [
        {
            avatar:'https://eng.pdn.ac.lk/assets/images/crest.png',
            avatarAlt:'University Of Peradeniya',
            link: 'https://www.pdn.ac.lk/',
            time:'2013 - 2016',
            title:'University Of Peradeniya, Sri Lanka',
            description:'B.Sc (Hons) Engineering in Computer Engineering '
        }
    ]
}
export default content