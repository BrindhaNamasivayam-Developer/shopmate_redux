import { useEffect } from "react";

export const useTitle =(titleProp)=>{
    useEffect(()=>{
        document.title = `${titleProp} | Shopping cart`;       
    })
}