'use client'

import { homeTitle, homeData, homeIcons } from '@/Components/UI/Data/Data'

import { useTheme } from '@/Components/UI/Theme/Thema';

import Image from 'next/image';

import '@/Components/Sass/Landing.scss'

import { Zoom, Fade } from 'react-awesome-reveal'

export default function Home() {

  const { isDarkMode } = useTheme();

  return (
    <section className="home">

      <div className={`home__container container grid ${isDarkMode ? "dark" : "light"}`}>

        <div className="home__data">

          <div className="home__text">
            {
              homeIcons.map((item) => (
                <div className="home__icons">
                  <Fade direction='down' duration={1000} delay={100} triggerOnce>
                    <h3><i>{item.icons}</i>{item.title}</h3>
                  </Fade>
                </div>
              ))
            }

            {
              homeTitle.map((item) => (
                <div className="home__title">
                  <h1>{item.text}</h1>
                  <span>{item.date}</span>
                </div>
              ))
            }
          </div>

          {
            homeData.map((item) => (
              <div className="home__img">
                <Fade duration={1000} delay={100} triggerOnce>
                  <Image src={item.img} alt="" />
                </Fade>
              </div>
            ))
          }

        </div>

      </div>

    </section >
  )
}
