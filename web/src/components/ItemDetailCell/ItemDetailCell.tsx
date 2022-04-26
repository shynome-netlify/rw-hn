import type { FindItemQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ItemCell from '../ItemCell'
import { QUERY as ItemQuery } from 'src/components/ItemCell/ItemCell'

export const QUERY = ItemQuery

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ item: detail }: CellSuccessProps<FindItemQuery>) => {
  return (
    <>
      <article>
        <h1>{detail.title}</h1>
        <div>{detail.text}</div>
      </article>
      {detail.kids.slice(0, 5).map((id) => {
        return <ItemCell key={id} id={id} />
      })}
    </>
  )
}
