import { IContent } from './interfaces/IContent';


export const content:IContent = {
    name: "Shanaka Abeysinghe",
    title: "Full Stack Engineer",
    aboutMe: "I am an accomplished Software Engineer with more than five years of industry experience. During that period, I have gained extensive knowledge and experience in Software Development, Testing, Deploying, and Delivery. Furthermore, I'm well versed in Requirement gathering, Client handling, Problem-solving, and Solution Designing.I consider myself a professional who believes Quality of Delivery and Customer Satisfaction are the keys to the success of a business. Therefore always strive to achieve that.I find joy in learning and problem solving and a bit of soccer as well.",
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
            time: '2019 - present',
            title: 'Full Stack Engineer - Project Basis - Five12Days',
            description: 'React | Typescript | Django | Django Rest Framework | GraphQl | AWS (S3/Amplify/Lambda/CodeArtifact) | C# | CI/CD | postgreSQL | Git | Figma',
            avatar: 'https://www.axcenze.com/images/logo2x.png',
            avatarAlt: 'Axcenze',
            link: 'https://www.axcenze.com/',
            responsibilities: [
                'UI/UX Design',
                'Software Development'
            ],
            projects: [
                {
                    description:'Insurance Claim Platform for Waratah Analytics (Work In Progress)',
                    details: [
                        'Built with a react Frontend and a Hasura Graphql Backend with Material UI as the design library',
                        'Few of the 3rd Party Integrations were handled through microservices deployed via AWS Lambda'
                    ]
                },
                {
                    description:'Booking Platform for Frolicz Familiy Hub, Australia (Work In Progress)',
                    details: [
                        'Responsible for the Frontend. Implemented using React with Material UI as the design library',
                        'Worked on debugging and issue fixing of the Backedn C# codebase'
                    ]
                },
            ]
        },
        {
            time: '2019 - present',
            title: 'Full Stack Engineer - Project Basis - Five12Days',
            description: 'React | Typescript | Django | Django Rest Framework | GraphQl | AWS (S3/Amplify/Lambda/CodeArtifact) | C# | CI/CD | postgreSQL | Git | Figma',
            avatar: 'https://www.axcenze.com/images/logo2x.png',
            avatarAlt: 'Axcenze',
            link: 'https://www.axcenze.com/'
        },
    ]
}

export default content