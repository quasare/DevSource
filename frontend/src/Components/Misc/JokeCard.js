import React from 'react'

export default function JokeCard({joke}) {
   const {en,
    author} = joke
    console.log(joke);
    return (
        <div>
        <p>{en}  by: {author}</p>
        </div>
    )
}


// const {en: en="To Replace Programmers with Robots, clients will have to accurately describe what the want... We're safe",
// author: author="anonymous"} = joke