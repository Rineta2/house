import { Fragment } from 'react'

import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/Components/UI/Home'), { ssr: false })
const Form = dynamic(() => import('@/Components/UI/Form'), { ssr: false })
const Management = dynamic(() => import('@/Components/UI/Management'), { ssr: false })
const Featured = dynamic(() => import('@/Components/UI/Featured'), { ssr: false })
const Questions = dynamic(() => import('@/Components/UI/Questions'), { ssr: false })
const Client = dynamic(() => import('@/Components/UI/Client'), { ssr: false })
const Kontak = dynamic(() => import('@/Components/UI/Kontak'), { ssr: false })
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
        <Client />
        <hr className="hr" />
        <Kontak />
      </main>
    </Fragment>
  )
}
