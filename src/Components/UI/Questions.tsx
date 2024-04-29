'use client'

import { headingQuestion, dataQuestion } from "@/Components/UI/Data/Data"

import { useTheme } from "@/Components/UI/Theme/Thema"

import { Fade } from 'react-awesome-reveal'

export default function Questions() {

  const { isDarkMode } = useTheme();

  return (
    <section className="questions">

      <div className={`question__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          headingQuestion.map((item) => (
            <div className="heading">
              <Fade direction='left' duration={1000} delay={500} triggerOnce>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="content">
          {
            dataQuestion.map((item) => (
              <div className="box" key={item.id}>
                <Fade direction='down' duration={1000} delay={100} triggerOnce>
                  <h2>{item.title}</h2>
                </Fade>

                <Fade direction='up' duration={1000} delay={100} triggerOnce>
                  <p>{item.text}</p>
                </Fade>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
