import PWABadge from './PWABadge.jsx'
import './App.css'
import './component/Counter.jsx'
import { Counter } from './component/Counter.jsx'
import { Time } from './component/Time.jsx'
import { FetchUser } from './component/FetchUser.jsx'
import { Interval } from './component/interval.jsx'
import { Stopwatch } from './component/Stopwatch.jsx'

function App() {
  return (
    <>
      <h1>ReactHomework</h1>
      <Counter />
      <Time />
      <FetchUser />
      <Interval />
      <hr />
      <Stopwatch />

      <PWABadge />
    </>
  )
}

export default App
