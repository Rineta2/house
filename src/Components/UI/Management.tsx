'use client'
import { headingManagement, imgManagement } from '@/Components/UI/Data/Data'

import Image from 'next/image'

import "@/Components/Sass/Landing.scss"

import { useTheme } from '@/Components/UI/Theme/Thema';

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Management() {

  const { isDarkMode } = useTheme();

  return (
    <section className="management">

      <div className={`management__container container grid ${isDarkMode ? "dark" : "light"}`}>

        <div className="heading">
          {
            headingManagement.map((item) => (
              <div className="management__title">
                <Fade direction='down' duration={1000} delay={100} triggerOnce>
                  <h2>{item.title}</h2>
                </Fade>
              </div>
            ))
          }
        </div>

        <div className="management__img">
          {
            imgManagement.map((item) => (
              <div className="img">
                <Zoom duration={1000} delay={100} triggerOnce>
                  <Image src={item.img} alt="" />
                </Zoom>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
