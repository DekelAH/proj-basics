import { watcherService } from "../services/watcher.service.js";

const { useState } = React;


export function AddWatcher({ onCloseAddWatcherModal, onAddWatcher }) {

    const [watcherData, setWatcherData] = useState({
        fullName: '',
        movies: []
    })
    const [movie, setMovie] = useState('')
    const [fullName, setFullName] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()
        watcherService.save(watcherData)
        onAddWatcher(watcherData)
        setFullName('')
        setMovie('')
        onCloseAddWatcherModal(false);
    }


    return (

        <form className="add-form-modal" onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" name="fullName" value={fullName} onChange={(event) => {

                    setFullName(event.target.value)
                    watcherData.fullName = event.target.value
                }} />
            </label>
            <label>
                Movies:
                <input type="text" name="movie" value={movie} onChange={(event) => setMovie(event.target.value)} />
                <button className="add-movie-btn" type="button" onClick={() => {
                    watcherData.movies.push(movie)
                    setMovie('')
                }}>Add Movie</button>
                <ul>
                    {
                        watcherData.movies.map(movie => (

                            <li key={movie}>{movie}</li>
                        ))
                    }
                </ul>
            </label>
            <button type="submit">Add</button>
        </form>
    )
}