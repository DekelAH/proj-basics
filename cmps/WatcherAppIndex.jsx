import { watcherService } from "../services/watcher.service.js";
import { WatcherDetails } from "./WatcherDetails.jsx";
import { WatcherList } from "./WatcherList.jsx";
import { AddWatcher } from "./AddWatcher.jsx";

const { useState, useEffect } = React


export function WatcherAppIndex() {

    const [watchers, setWatchers] = useState([])
    const [watcherToView, setWatcherToView] = useState(null)
    const [isAddWatcher, setIsAddWatcher] = useState(false)

    useEffect(() => {

        watcherService.query()
            .then(setWatchers)
            .catch((error) => console.log('Error getting watchers', error))
    }, [])

    function onAddWatcher(watcher) {

        watchers.push(watcher)
    }

    function onRemoveWatcher(watcherId) {

        watcherService.remove(watcherId).then(() => {

            setWatchers(watchers.filter((watcher) => watcher.id !== watcherId))
        }).catch((error) => console.log('Error while removing watcher', error))
    }

    function onOpen(watcher) {

        setWatcherToView(watcher)
    }

    function onClose() {

        setWatcherToView(null)
    }

    function onCloseAddWatcherModal() {

        setIsAddWatcher(false)
    }

    return (

        <div className="watcher-container">
            <h1>Watcher App</h1>
            <button className="add-btn" onClick={() => setIsAddWatcher(true)}>Add Watcher</button>
            <WatcherList
                key={watchers.map(watcher => watcher.id)}
                watchers={watchers}
                onRemoveWatcher={onRemoveWatcher}
                onOpen={onOpen}
                onclose={onClose}
            />
            {
                watcherToView && <WatcherDetails watcherToView={watcherToView} onClose={onClose} />
            }

            {
                isAddWatcher && <AddWatcher onCloseAddWatcherModal={onCloseAddWatcherModal} onAddWatcher={onAddWatcher} />
            }
        </div>
    )
}