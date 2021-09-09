import React from 'react'
import './Card.css'

interface ICardProps {
  title: String
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <>{props.title ? <div className="card_container">{props.title}</div> : <h1>Книг с таким названием нет :❲ </h1>}</>
  )
}
export default Card
