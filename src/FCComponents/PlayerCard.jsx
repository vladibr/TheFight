import React from 'react'
export default function PlayerCard(props) {
 let {name, desc} = props.data;
  return (
    <div>
      <h1>{name}</h1>
      <h4>{desc}</h4>
    </div>
  )
}

