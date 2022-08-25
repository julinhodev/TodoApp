import { Header } from "./componentes/Header"
import { FeedTask } from "./componentes/FeedTask"
import './gobal.css';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <FeedTask />
      </main>
    </div>
  )
}
