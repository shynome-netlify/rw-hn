import { MetaTags } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ItemsCell></ItemsCell>
    </>
  )
}

export default HomePage
