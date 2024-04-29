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

import img1 from '@/Components/Assets/Gallery/img1.jpg'
import img2 from '@/Components/Assets/Gallery/img2.jpg'
import img3 from '@/Components/Assets/Gallery/img3.jpg'
import img4 from '@/Components/Assets/Gallery/img4.jpg'
import img5 from '@/Components/Assets/Gallery/img5.jpg'
import img6 from '@/Components/Assets/Gallery/img6.jpg'
import img7 from '@/Components/Assets/Gallery/img7.jpg'
import img8 from '@/Components/Assets/Gallery/img8.jpg'
import img9 from '@/Components/Assets/Gallery/img9.jpg'
import img10 from '@/Components/Assets/Gallery/img10.jpg'
import img11 from '@/Components/Assets/Gallery/img11.jpg'
import img12 from '@/Components/Assets/Gallery/img12.jpg'

import prof1 from '@/Components/Assets/Team/prof1.jpg'
import prof2 from '@/Components/Assets/Team/prof2.jpg'
import prof3 from '@/Components/Assets/Team/prof3.jpg'

import NotFound from '@/Components/Assets/404/404.svg'

export const navLink = [
  {
    id: 1,
    name: "Beranda",
    path: "/",
  },

  {
    id: 2,
    name: "Tentang Kami",
    path: "/about",
  },

  {
    id: 3,
    name: "Gallery Kami",
    path: "/gallery",
  },

  {
    id: 4,
    name: "Tim Kami",
    path: "/team",
  }
]

export const homeIcons = [
  {
    title: "Refined Elegance",
    icons: <GiBlockHouse />
  }
]

export const homeTitle = [
  {
    text: "Sistem Manajemen Properti",
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
    title: "Layanan Manajemen Khusus",
  },

  {
    id: 2,
    title: "Menawarkan pengelolaan properti yang efisien dan tanpa repot, memastikan rumah Anda selalu dalam kondisi prima. Dari pemeliharaan rutin hingga renovasi canggih, kami mengatur segalanya dengan keahlian untuk meningkatkan kenyamanan dan nilai investasi Anda. Ideal untuk mereka yang menghargai kemudahan dan kedamaian pikiran dalam manajemen properti."
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
    title: "Apa Yang Kita Tawarkan"
  }
]

export const dataPenawaran = [
  {
    id: 1,
    img: Penawaran1,
    title: "Solusi Manajemen Properti Rumah",
    desc: "Menawarkan pengelolaan lengkap untuk meningkatkan kenyamanan dan nilai rumah Anda, semuanya dengan kemudahan dan profesionalisme."
  },

  {
    id: 2,
    img: Penawaran2,
    title: "Optimalisasi Properti Rumah",
    desc: "Fokus pada kehidupan Anda, sementara kami mengoptimalkan rumah Anda. Dengan layanan manajemen properti terintegrasi, kami meningkatkan nilai dan kenyamanan rumah Anda secara profesional dan efektif."
  },

  {
    id: 1,
    img: Penawaran3,
    title: "Servis Manajemen Rumah",
    desc: "Atur rumah Anda tanpa kerumitan dengan servis manajemen yang mengurus segalanya—dari pemeliharaan reguler hingga upgrade strategis. Dapatkan ketenangan pikiran dengan rumah yang selalu dalam kondisi terbaik."
  },
]

export const headingQuestion = [
  {
    title: "Pertanyaan Yang Sering Diajukan ?"
  }
]

export const dataQuestion = [
  {
    id: 1,
    title: "FAQ Layanan Rumah?",
    text: "Menyediakan semua yang Anda butuhkan untuk mengelola dan memelihara rumah Anda dengan efektif. Temukan tips keamanan, strategi pemeliharaan, dan saran peningkatan untuk menjaga dan meningkatkan nilai properti Anda dengan mudah."
  },

  {
    id: 2,
    title: "Buku Panduan Esensial Pemilik Rumah?",
    text: "Temukan cara-cara cerdas untuk mengelola dan meningkatkan rumah Anda dengan panduan ini, yang mencakup tips pemeliharaan dan peningkatan yang praktis dan efektif."
  },

  {
    id: 3,
    title: "Panduan Pemeliharaan dan Peningkatan Rumah Anda?",
    text: "Dari pemeliharaan dasar hingga proyek peningkatan rumah, panduan praktis ini menyediakan instruksi terperinci untuk menjaga dan meningkatkan rumah Anda dengan mudah."
  }
]

export const headingClient = [
  {
    title: "Klien Kami"
  }
]

export const dataClient = [
  {
    id: 1,
    icons: <TfiCommentsSmiley />,
    desc: "Luar biasa! Refined Elegance menjaga segala pemeliharaan dengan cepat dan profesional. Merekomendasikan layanan ini kepada siapa saja yang membutuhkan bantuan manajemen properti yang handal!",
    name: "John Doe",
  },

  {
    id: 2,
    icons: <TfiCommentsSmiley />,
    desc: "Sangat puas! Dengan Refined Elegance, saya tidak perlu lagi repot memikirkan pemeliharaan. Tim mereka efisien dan sangat membantu, membuat hidup saya jauh lebih mudah.",
    name: "Steven Doe",
  },

  {
    id: 3,
    icons: <TfiCommentsSmiley />,
    desc: "Fantastis! Refined Elegance telah membebaskan saya dari kekhawatiran pemeliharaan rumah. Mereka responsif dan detail, memberikan hasil yang selalu melebihi ekspektasi. Sangat direkomendasikan!",
    name: "Jane Doe",
  },
]

export const kontakHeading = [
  {
    title: "Kontak Kami"
  }
]

export const dataKontak = [
  {
    id: 1,
    title: "Whatsapp",
    desc: "+62 813-9863-2939",
    path: "https://wa.me/+6281398632939"
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
    title: "Tentang kami",
    text: "Refined Elegance adalah studio desain interior yang mengkombinasikan keanggunan modern dengan fungsionalitas tinggi untuk menciptakan ruang yang tidak hanya indah tetapi juga nyaman. Dengan penekanan pada material berkualitas dan palet warna yang sofistikat, setiap ruang yang kami rancang adalah manifestasi dari kemewahan yang sederhana dan elegan, diimbangi dengan kenyamanan dan kepraktisan untuk kehidupan sehari-hari. Ideal bagi mereka yang menghargai desain yang bijaksana dan lingkungan yang inspiratif."
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
    title: "VISI KAMI",
    text: "Kami bertujuan menjadi pemimpin industri dalam manajemen properti yang inovatif dan berkelanjutan, menciptakan lingkungan yang nyaman, aman, dan efisien. Dengan menggunakan teknologi canggih dan praktik terbaik, kami berkomitmen meningkatkan kualitas hidup dan membangun hubungan berkelanjutan dengan klien, fokus pada kepuasan dan keberlanjutan."
  },

  {
    id: 2,
    title: "STRATEGI",
    text: "Strategi kami mengutamakan inovasi dan efisiensi, dengan memanfaatkan teknologi terbaru untuk memperbaiki layanan manajemen properti. Kami fokus pada pelatihan tim yang komprehensif, kemitraan dengan penyedia layanan terkemuka, dan penyesuaian layanan yang sesuai dengan kebutuhan klien. Tujuan kami adalah melampaui ekspektasi pelanggan, mendorong pertumbuhan berkelanjutan, dan memperkuat posisi kami di pasar"
  },
]

export const galleryHeading = [
  {
    title: "Galeri kami"
  }
]

export const dataGallery = [
  {
    id: 1,
    img: img1
  },

  {
    id: 2,
    img: img2
  },

  {
    id: 3,
    img: img3
  },

  {
    id: 4,
    img: img4
  },

  {
    id: 5,
    img: img5
  },

  {
    id: 6,
    img: img6
  },

  {
    id: 7,
    img: img7
  },

  {
    id: 8,
    img: img8
  },

  {
    id: 9,
    img: img9
  },

  {
    id: 10,
    img: img10
  },

  {
    id: 11,
    img: img11
  },

  {
    id: 12,
    img: img12
  },
]

export const teamHeading = [
  {
    title: "Team Proffesional Kami"
  }
]

export const dataTeam = [
  {
    id: 1,
    img: prof1,
    name: "Daffa Fauzi",
    text: "Ketua Umum"
  },

  {
    id: 2,
    img: prof2,
    name: "Daffa Fauzi",
    text: "Ketua Umum"
  },

  {
    id: 3,
    img: prof3,
    name: "Daffa Fauzi",
    text: "Ketua Umum"
  },
]

export const notFoundData = [
  {
    img: NotFound,
    text: "Halaman tidak ditemukan :(",
    btn: "Kembali ke Beranda",
    path: "/"
  }
]