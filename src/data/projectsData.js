import image_globi from '../assets/svg/projects/image_globi.png'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import eleven from '../assets/svg/projects/eleven.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Globiexplore',
        projectDesc: 'This project is about a social media app for travellers.',
        tags: ['TypeScript', 'NextJs', 'Tailwind', 'StreamChat', 'Docker', 'Kubernetes', 'UploadThing', 'Prisma', 'Postgessql'],
        code: '#',
        demo: 'https://globi1-sable.vercel.app/',
        image: image_globi
    },
    {
        id: 3,
        projectName: 'KNERDS',
        projectDesc: 'This project is an Online Learning System Management. I designed it to help people access free courses on line on different topics',
        tags: ['React', 'SAAS', 'React Bootstrap'],
        code: 'https://github.com/GedeonMatabaro/KNERDS/tree/master',
        // demo: 'https://gdi1wr-5173.csb.app/',
        demo:'https://pjrsbk-5173.csb.app/',
        image: six
    },
    {
        id: 2,
        projectName: 'KAZEABROAD',
        projectDesc: 'This is the first website I designed for KazeAbroad, an Agency based on education.',
        tags: ['HTML', 'Php', 'Bootstrap', 'Css'],
        code: '#',
        demo: 'https://kazeabroad.com/',
        image: seven
    },
    {
        id: 4,
        projectName: 'Globiexplore-CountDown',
        projectDesc: 'This project about a social media app for travellers. The count down site',
        tags: ['TypeScript', 'NextJs', 'Tailwind', ],
        code: '#',
        demo: 'globi-comming-soon.vercel.app',
        image: eleven
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/