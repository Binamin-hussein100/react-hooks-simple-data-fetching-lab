import React,{useEffect,useState} from "react";

function App(){
    const [dog,setDog] = useState([])
    const [isLoaded,setIsLoaded] = useState(true)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            setDog(data)
            console.log(data)
        })
    },[])

    if(!isLoaded)return <h3>LOADING ....</h3>
    return(
        <div>
            <img alt="A Random Dog" src={dog.message}></img>
            <p>{dog.status}</p>
        </div>
    )

}

export default App