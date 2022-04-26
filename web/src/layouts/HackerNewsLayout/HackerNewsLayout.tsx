import SortsNavCell from 'src/components/SortsNavCell'

type HackerNewsLayoutProps = {
  children?: React.ReactNode
}

const HackerNewsLayout = ({ children }: HackerNewsLayoutProps) => {
  return (
    <div className="container mx-auto p-2">
      <SortsNavCell></SortsNavCell>
      {children}
    </div>
  )
}

export default HackerNewsLayout
