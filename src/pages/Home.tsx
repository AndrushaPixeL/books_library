import React, { Fragment } from 'react'
import Card from '../components/Card/Card'
import './Home.css'

interface IHome {
  data: any
}

const Home: React.FunctionComponent<IHome> = (props) => {
  
  return (
    <Fragment>
      <div className="container">
        {props.data.items.map((el: any) => {
          return (
            <div key={el?.etag+el?.id} >
              <Card title={el?.volumeInfo?.title} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
export default Home
