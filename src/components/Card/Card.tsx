import React from 'react'
import { VolumeInfo } from '../../types'
import noImage from '../../images/noImage.png'
import './Card.css'

type CardProps = {
  volumeInfo: VolumeInfo
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  let title
  let categories
  let imgUrl
  let authors
  if (props.volumeInfo.categories) {
    categories = props.volumeInfo.categories[0]
  } else {
    categories = ['']
  }
  if (props.volumeInfo.imageLinks) {
    imgUrl = props.volumeInfo.imageLinks.thumbnail
  } else {
    imgUrl = noImage
  }
  if (props.volumeInfo.title) {
    if (props.volumeInfo.title.length > 60)
      title = props.volumeInfo.title.substr(0, 60) + '...'
    else title = props.volumeInfo.title
  } else {
    title = 'Название отсутсвует'
  }
  if (props.volumeInfo.authors) {
    authors = props.volumeInfo.authors
  } else {
    authors = ['']
  }

  return (
    <>
      {props.volumeInfo.title && (
        <>
          <div className="card_container">
            <img
              className="card_image"
              src={imgUrl}
              alt="что-то пошло не так..."
            ></img>
            <div className="card_category">{categories}</div>
            <div className="card_title">{title}</div>

            {authors.map((el: string, index: number) => {
              return (
                <div key={el + index} className="card_authors">
                  {el}
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
export default Card
