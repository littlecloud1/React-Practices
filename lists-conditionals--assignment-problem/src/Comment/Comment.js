import React from 'react'

const Comment = (props) => {

    return (
        <div>
            <input type="text" onChange={props.changed} value={props.text}/>
            <p>{props.text}</p>
            <p>text length:{props.length}</p>
        </div>



        )



};


export default Comment;