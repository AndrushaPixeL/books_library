import React, { Fragment } from 'react'
import Card from '../components/Card/Card'
import { useAppPresenter } from '../redux/presenters/AppPresenter'
import './Home.css'

export const Home: React.FC = () => {
  const { values } = useAppPresenter()
  return (
    <Fragment>
      <div className="container">
        {values.data.items.map((el: any) => {
          return (
            <div>
              <Card title={el.volumeInfo.title} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
