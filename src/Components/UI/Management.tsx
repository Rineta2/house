'use client'
import { headingManagement, imgManagement } from '@/Components/UI/Data/Data'

import Image from 'next/image'

import "@/Components/Sass/Landing.scss"

import { useTheme } from '@/Components/UI/Theme/Thema';
export default function Management() {

  const { isDarkMode } = useTheme();

  return (
    <section className="management">

      <div className={`management__container container grid ${isDarkMode ? "dark" : "light"}`}>

        <div className="heading">
          {
            headingManagement.map((item) => (
              <div className="management__title">
                <h2>{item.title}</h2>
              </div>
            ))
          }
        </div>

        <div className="management__img">
          {
            imgManagement.map((item) => (
              <div className="img">
                <Image src={item.img} alt="" />
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
