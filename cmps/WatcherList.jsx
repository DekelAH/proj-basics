import { WatcherPreview } from "./WatcherPreview.jsx";


export function WatcherList({ watchers, onRemoveWatcher, onOpen }) {


    return (

        <div className="watcher-list">

            {
                watchers.map(watcher =>
                    <div key={watcher.id}>
                        <WatcherPreview watcher={watcher} />
                        <section className="btn-section">
                            <button onClick={() => onRemoveWatcher(watcher.id)}>Remove</button>
                            <button onClick={() => onOpen(watcher)}>Details</button>
                        </section>
                    </div>
                )
            }
        </div>
    )
}