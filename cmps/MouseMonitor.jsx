
const { useState, useEffect } = React


export function MouseMonitor() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTracking, setIsTracking] = useState(true);

    const handleMouseMove = (event) => {
        if (isTracking) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }
    };

    useEffect(() => {
        if (isTracking) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isTracking])
    
    const toggleTracking = () => {
        setIsTracking(!isTracking);
    }

    return (

        <div className="monitor-container">
            <p>Mouse X: {mousePosition.x}</p>
            <p>Mouse Y: {mousePosition.y}</p>
            <button onClick={toggleTracking}>
                {isTracking ? 'Pause Tracking' : 'Resume Tracking'}
            </button>
        </div>
    )
}