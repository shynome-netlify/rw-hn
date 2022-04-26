import { Link } from '@redwoodjs/router'
import styles from './Pagination.module.css'

type PaginationProps = {
  now: number
  count: number
  gen: (page: number) => string
  per_page?: number
  display_pages?: number
}

const Pagination: React.FC<PaginationProps> = ({
  now,
  count,
  gen,
  per_page = 15,
  display_pages = 5,
}) => {
  const end_page = Math.ceil(count / per_page)
  const pages = [0, 1, 2, 3, 4]
  return (
    <div className={`flex space-x-4 ${styles.root}`}>
      <Link to={gen(0)}>{'<<'}</Link>
      <Link to={gen(now - 1)}>{'<'}</Link>
      {pages.map((page) => {
        const ac = page == now ? styles.active : ''
        return (
          <Link className={`${ac}`} key={page} to={gen(page)}>
            {page + 1}
          </Link>
        )
      })}
      <Link to={gen(now + 1)}>{'>'}</Link>
      <Link to={gen(end_page)}>{'>>'}</Link>
    </div>
  )
}

export default Pagination
