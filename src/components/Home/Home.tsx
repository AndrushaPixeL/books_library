import React, { Fragment } from 'react'
import { Book } from '../../types'
import Card from '../Card/Card'
import './Home.css'

interface IHome {
  items: Array<Book>
}

const Home: React.FunctionComponent<IHome> = (props) => {
  
  return (
    <Fragment>
      <div className="container">
        {props.items[0] ? (
          props.items.map((el: any) => {
            return (
              <div key={el?.etag + el?.id}>
                <Card volumeInfo={el?.volumeInfo} />
              </div>
            )
          })
        ) : (
          <h1>Книг с таким названием нет :❲ </h1>
        )}
      </div>
    </Fragment>
  )
}
export default Home
