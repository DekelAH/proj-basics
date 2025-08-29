
const { useState, useEffect } = React



export function CountDown({ startFrom = 6, toTime, onDone }) {

    const [timer, setTimer] = useState(toTime ? (toTime - Date.now()) / 1000 : startFrom)
    const lessThanTen = timer < 6 && timer > 0 ? 'red-count-down' : '';
    useEffect(() => {

        const intervalId = setInterval(() => {

            setTimer(timer => {

                if (timer <= 0) {

                    if (onDone) {

                        onDone();
                        clearInterval(intervalId)
                    }
                    return 0;
                }

                return timer - 1;
            })
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])


    let seconds = (timer % 60).toString().padStart(2, '0');
    let minutes = (Math.floor((timer / 60) % 60)).toString().padStart(2, '0');
    let hours = (Math.floor(timer / (60 * 60))).toString().padStart(2, '0');

    return (

        <div className="counter-container">
            <div className="count-down">
                <h1 className={lessThanTen}>{timer > 0 ? `${hours}:${minutes}:${seconds}` : "Time's Up!"}</h1>
            </div>
        </div>
    )
}