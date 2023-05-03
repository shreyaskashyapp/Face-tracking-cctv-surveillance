import react from 'react'

export default function Table(props) {
  console.log(props)
  function handleClick(id,src,time,location){
    props.onclick(id,src,time,location)
  }
  return (
    <div className="finds-data" onClick={() => handleClick(props.name,props.data,props.time,props.location)}>
      <h4>1</h4>
      <h4>{props.name}</h4>
      <h4>{props.locations}</h4>
      <h4>{props.time}</h4>
    </div>
  )
}