'use client'

import { headingClient, dataClient } from '@/Components/UI/Data/Data'

import { useTheme } from '@/Components/UI/Theme/Thema'

import '@/Components/Sass/Landing.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Client() {

  const { isDarkMode } = useTheme();

  return (
    <section className={`client ${isDarkMode ? "dark" : "light"}`}>
      <div className={"client__container container grid"}>

        {
          headingClient.map((item) => (
            <div className="heading">
              <Fade direction='left' duration={1000} delay={500} triggerOnce>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="content">
          {
            dataClient.map((item) => (
              <div className="box" key={item.id}>
                <Fade direction='down' duration={1000} delay={500} triggerOnce>
                  <i>{item.icons}</i>
                </Fade>

                <Zoom duration={1000} delay={500} triggerOnce>
                  <h3>{item.desc}</h3>
                </Zoom>

                <Fade direction='up' duration={1000} delay={500} triggerOnce>
                  <span>{item.name}</span>
                </Fade>

                <div className="row"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
