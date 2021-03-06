import type { FindItemQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Item from 'src/components/Item'

export const QUERY = gql`
  query FindItemQuery($id: Int!) {
    item: item(id: $id) {
      id
      deleted
      type
      by
      time
      text
      dead
      parent
      poll
      kids
      url
      score
      title
      parts
      descendants
    }
  }
`

export const Loading = ({ Wrap }) => {
  if (Wrap) {
    return <Wrap>Loading...</Wrap>
  }
  return <div>Loading...</div>
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ item }: CellSuccessProps<FindItemQuery>) => {
  return <Item item={item} />
}
