import Home from '@/Components/Assets/Home/home.jpg'

import { GiBlockHouse } from "react-icons/gi";

import Management1 from '@/Components/Assets/Home/services1.jpg'
import Management2 from '@/Components/Assets/Home/services2.jpg'

import Penawaran1 from '@/Components/Assets/Home/featue1.jpg'
import Penawaran2 from '@/Components/Assets/Home/featur2.jpg'
import Penawaran3 from '@/Components/Assets/Home/feature3.jpg'

export const navLink = [
  {
    id: 1,
    name: "Beranda",
    path: "/",
  },

  {
    id: 2,
    name: "About",
    path: "/about",
  },

  {
    id: 3,
    name: "Services",
    path: "/services",
  },

  {
    id: 4,
    name: "Project",
    path: "/project",
  },

  {
    id: 5,
    name: "Team",
    path: "/team",
  }
]

export const homeIcons = [
  {
    title: "RINETA",
    icons: <GiBlockHouse />
  }
]

export const homeTitle = [
  {
    text: "Property Management System",
    date: "April 2024"
  }
]

export const homeData = [
  {
    img: Home
  }
]

export const headingManagement = [
  {
    id: 1,
    title: "Dedicated Management Services",
  },

  {
    id: 2,
    title: "What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention."
  }
]

export const imgManagement = [
  {
    id: 1,
    img: Management1,
  },
  {
    id: 2,
    img: Management2
  }
]

export const headingPenawaran = [
  {
    title: "What We Offer"
  }
]

export const dataPenawaran = [
  {
    id: 1,
    img: Penawaran1,
    title: "Property Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  },

  {
    id: 2,
    img: Penawaran2,
    title: "Long Term Rentals",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  },

  {
    id: 1,
    img: Penawaran3,
    title: "Property Maintenance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  },
]