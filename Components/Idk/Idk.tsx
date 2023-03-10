import {useEffect, useState} from "react";

let [ deathStar, setDeathStar] = useState(null)

useEffect(() => {
    fetch("https://swapi.dev/api/starships/9/")
        .then(response => response.json())
        .then(data => setDeathStar(data.message))
},[])