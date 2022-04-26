import { MetaTags } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell'

const HomePage = ({ sort }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ItemsCell sort={sort} />
    </>
  )
}

export default HomePage
