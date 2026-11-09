import { useEffect, useState } from "react";
import type { Rajzfilm } from "../models";

interface RajzfilmProps {
    data: Rajzfilm;
}

export function Rajzfilm(props: RajzfilmProps) {
    const [premier, setPremier] = useState<boolean>(false);

    return (
        <>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body"></div>
                    <h2>{props.data.cim}</h2>
                    <p><i>{props.data.studio}</i></p>
                    <p><b>{props.data.megjelenesEve}</b></p>
                    {
                        props.data.megjelenesEve < 2000 && <p>Klasszikus rajzfilm</p>
                    }

                    {
                        props.data.megjelenesEve >= 2000 && props.data.megjelenesEve <= 2010 && <p>Régebbi rajzfilm</p>
                    }

                    {
                        props.data.megjelenesEve > 2010 && <p>Modern rajzfilm</p>
                    }

                    {
                        premier && <p>Premier: {props.data.premier}</p>
                    }

                    <button className="btn btn-primary" onClick={() => setPremier(!premier)}>{premier ? "Elrejt" : "Mutat"}</button>
                </div>
            </div>
        </>
    )
}