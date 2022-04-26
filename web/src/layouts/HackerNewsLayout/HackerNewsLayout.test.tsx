import { render } from '@redwoodjs/testing/web'

import HackerNewsLayout from './HackerNewsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HackerNewsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HackerNewsLayout />)
    }).not.toThrow()
  })
})
