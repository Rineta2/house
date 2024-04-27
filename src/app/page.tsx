import dynamic from "next/dynamic"

const Router = dynamic(() => import('@/Components/UI/Router/Router'), { ssr: false })

export default function page() {
  return (
    <Router />
  )
}
