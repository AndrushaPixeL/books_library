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
 
            {props.items.map((el: any) => {
              return (
                <div key={el?.etag + el?.id}>
                  <Card title={el?.volumeInfo?.title} />
                </div>
              )
            })}

      </div>
    </Fragment>
  )
}
export default Home
