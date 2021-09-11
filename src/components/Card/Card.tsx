import React from 'react'
import { VolumeInfo } from '../../types'
import noImage from '../../images/noImage.png'
import './Card.css'

interface ICardProps {
  volumeInfo: VolumeInfo
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  let title
  let categories
  let imgUrl
  if (props.volumeInfo.categories) {
    categories = props.volumeInfo.categories
  } else {
    categories = ['']
  }  
  if (props.volumeInfo.imageLinks) {
    imgUrl = props.volumeInfo.imageLinks.thumbnail
  } else {
    imgUrl = noImage
  }
  if (props.volumeInfo.title) {
    title = props.volumeInfo.title
  } else {
    title = "Название отсутсвует"
  }
  return (
    <>
      {props.volumeInfo.title && (
        <>
          <div className="card_container">
            <img className="image_card" src={imgUrl} alt="что-то пошло не так..."></img>
            {categories?.map((el, index) => (
              <h6 key={el + index}>{el}</h6>
            ))}

            <h6>{title}</h6>
          </div>
        </>
      ) }
    </>
  )
}
export default Card
