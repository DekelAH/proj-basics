import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

const WATCHER_KEY = 'watcherDB'
_createWatchers()

export const watcherService = {

    query,
    get,
    remove,
    save
}

function query() {

    return storageService.query(WATCHER_KEY)
        .then((watchers) => {
            if (watchers) {

                return watchers
            }
        })
}

function get(watcherId) {

    return storageService.get(WATCHER_KEY, watcherId)
        .then((watcher) => {
            return watcher
        })
}

function remove(watcherId) {

    return storageService.remove(WATCHER_KEY, watcherId)
}

function save(watcher) {

    if (watcher.id) {
        return storageService.put(WATCHER_KEY, watcher)
    } else {
        return storageService.post(WATCHER_KEY, watcher)
    }
}

function _createWatchers() {

    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {

        watchers = [

            { id: utilService.makeId(), fullName: 'Muki Da', movies: ['Black Hawk Dawn', 'Saving Private Ryan'] },
            { id: utilService.makeId(), fullName: 'Puki Ba', movies: ['Rambo', 'Rocky'] },
            { id: utilService.makeId(), fullName: 'Shuki Sa', movies: ['Titanic', 'King Kong'] },
            { id: utilService.makeId(), fullName: 'Luki Ra', movies: ['Saru The Way Home', 'Saving Shuli'] },
            { id: utilService.makeId(), fullName: 'Zazi La', movies: ['Inception', 'SwordFish'] },
        ]

        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

