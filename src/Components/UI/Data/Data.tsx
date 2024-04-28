import Home from '@/Components/Assets/Home/home.jpg'

import { GiBlockHouse } from "react-icons/gi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Management1 from '@/Components/Assets/Home/services1.jpg'
import Management2 from '@/Components/Assets/Home/services2.jpg'

import Penawaran1 from '@/Components/Assets/Home/featue1.jpg'
import Penawaran2 from '@/Components/Assets/Home/featur2.jpg'
import Penawaran3 from '@/Components/Assets/Home/feature3.jpg'

import Kontak from '@/Components/Assets/Home/kontak.jpg'

import About1 from '@/Components/Assets/About/about.jpg'
import About2 from '@/Components/Assets/About/about2.jpg'

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
    name: "Gallery",
    path: "/gallery",
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

export const headingQuestion = [
  {
    title: "Frequently Asked Questions"
  }
]

export const dataQuestion = [
  {
    id: 1,
    title: "How to contact us?",
    text: "Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users."
  },

  {
    id: 2,
    title: "How to contact us?",
    text: "Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users."
  },

  {
    id: 3,
    title: "How to contact us?",
    text: "Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users."
  }
]

export const headingClient = [
  {
    title: "Our Clients"
  }
]

export const dataClient = [
  {
    id: 1,
    icons: <TfiCommentsSmiley />,
    desc: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    name: "John Doe",
  },

  {
    id: 2,
    icons: <TfiCommentsSmiley />,
    desc: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    name: "Steven Doe",
  },

  {
    id: 3,
    icons: <TfiCommentsSmiley />,
    desc: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    name: "Jane Doe",
  },
]

export const kontakHeading = [
  {
    title: "Contact US"
  }
]

export const dataKontak = [
  {
    id: 1,
    title: "Phone",
    desc: "+62 813-9863-2939",
    path: "tel:+6281398632939"
  },

  {
    id: 2,
    title: "Email",
    desc: "rinetastore@gmail.com",
    path: "mailto:rinetastore@gmail.com"
  },
]

export const socialKontak = [
  {
    id: 1,
    icons: <FaFacebookF />,
    path: "https://www.facebook.com/profile.php?id=100007663247764&locale=id_ID"
  },

  {
    id: 2,
    icons: <FaInstagram />,
    path: "https://www.instagram.com/rineta.io/"
  },

  {
    id: 3,
    icons: <FaWhatsapp />,
    path: "https://wa.me/+6281398632939"
  },
]

export const imgKontak = [
  {
    img: Kontak
  }
]

export const aboutHeading = [
  {
    title: "About Us",
    text: "FOX GROUP is the leading retail group with an ever-growing portfolio of partnerships with homegrown and global fashion & lifestyle brands With our constant drive, more than 1000 stores worldwide, online capabilities, complete supply chain resources, solid financial status (listed on TASE), and the most extensive loyalty program membership in Israel,we see only opportunities on every horizon."
  }
]

export const dataAbout = [
  {
    id: 1,
    img: About1
  },

  {
    id: 2,
    img: About2
  },
]

export const penawaran = [
  {
    id: 1,
    title: "OUR VISION",
    text: "To be the leading retailer in every category and every territory we operate in."
  },

  {
    id: 2,
    title: "STRATEGY",
    text: "Fox Group’s retail leadership is built on an extraordinary history of anticipating trends, logistical excellence, and a win-win approach to our brand portfolio partners and customers. Our strategy is to build on this infrastructure to focus on further global expansion, lead through tech & Innovation and leverage our track record of outstanding execution"
  },
]