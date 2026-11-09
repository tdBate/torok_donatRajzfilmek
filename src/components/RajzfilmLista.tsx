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

    function rajzfilmekSzama(): number { return rajzfilmek.length; }
    function legkorabbiMegjelenesEv(): number {
        let temp = rajzfilmek.map(a => a.megjelenesEve)
        return Math.min(...temp);
    }

    function legkesobbiMegjelenesEv(): number {
        let temp = rajzfilmek.map(a => a.megjelenesEve)
        return Math.max(...temp);
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div>
                        <p>Rajzfilmek száma: {rajzfilmekSzama()}</p>
                        <p>Legkorábbi: {legkorabbiMegjelenesEv()}</p>
                        <p>Legkorábbi: {legkesobbiMegjelenesEv()}</p>
                    </div>


                    {rajzfilmek.map((item) => (<Rajzfilm key={item.id} data={item}></Rajzfilm>))}
                </div>
            </div>

        </>
    )
}