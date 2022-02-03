import { IContent } from './interfaces/IContent';
import { IProject } from './interfaces/IProject';

const projects:IProject[] = [
    {
        id: 1,
        title: 'Booking Management System',
        subtitle: 'In Progress',
        summary: [
            'A web application to handle bookings and prmote events for Frolicz Family Hub'
        ],
        techStack: 'React | C# | AWS Amplify | Azure Functions',
        image: 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/frolicz.png',
        link: 'https://www.frolicz.com.au/'
    },
    {
        id: 2,
        title: 'Insurance Application Management System',
        subtitle: 'In Progress',
        summary: [
            'A web application to handle bookings and prmote events for Frolicz Family Hub'
        ],
        techStack: 'React | Express | Graphql | AWS Lambda | Python',
        image: '',
        link: '#'
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
        link: '#'
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
            score: 89
        },
        {
            label: 'Django',
            score: 80
        },
        {
            label: 'AWS (S3/Amplify/Lambda)',
            score: 67
        },
        {
            label: 'Typescript',
            score: 75
        },
        {
            label: 'Django Rest Framework',
            score: 76
        },
        {
            label: 'Version Control Systems ( git / SVN) ',
            score: 70
        },
        {
            label: 'Figma',
            score: 60
        },
        {
            label: 'Python',
            score: 65
        },
        {
            label: 'SQL / PLSQL',
            score: 89
        },
        {
            label: 'NodeJS',
            score: 85
        },
        {
            label: 'GraphQL',
            score: 86
        },
        {
            label: 'ERP (IFS Applications)',
            score: 95
        },
        {
            label: 'C#',
            score: 75
        }
    ],
    workHistory: [
        {
            time: '2019 - Present',
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