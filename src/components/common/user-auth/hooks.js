import React, { useEffect, useState } from 'react';

const UseAuth = () => {
    const [admin, setAdmin] = useState('')
    const [token, setToken] = useState('')
    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            setAdmin(localStorage.getItem('userInfo'))
            setToken(localStorage.getItem('BEARER_TOKEN'))
        }
    })
    return {
        admin,
        token
    }
}
export default UseAuth