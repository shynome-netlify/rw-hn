import * as hn from './hn'
import * as api from './api'

describe('hn', () => {
  it('sorts', async () => {
    const s = hn.sorts()
    expect(s.length).toEqual(api.Sorts.length)
  })
  it('items', async () => {
    const id = api.Sorts[0].id
    const items = await hn.items({ sort: id })
    expect(items.length).toEqual(500)
  })
  it('item', async () => {
    const id = 8863
    const item = await hn.item({ id })
    expect(item.id).toBe(id)
  })
})
