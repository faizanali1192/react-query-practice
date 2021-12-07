import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Posts = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
            setLoading(false);
            setPosts(result.data)
        }).catch(err => {
            console.log(err)
            setError(error)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>error</h2>
    }
    return (
        <div>
            <div>

                {
                    posts.map(post => {
                        return <h5>{post.title}</h5>
                    })
                }
            </div>

        </div>
    )
}

export default Posts
