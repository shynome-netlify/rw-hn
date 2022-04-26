// import ItemCell from 'src/components/ItemCell'

import { Link, routes, useParams } from '@redwoodjs/router'
import type { Item as ItemType } from 'types/graphql'
import ItemCell from 'src/components/ItemCell'

type ItemProps = { item: ItemType }

const Item: React.FC<ItemProps> = (props) => {
  switch (props.item.type) {
    default:
    case 'story':
      return <StoryItem {...props} />
    case 'comment':
      return <CommentItem {...props} />
  }
}
export const StoryWrap: React.FC = (props) => {
  return <div className="bg-gray-200 p-4">{props.children}</div>
}
export const StoryItem: React.FC<ItemProps> = ({ item }) => {
  const sort = useParams()?.sort
  const commentCount = item?.kids?.length ?? 0
  return (
    <StoryWrap>
      <article>
        <header>
          <Link to={routes.item({ id: item.id, sort: sort })}>
            <h4>
              {item.title}
              <span
                className="p-1 bg-black text-white rounded-full inline-block w-6 h-6 leading-4 text-center text-sm mx-2"
                title={commentCount.toString()}
              >
                {commentCount > 99 ? '99' : commentCount}
              </span>
            </h4>
          </Link>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="hidden"
          >
            link
          </a>
        </header>
      </article>
    </StoryWrap>
  )
}

export const CommentWrap: React.FC = (props) => {
  return (
    <div
      className="pl-3 pr-2 pt-3 pb-2 mt-3 border-l-2 border-gray-300"
      style={{ backgroundColor: 'rgba(200,200,200,0.2)' }}
    >
      {props.children}
    </div>
  )
}
export const CommentItem: React.FC<ItemProps> = ({ item, Wrap }) => {
  if (item.text === null) {
    return null
  }
  return (
    <CommentWrap>
      <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
      {(item?.kids?.length ?? 0) > 0 && (
        <ul>
          {item.kids.slice(0, 5).map((id) => {
            return <ItemCell key={id} id={id} Wrap={CommentWrap} />
          })}
        </ul>
      )}
    </CommentWrap>
  )
}

export const AskItem: React.FC<ItemProps> = (props) => {
  return <StoryItem {...props} />
}

export const JobItem: React.FC<ItemProps> = (props) => {
  return <StoryItem {...props} />
}

export const PollItem: React.FC<ItemProps> = (props) => {
  return <StoryItem {...props} />
}
export const PolloptItem: React.FC<ItemProps> = (_props) => {
  return <div>pollopt</div>
}

export default Item
