import React from 'react'
import "./Card.css"

interface ICardProps {
  title: String
}

const Card: React.FunctionComponent<ICardProps> = (props) => {

  return (
  <div className="card_container">
    {props.title}
  </div>
  )
}
export default Card
