import { MetaTags } from '@redwoodjs/web'
import ItemDetailCell from 'src/components/ItemDetailCell'

const ItemPage = ({ id }) => {
  id = parseFloat(id)
  return (
    <>
      <MetaTags title="Item" description="Item page" />

      <ItemDetailCell id={id} />
    </>
  )
}

export default ItemPage
