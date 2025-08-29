export function AnimalList() {

    const animalInfos = [

        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fennec Fox', count: 12 },
        { type: 'Fin Whale', count: 28 },
    ]

    const title = <h1>Rare Animals</h1>

    return (

        <div>
            {title}
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        animalInfos.map((animal) => (
                            <tr key={animal.type}>
                                <td>{animal.type}</td>
                                <td>{animal.count}</td>
                                <td><a href={`https://www.google.com/search?q=${animal.type}`}>Search</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}