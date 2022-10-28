import React, {useState, useEffect} from 'react'

function NewPost() {
    
    const [newPost, setNewPost] = useState({
        id: Math.floor(Math.random() * 100),
        title: "",
        body: "",
        userId: 1
    })

    const [myPosts, setMyPosts] = useState([])

    function handleChange(event){

        // Objekt zurück geben nach => in den runden Klammern
        setNewPost( prevValue => (
            // hier wird Objekt + neuer key/Value festgelegt
            {
            ...prevValue, [event.target.name]:event.target.value
            }
        ))
    }

    console.log(newPost)
  
    function postArticle(e){

        e.preventDefault()
        // Options für den Request
        const options = {
            method: "POST",
            mode: "no-cors",
            headers: {"Content-type": "application/json; charset=UTF8"},
            body: JSON.stringify(newPost)
        }
        fetch("https://jsonplaceholder.typicode.com/posts", options)
    }

    return (
        <div className="insutrctions">
            <div className="block">
                <form style={{ marginTop: "3rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <input type="text" name="title" placeholder="title" onChange={handleChange} />
                    <input type="text" name="body" placeholder="body" onChange={handleChange} />
                    <button onClick={postArticle}>Add new article</button>
                </form>
            </div>
        </div>
    )
}

export default NewPost