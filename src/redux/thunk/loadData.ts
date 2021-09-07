import { IData } from '../../types'
import { MyImmerActionCreater } from '../appReducer'

export const fetchData = (startIndex: Number) => {
  return (dispatch: (callback: any) => void) => {
    dispatch(MyImmerActionCreater.setIsLoading(true))
    fetch(`https://www.googleapis.com/books/v1/volumes?q=JS+Vue&maxResults=30&startIndex=${startIndex}`)
      .then((response): Promise<IData> => response.json())
      .then((data) => {
        dispatch(MyImmerActionCreater.setData(data))
      })
  }
}
