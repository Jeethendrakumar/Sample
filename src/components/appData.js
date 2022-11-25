import {
  faSignOut,
  faUser,
  faGear,
  faLock,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";


export const profileList = {
  profile: {
    link: "/profile",
    icon: faUser,
    label: "My Profile",
  },
  setting: {
    link: "/setting",
    icon: faGear,
    label: "Settings",
  },
  privacy: {
    link: "/",
    icon: faLock,
    label: "Privacy",
  },
  manage: {
    link: "/",
    icon: faUserGear,
    label: "Manage Account",
  },
};

export const menu = [
  {
    home: {
      link: "/",
      label: "Home",
    },
  },
  {
    products: {
      link: "/products",
      label: "Products",
    },
  },
  {
    services: {
      link: "/services",
      label: "Services",
    },
  },
  {
    about: {
      link: "/about",
      label: "About Us",
    },
  },
  {
    support: {
      link: "/contact",
      label: "Support",
    },
  },
];