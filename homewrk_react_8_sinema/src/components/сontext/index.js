import { createContext } from "react"

export const contecst = {
    name:'test',
    test:true,
}

export const Context = createContext({
    cotecst:contecst,
    setFunction: ()=>{},
})