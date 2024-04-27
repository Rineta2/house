'use client'

import { headingClient, dataClient } from '@/Components/UI/Data/Data'

import { useTheme } from '@/Components/UI/Theme/Thema'

import '@/Components/Sass/Landing.scss'

export default function Client() {

  const { isDarkMode } = useTheme();

  return (
    <section className={`client ${isDarkMode ? "dark" : "light"}`}>
      <div className={"client__container container grid"}>

        {
          headingClient.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
            </div>
          ))
        }

        <div className="content">
          {
            dataClient.map((item) => (
              <div className="box" key={item.id}>
                <i>{item.icons}</i>
                <h3>{item.desc}</h3>
                <span>{item.name}</span>
                <div className="row"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
