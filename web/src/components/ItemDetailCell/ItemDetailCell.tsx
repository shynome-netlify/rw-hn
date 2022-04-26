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
    <div className="">
      <article className="pb-4">
        <h1 className="px-2 text-2xl mb-4">{detail.title}</h1>
        <div
          className="px-2"
          dangerouslySetInnerHTML={{ __html: detail.text }}
        ></div>
      </article>
      <hr />
      <div className="py-4">
        <h3 className="text-xl">Comments:</h3>
        {(detail?.kids?.length ?? false) && (
          <ul className="py-2">
            {detail.kids.slice(0, 5).map((id) => {
              return (
                <li key={id}>
                  <ItemCell key={id} id={id} isComment />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
