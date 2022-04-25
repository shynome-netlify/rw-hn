import * as api from './api'
import { Item } from 'types/graphql'

export const items = async ({ sort }: { sort: string }): Promise<Item[]> => {
  const items: any = await api.getItems(sort).then((r) => r.json())
  return items
}

export const sorts = () => {
  return api.Sorts
}

export const item = async ({ id }: { id: number }): Promise<Item> => {
  const item: any = api.getItem(id).then((r) => r.json())
  return item
}
