import { IData } from '../../types'
import { MyImmerActionCreater } from '../appReducer'

export const fetchData = () => {
  return (dispatch: (callback: any) => void) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor')
      .then((response): Promise<IData> => response.json())
      .then((data) => {
        dispatch(MyImmerActionCreater.setData(data))
      })
  }
}
