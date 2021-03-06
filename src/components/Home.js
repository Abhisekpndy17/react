import React from 'react';
import { useState } from 'react';


export default function Home() {
    const [blogs, setBlogs] = useState([
        {
            title:'This is first title of blog one',
            body:'This is the body elements of the vlog post one',
            author:'Deepak Pandit',
            id:1,
        },
        {
            title:'This is first title of blog two',
            body:'This is the body elements of the vlog post two',
            author:'Veer ',
            id:2,
        },
        {
            title:'This is first title of blog three',
            body:'This is the body elements of the vlog post three',
            author:'Brijendra',
            id:3,
        },
        {
            title:'This is first title of blog four',
            body:'This is the body elements of the vlog post four',
            author:'Abhishek',
            id:4,
        }
    ])
    return (
        <div>
            <h1>Helo</h1>
            <h2 className='padding'>This is Home Page</h2>
            <div className='grid'>
                {blogs.map((blog) =>(
                    <div className='card' key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p className='padding'>Author : {blog.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
