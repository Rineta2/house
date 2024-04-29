'use client'
import { teamHeading, dataTeam } from '@/Components/UI/Data/Data'

import Image from 'next/image'

import '@/Components/Sass/Page.scss'

import { useTheme } from '@/Components/UI/Theme/Thema';

import { Zoom, Fade } from 'react-awesome-reveal'

export default function Team() {

  const { isDarkMode } = useTheme();

  return (
    <section className="team">

      <div className={`team__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          teamHeading.map((item) => (
            <div className="heading">
              <Fade direction='down' duration={1000} delay={500} triggerOnce>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="team__box">

          {
            dataTeam.map((item) => (
              <div className="box" key={item.id}>

                <div className="img">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <Image src={item.img} alt="team" />
                  </Zoom>
                </div>

                <div className="text">
                  <Fade direction='down' duration={1000} delay={500} triggerOnce>
                    <h2>{item.name}</h2>
                  </Fade>

                  <Fade direction='up' duration={1000} delay={500} triggerOnce>
                    <p>{item.text}</p>
                  </Fade>
                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}
