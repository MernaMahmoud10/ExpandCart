import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";


export let MediaContext = createContext([]);
export function MediaContextProvider(props) {
    let [restaurants, setRestaurants] = useState([])
    let [restAfterSearch, setRestAfterSearch] = useState([]);
    async function gettingResturants() {
        let { data } = await axios.get("data.json")
        console.log(data)
        setRestaurants(data.brands)
        setRestAfterSearch(data.brands)

    }

    function searchProduct(e) {
        if (restaurants) {
            let str = e.target.value;
            let newArray = []
            let term = str.charAt(0).toUpperCase() + str.slice(1);
            console.log(term)
            for (let i = 0; i < restaurants.length; i++) {
                if (restaurants[i].name.includes(term.trim())) {

                    newArray.push(restaurants[i])
                }
            }
            console.log(newArray)
            if (newArray != []) {
                setRestAfterSearch(newArray)
            }
            else {
                setRestAfterSearch(restaurants)
            }
            window.scrollBy(0, 1000);
        }

    }

    function searchByTag(e) {
        let clickedTag = e.target.innerHTML
        let ArrayOfRestAfterTag = []
        debugger;
        console.log(clickedTag)
        for (let i = 0; i < restaurants.length; i++) {
            let taaaaaags = restaurants[i].tags
            for (let j = 0; j < taaaaaags.length; j++) {
                if (taaaaaags[j].name == clickedTag) {
                    console.log(restaurants[i])
                    ArrayOfRestAfterTag.push(restaurants[i])

                }

            }
            if (ArrayOfRestAfterTag != []) {
                setRestAfterSearch(ArrayOfRestAfterTag)
            }
            else {
                setRestAfterSearch(restaurants)
            }
            window.scrollBy(0, 500);
        }

    }



    useEffect(() => {
        gettingResturants()

    }, []);

    return <MediaContext.Provider value={{ restaurants, restAfterSearch, searchByTag, searchProduct }}>
        {props.children}
    </MediaContext.Provider>
}