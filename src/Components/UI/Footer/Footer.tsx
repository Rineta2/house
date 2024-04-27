import { useState, useEffect } from 'react'

import Logo from '@/Components/Assets/Logo/logo.png'

import Image from 'next/image'

import "@/Components/Sass/Footer.scss"

import { useTheme } from '@/Components/UI/Theme/Thema'

import Link from 'next/link'

import { FaArrowAltCircleUp } from 'react-icons/fa'

export default function Footer() {

  const [currentYear] = useState(new Date().getFullYear());

  const { isDarkMode } = useTheme();

  const [showArrow, setShowArrow] = useState<boolean>(false);

  const setArrowed = (): void => {
    if (window.scrollY > 0) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setArrowed);

    return () => {
      window.removeEventListener('scroll', setArrowed);
    };
  }, []);

  return (
    <>
      <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
        <div className="footer__container container grid">

          <div className="content">
            <Image src={Logo} alt="" />
            <p>Copyright © {currentYear}. By <Link href="https://rineta.io">rineta.io</Link></p>
          </div>

        </div>
      </footer>

      <div className={`top ${showArrow ? 'arrow' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <FaArrowAltCircleUp className='icon' />
      </div>
    </>
  )
}
