import type { FindSortsNavQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes, useParams } from '@redwoodjs/router'
import styles from './SortsNavCell.module.css'

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
  const nowSort = useParams()?.sort ?? sorts[0].id
  return (
    <ul className="flex space-x-4 text-xl py-4">
      {sorts.map((item) => {
        const ac = item.id == nowSort ? styles.active : ''
        return (
          <li key={item.id}>
            <Link
              className={`${styles.item} ${ac}`}
              to={routes.home({ sort: item.id })}
            >
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
