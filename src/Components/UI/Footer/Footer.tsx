import { useState, useEffect } from 'react'

import Logo from '@/Components/Assets/Logo/Footer.png'

import Image from 'next/image'

import "@/Components/Sass/Footer.scss"

import { useTheme } from '@/Components/UI/Theme/Thema'

import Link from 'next/link'

import { FaArrowAltCircleUp } from 'react-icons/fa'

import { Fade, Zoom } from 'react-awesome-reveal'

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
            <Zoom duration={1000} delay={100} triggerOnce>
              <Image src={Logo} alt="" />
            </Zoom>

            <Fade direction='up' duration={1000} delay={100} triggerOnce>
              <p>Copyright © {currentYear}. By <Link href="https://rineta.io">rineta.io</Link></p>
            </Fade>
          </div>

        </div>
      </footer>

      <div className={`top ${showArrow ? 'arrow' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <FaArrowAltCircleUp className='icon' />
      </div>
    </>
  )
}
