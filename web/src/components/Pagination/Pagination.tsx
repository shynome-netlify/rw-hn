import { Link } from '@redwoodjs/router'
import styles from './Pagination.module.css'

type PaginationProps = {
  now: number
  count: number
  gen: (page: number) => string
  per_page?: number
  display_pages?: number
}

function getPages(now: number, end_page: number, cap: number): number[] {
  let maybeList = []
  for (let i = now - cap; i < now + cap; i++) {
    maybeList.push(i)
  }
  maybeList = maybeList.filter((n) => n >= 0 && n <= end_page)

  const nowIndex = maybeList.indexOf(now)
  if (nowIndex === 0) {
    return maybeList.slice(0, cap)
  }
  if (maybeList.length <= cap) {
    return maybeList
  }

  const lastIndex = maybeList.length - 1
  let [a, b] = [nowIndex, nowIndex]
  const arr = [nowIndex]
  while (arr.length < cap) {
    a = a - 1
    b = b + 1
    if (a >= 0) {
      arr.unshift(a)
    }
    if (b <= lastIndex) {
      arr.push(b)
    }
  }
  const result = arr.map((i) => maybeList[i])

  return result
}

const Pagination: React.FC<PaginationProps> = ({
  now,
  count,
  gen,
  per_page = 15,
  display_pages = 5,
}) => {
  const end_page = Math.floor(count / per_page)
  const pages = getPages(now, end_page, display_pages)

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
