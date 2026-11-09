import type { Rajzfilm } from "../models";

interface RajzfilmProps {
    data: Rajzfilm;
}

export function Rajzfilm(props: RajzfilmProps) {
    return (
        <>
            <div className="card">
                <div className="card-body"></div>
                <h2>{props.data.cim}</h2>
                <p><i>{props.data.studio}</i></p>
                <p><b>{props.data.megjelenesEve}</b></p>
            </div>
        </>
    )
}