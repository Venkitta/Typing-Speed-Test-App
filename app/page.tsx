import { TopHeader } from './components/TopHeader'
import { LiveHeader } from './components/LiveHeader'
import { TypingBlock } from './components/TypingBlock'

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <TopHeader />
      <LiveHeader />
      <TypingBlock />
    </div>
  )
}

export default App;