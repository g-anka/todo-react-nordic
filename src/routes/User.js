import React from "react"
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function User() {
    const [input, setInput] = useState('')
    const { userID } = useParams()
    console.log('userID', userID)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/user/${input}`)
    }
    return (
        <div>
            <h1>Пользователь ID: {userID}</h1>
            <p>Введите новый ID пользователя:</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}
export default User;