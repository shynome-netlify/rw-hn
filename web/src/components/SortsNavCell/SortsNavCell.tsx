import type { FindSortsNavQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindSortsNavQuery {
    sorts {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ sorts }: CellSuccessProps<FindSortsNavQuery>) => {
  return (
    <ul>
      {sorts.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.home({ sort: item.id })}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
