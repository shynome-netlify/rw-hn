import { Sort } from 'types/graphql'
import fetch from 'node-fetch'

/**
 * @link https://github.com/HackerNews/API
 */
const HN_Base = 'https://hacker-news.firebaseio.com/v0'

export const Sorts: Sort[] = [
  { title: 'Top', id: 'topstories' },
  { title: 'News', id: 'newstories' },
  { title: 'Best', id: 'beststories' },
  { title: 'Ask', id: 'askstories' },
  { title: 'Job', id: 'jobstories' },
  { title: 'All', id: 'showstories' },
]

export const getItemsCount = () => {
  return fetch(`${HN_Base}/maxitem.json`)
}

export const getItems = (sort) => {
  return fetch(`${HN_Base}/${sort}.json`)
}

export const getItem = (id) => {
  return fetch(`${HN_Base}/item/${id}.json`)
}
