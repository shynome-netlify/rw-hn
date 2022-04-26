import SortsNavCell from 'src/components/SortsNavCell'

type HackerNewsLayoutProps = {
  children?: React.ReactNode
}

const HackerNewsLayout = ({ children }: HackerNewsLayoutProps) => {
  return (
    <>
      <SortsNavCell></SortsNavCell>
      {children}
    </>
  )
}

export default HackerNewsLayout
