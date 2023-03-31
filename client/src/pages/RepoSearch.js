import React, { useState } from 'react'
import RepoList from './RepoList'
import './RepoSearch.css'
import Auth from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import { Input, Space } from 'antd'
// import axios from 'axios'

// fetch the JWT token from header
// const getJwtFromHeader = () => {
//     fetch('/github/callback', {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//     })
//         .then((response) => {
//             // extract the JWT from the Authorization header
//             const header = response.headers.get('Authorization')
//             const token = header.split(' ')[1]
//             // store the JWT in localStorage or some other client-side storage
//             localStorage.setItem('token', token)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }

const { Search } = Input

function RepoSearch() {
    Auth.login()

    const [inputText, setInputText] = useState('')

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }

    let navigate = useNavigate()
    const Redirect = () => {
        navigate('/Templates')
    }

    return (
        <section className="repo-section">
            <h1>Choose a Github Repo</h1>

            <div className="repo-search">
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        enterButton
                        size="large"
                        type="text"
                        onChange={inputHandler}
                    />

                    <ul onclick={Redirect}>
                        <RepoList input={inputText} />
                    </ul>
                </Space>
            </div>
        </section>
    )
}

export default RepoSearch
