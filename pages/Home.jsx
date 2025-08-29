import { AnimalList } from "../cmps/AnimalList.jsx"
import { CountDown } from "../cmps/CountDown.jsx"
import { SeasonClock } from "../cmps/SeasonClock.jsx"
import { WatcherAppIndex } from "../cmps/WatcherAppIndex.jsx"


export function Home() {



    return (
        <section className="home">
            <h2>Home Sweet Home</h2>

            {/* <AnimalList /> */}
            {/* <SeasonClock /> */}
            {/* <CountDown toTime={Date.now() + 1000 * 10} onDone={() => { console.log('Its Time!') }} /> */}
            {<WatcherAppIndex />}
        </section>
    )
}

