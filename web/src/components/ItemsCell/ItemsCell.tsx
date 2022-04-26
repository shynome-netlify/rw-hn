import type { ItemsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ItemCell from 'src/components/ItemCell'

export const QUERY = gql`
  query ItemsQuery($sort: String!) {
    items(sort: $sort)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  return (
    <ul>
      {items.slice(0, 30).map((item) => {
        return (
          <li key={item} className="my-3">
            <ItemCell id={item} />
          </li>
        )
      })}
    </ul>
  )
}
