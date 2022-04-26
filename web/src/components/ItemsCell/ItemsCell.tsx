import type { ItemsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ItemCell from 'src/components/ItemCell'
import { StoryWrap } from '../Item'
import Pagination from 'src/components/Pagination'
import { routes, useParams } from '@redwoodjs/router'

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

const PER_PAGE = 15
export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  const params = useParams()
  const now = parseInt(params?.page ?? '0', 10)
  return (
    <div>
      <ul>
        {items.slice(now * PER_PAGE, (now + 1) * PER_PAGE).map((item) => {
          return (
            <li key={item} className="my-3">
              <ItemCell id={item} Wrap={StoryWrap} />
            </li>
          )
        })}
      </ul>
      <Pagination
        now={now}
        count={items.length}
        gen={(page) => routes.home({ ...params, page })}
      />
    </div>
  )
}
