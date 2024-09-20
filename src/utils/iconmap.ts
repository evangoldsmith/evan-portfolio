// Map of icons and links for technologies

interface SkillInfo {
    icon: string;
    link: string;
}

const iconMap: { [key: string]: SkillInfo } = {
    'Python': {
        icon: 'fa-brands fa-python',
        link: 'https://www.python.org/'
    },
    'Javascript': {
        icon: 'fa-brands fa-js-square',
        link: 'https://www.javascript.com/'
    },
    'Java': {
        icon: 'fa-brands fa-java',
        link: 'https://www.java.com/'
    },
    'React': {
        icon: 'fa-brands fa-react',
        link: 'https://reactjs.org/'
    },
    'Docker': {
        icon: 'fa-brands fa-docker',
        link: 'https://www.docker.com/'
    },
    'Flask': {
        icon: 'devicon-flask-original',
        link: 'https://flask.palletsprojects.com/en/3.0.x/'
    },
    'Tailwind CSS': {
        icon: 'fa-brands fa-css3-alt',
        link: 'https://tailwindcss.com/'
    },
    'Django': {
        icon: 'devicon-django-plain',
        link: 'https://www.djangoproject.com/'
    },
    'MySQL': {
        icon: 'devicon-mysql-original',
        link: 'https://www.mysql.com/'
    },
    'MongoDB': {
        icon: 'devicon-mongodb-plain',
        link: 'https://www.mongodb.com/'
    },
    'Vue.js': {
        icon: 'devicon-vuejs-plain',
        link: 'https://vuejs.org/'
    },
    'Express': {
        icon: 'devicon-express-original',
        link: 'https://expressjs.com/'
    },
    'Node.js': {
        icon: 'devicon-nodejs-plain',
        link: 'https://nodejs.org/'
    },
    'PostgreSQL': {
        icon: 'devicon-postgresql-plain',
        link: 'https://www.postgresql.org/'
    },
    'TypeScript': {
        icon: 'devicon-typescript-plain',
        link: 'https://www.typescriptlang.org/'
    },
    'Tailwind': {
        icon: 'devicon-tailwindcss-plain',
        link: 'https://tailwindcss.com/'
    },
    'Google Cloud': {
        icon: 'devicon-googlecloud-plain',
        link: 'https://cloud.google.com/'
    },
    'AWS': {
        icon: 'devicon-amazonwebservices-plain-wordmark',
        link: 'https://aws.amazon.com/'
    },
    'Astro': {
        icon: 'devicon-astro-plain',
        link: 'https://astro.build/'
    },
    'Go': {
        icon: 'devicon-go-plain',
        link: 'https://go.dev/'
    },
    'Terraform': {
        icon: 'devicon-terraform-plain',
        link: 'https://www.terraform.io/'
    },
};

export { iconMap };