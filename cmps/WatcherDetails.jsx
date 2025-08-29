

export function WatcherDetails({ watcherToView, onClose }) {

    return (

        <article className="watcher-details">
            <h1>{watcherToView.fullName}</h1>
            <ul>
                {
                    watcherToView.movies.map(movie => (

                        <li key={movie}> {movie}</li>
                    ))
                }

            </ul>
            <button className="close-btn" onClick={() => onClose()}>Close</button>
        </article>
    )

}