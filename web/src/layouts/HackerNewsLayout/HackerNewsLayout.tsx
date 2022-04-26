import SortsNavCell from 'src/components/SortsNavCell'

type HackerNewsLayoutProps = {
  children?: React.ReactNode
}

const HackerNewsLayout = ({ children }: HackerNewsLayoutProps) => {
  return (
    <div className="container mx-auto p-2">
      <SortsNavCell></SortsNavCell>
      <div className="my-4">{children}</div>
    </div>
  )
}

export default HackerNewsLayout
