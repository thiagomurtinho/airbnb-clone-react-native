import React, { useState } from 'react';

import api from '../../services/api'


export default function Login({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/sessions', { email })

    const { _id } =  response.data

    localStorage.setItem('user', _id) //salva no navegador localmente

    history.push('/dashboard')
  }
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL</label>
            <input 
                type="email" 
                id="email"
                value={email}
                placeholder="seu melhor email"
                onChange={event => setEmail(event.target.value)}
                />
            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}