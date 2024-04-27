'use client'

import { homeTitle, homeData, homeIcons } from '@/Components/UI/Data/Data'

import { useTheme } from '@/Components/UI/Theme/Thema';

import Image from 'next/image';

import '@/Components/Sass/Landing.scss'
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
                  <h3><i>{item.icons}</i>{item.title}</h3>
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
                <Image src={item.img} alt="" />
              </div>
            ))
          }

        </div>

      </div>

    </section >
  )
}
