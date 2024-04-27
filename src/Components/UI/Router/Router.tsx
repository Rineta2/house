import { Fragment } from 'react'

import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/Components/UI/Home'), { ssr: false })
const Form = dynamic(() => import('@/Components/UI/Form'), { ssr: false })
const Management = dynamic(() => import('@/Components/UI/Management'), { ssr: false })
const Featured = dynamic(() => import('@/Components/UI/Featured'), { ssr: false })
const Questions = dynamic(() => import('@/Components/UI/Questions'), { ssr: false })

import "@/Components/Sass/Landing.scss"

export default function Router() {
  return (
    <Fragment>
      <main>
        <Home />
        <Form />
        <hr className="hr" />
        <Management />
        <Featured />
        <Questions />
      </main>
    </Fragment>
  )
}
