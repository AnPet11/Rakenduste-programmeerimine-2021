import React from "react";

function Farewell({leave, setLeave, name}){

    return(
        <>
            {leave && (
                <div>
                    <img className="Farewell-bye-pic" src="./Miniy.jpg" alt="Miniy"/>
                    <br/><br/>
                    <p>Go back please, {name}!!!</p>
                    <button onClick={() => setLeave(!leave)}>Think about it.</button>
                </div>
            )}
        </>
    )
}

export default Farewell;