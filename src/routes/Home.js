import React from "react"
import { Link } from 'react-router-dom'

function Home() {
    return (
            <div>
                <h1>Main</h1>
                <Link to="/todo">Посмотрите список дел</Link>
            </div>
        )
}
export default Home;