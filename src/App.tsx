import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { useAppPresenter } from './redux/presenters/AppPresenter'
import './App.css'

const App: React.FC = () => {
  const { values, eventHandlers } = useAppPresenter()

  return (
    <>
      <Navbar totalItems={values.data.totalItems} />
      <div>
        <div className="container_app">
          <button
            onClick={() => {
              eventHandlers.setStartIndex(values.startIndex + 30),
                console.log(values.startIndex),
                eventHandlers.loadData(values.startIndex)
            }}
          >
            Ещё
          </button>
        </div>

        <Home data={values.data} />
      </div>
    </>
  )
}
export default App
