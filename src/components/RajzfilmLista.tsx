import { useEffect, useState } from "react"
import type { Rajzfilm as RajzfilmType } from "../models"
import { Rajzfilm } from "./Rajzfilm";

export function RajzfilmLista() {
    const [rajzfilmek, setRajzfilmek] = useState<RajzfilmType[]>([]);

    useEffect(() => {
        async function load() {
            const response = await fetch("rajzfilmek.json");
            const data: RajzfilmType[] = await response.json();
            setRajzfilmek(data);
        }
        load();

    }, [])

    return (
        <>
            {rajzfilmek.map((item) => (<Rajzfilm key={item.id} data={item}></Rajzfilm>))}
        </>
    )
}