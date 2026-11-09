import { useEffect, useState } from "react"
import type { Rajzfilm } from "../models"

export function RajzfilmLista() {
    const [rajzfilmek, setRajzfilmek] = useState<Rajzfilm[]>([]);

    useEffect(() => {
        async function load() {
            const response = await fetch("rajzfilmek.json");
            const data: Rajzfilm[] = await response.json();
            setRajzfilmek(data);
        }
        load();

    }, [])

    return (
        <>

        </>
    )
}