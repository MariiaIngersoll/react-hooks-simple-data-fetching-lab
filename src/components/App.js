import React, { useEffect, useState} from "react";

function App() {
    const [randomDog, setRandomDog] = useState("")
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
         
            setRandomDog(data.message);
            setLoaded(true)
            
        })
    }, [])

    return (
    <div>
     {!isLoaded ? <p>...Loading</p> : <img src={randomDog} alt="A Random Dog"></img>}
     </div>
)}
        
export default App