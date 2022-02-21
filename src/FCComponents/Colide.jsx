import React from 'react'


export default function Colide(props) {
    let  isActive  = props.active
    localStorage.setItem('fighters', JSON.stringify(props.fighters))
    const fighters = JSON.parse(localStorage.getItem('fighters'))

    return (
        <div className='video_window'>

            <div  id={isActive ? "picture1" : "picture0"}>
                <div className='statusBar'>
                    <div id='health_green'>Health:{fighters[0].health_points}</div>
                    <div id='attack_red'>Attack:{fighters[0].attack_power}</div>
                </div>
                <img className='homepic' src='/images/vladiFaceoff.jpg' alt=""></img>
            </div>
                
            <h1 id='vs_font'>VS</h1>

            <div id={isActive ? "picture2" : "picture0"}>

                <div className='statusBar'>
                    <div id='health_green'>Health:{fighters[1].health_points}</div>
                    <div id='attack_red'>Attack:{fighters[1].attack_power}</div>
                </div>
                <img className='homepic' src='/images/daveFaceoff.jpg' alt=""></img>
            </div>

        </div>
    )
}
