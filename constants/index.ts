import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";
import youtube from "../public/youtube.svg";
import AppStore from "../public/app.jpg";
import GooglrPlay from "../public/play.jpg";

export const NavLinks = [
    { name: "HOME", href: "/" },
    { name: "MEN", href: "/MEN" },
    { name: "WOMEN", href: "/WOMEN" },
    { name: "KIDS", href: "/KIDS" },
];

export const HeroLinks = [
    { name: "MEN", href: "/MEN" },
    { name: "WOMEN", href: "/WOMEN" },
    { name: "KIDS", href: "/KIDS" },
];


export const FooterSocials = [
    facebook,
    instagram,
    twitter,
    youtube,
]

export const FooterInstallApp = [
    AppStore,
    GooglrPlay,

]

export const FooterLinks = [
    {
        title: 'About',
        links: [
            { name: "About Us", href: "/" },
            { name: "Delivery Information", href: "/" },
            { name: "Privacy Policy", href: "/" },
            { name: "Terms & Conditions", href: "/" },
            { name: "Contact Us", href: "/" },
        ]
    },
    {
        title: 'Links',
        links: [
            { name: "HOME", href: "/" },
            { name: "MEN", href: "/MEN" },
            { name: "WOMEN", href: "/WOMEN" },
            { name: "KIDS", href: "/KIDS" },
            { name: "ALL", href: "/all" },
        ]
    }

]



