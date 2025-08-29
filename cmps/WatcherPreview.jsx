export function WatcherPreview({ watcher }) {

    return (
        
        <div className="watcher-preview">
            <img src={`https://robohash.org/${watcher.fullName}.png`}/>
            <h2>{watcher.fullName}</h2>
        </div>
    )
}