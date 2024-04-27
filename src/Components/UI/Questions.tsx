'use client'

import { headingQuestion, dataQuestion } from "@/Components/UI/Data/Data"

import { useTheme } from "@/Components/UI/Theme/Thema"

export default function Questions() {

  const { isDarkMode } = useTheme();

  return (
    <section className="questions">

      <div className={`question__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          headingQuestion.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
            </div>
          ))
        }

        <div className="content">
          {
            dataQuestion.map((item) => (
              <div className="box" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
