import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Help",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Track Order",
                path: "/"
            },
            {
                id: 3,
                link: "Cancel Order",
                path: "/"
            },
            {
                id: 4,
                link: "Return Order",
                path: "/"
            },
            {
                id: 5,
                link: "Warranty Info",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 1,
                link: "Return Policy",
                path: "/"
            },
            {
                id: 2,
                link: "Security",
                path: "/"
            },
            {
                id: 3,
                link: "Sitemap",
                path: "/"
            },
            {
                id: 4,
                link: "Privacy Policy",
                path: "/"
            },
            {
                id: 5,
                link: "Terms & Conditions",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "https://jeeshan77.github.io/Blog/about/"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "https://jeeshan77.github.io/Blog/about/"
            },
            {
                id: 3,
                link: "Service Centres",
                path: "/"
            },
            {
                id: 4,
                link: "Careers",
                path: "/"
            },
            {
                id: 5,
                link: "Affiliates",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaGithub />,
        path: "https://github.com/jeeshan77/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "https://x.com/jeeshan7704",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "https://www.instagram.com/jaanu_._.7",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/jeeshan-gosain/",
    },
];
