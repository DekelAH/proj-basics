const { useState, useEffect } = React;
import { utilService } from "../services/util.service.js";

export function SeasonClock() {

    const [isDark, setIsDark] = useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {

        const timeId = setInterval(() => {

            setTime(new Date());
        }, 1000)

        return () => clearInterval(timeId)
    }, [])

    const currentDayName = utilService.getDayName(new Date())
    const currentMonthName = utilService.getMonthName(new Date())
    let seasonToDisplay = setSeasonByMonth()

    const seasons = [

        { name: 'spring', img: '..assets/img/spring.png' },
        { name: 'summer', img: '..assets/img/summer.png' },
        { name: 'autumn', img: '..assets/img/autumn.png' },
        { name: 'winter', img: '..assets/img/winter.png' },
    ]

    const season = seasons.filter((item) => (item.name == seasonToDisplay))
    const darkModeClass = isDark ? 'dark' : ''
    const monthIndex = time.getMonth()

    function onToggleDarkMode() {

        setIsDark(isDark => !isDark)
    }

    function setSeasonByMonth() {

        if (monthIndex <= 7 && monthIndex >= 5) {
            return 'summer'

        } else if (monthIndex <= 10 && monthIndex >= 8) {
            return 'autumn'

        } else if (monthIndex <= 2 && monthIndex >= 4) {
            return 'spring'

        } else {
            return 'winter'
        }
    }


    return (

        <div onClick={onToggleDarkMode}>
            <div className={`season-bg ${darkModeClass}`}>
                <h1>{currentMonthName} ({seasonToDisplay})</h1>
                <img src={season[0].img} />
                <h1>{currentDayName}!</h1>

                <h1>{time.toLocaleTimeString()}</h1>
            </div>

        </div>
    )
}