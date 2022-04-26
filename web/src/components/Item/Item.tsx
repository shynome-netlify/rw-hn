// import ItemCell from 'src/components/ItemCell'

import { Link, routes } from '@redwoodjs/router'
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

export const StoryItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <article>
      <header>
        <Link to={routes.item({ id: item.id })}>
          <h4>{item.title}</h4>
        </Link>
        <a href={item.url} target="_blank" rel="noreferrer">
          link
        </a>
      </header>
    </article>
  )
}

export const CommentItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
      {(item?.kids?.length ?? 0) > 0 && (
        <ul>
          {item.kids.slice(0, 5).map((id) => {
            return <ItemCell key={id} id={id} />
          })}
        </ul>
      )}
    </div>
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
