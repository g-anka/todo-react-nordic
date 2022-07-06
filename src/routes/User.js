import React from "react"
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import useAxios from "axios-hooks"
import Button from "../components/Button";


const Container = styled.div`
    border: 1px solid black;
    color: green;
    padding: 10px;
    margin: 0px 20px;
`
const SubmitButton = styled(Button)`
    font-size: 32px;
    padding: 10px 20px;
`
const Error = styled.div`
    color: red
`

function User() {
    const [input, setInput] = useState('')
    const { userID } = useParams()
    console.log('userID', userID)
    const navigate = useNavigate()

    const [{ data, loading, error }, refetch] = useAxios(
        `https://api.github.com/users/${input}`
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/user/${input}`)
    }

    return (
        <Container>
            <h1>Пользователь ID: { userID }</h1>
            <p>Введите новый ID пользователя:</p>
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <SubmitButton type="submit">Отправить</SubmitButton>
                </form>
            {loading && <span>Загрузка...</span>}
            {error && <Error>Ошибка</Error>}
            {!error && data && (
                <div>
                    <h3>{data.name}</h3>
                    <img src={data.avatar_url} alt="user's photo"/>
                </div>
            )}
        </Container>
    )
}
export default User;