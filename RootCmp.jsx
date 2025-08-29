
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"
import { WatcherAppIndex } from "./cmps/WatcherAppIndex.jsx"

const {useState } = React

export function RootCmp() {
    const [page, setPage] = useState('home')
    return (
            <section className="app main-layout">
                <AppHeader page={page} onSetPage={setPage} />
                <main>
                    <main>
                        {page === 'home' && <Home />}
                        {page === 'about' && <About />}
                        {page === 'animal-list' && <AnimalList />}
                        {page === 'count-down' && <CountDown toTime={Date.now() + 8000} onDone={() => { console.log('Its Time!') }} />}
                        {page === 'watcher-app' && <WatcherAppIndex />}
                        {page === 'season-clock' && <SeasonClock />}
                        {page === 'mouse-monitor' && <MouseMonitor />}
                    </main>
                </main>
            </section>
    )
}