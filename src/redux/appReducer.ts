import { createActionCreators, ImmerReducer } from 'immer-reducer'
import { IData } from '../types'

export interface MyImmerReducerInitialStateInt {
  data: IData
}
export const myImmerReducerInitialState: MyImmerReducerInitialStateInt = {
  data: { items: [], kind: '', totalItems: 0 },
}

class MyImmerReducer extends ImmerReducer<MyImmerReducerInitialStateInt> {
  setData(data: IData) {
    this.draftState.data = data
  }
}

export const MyImmerActionCreater = createActionCreators(MyImmerReducer)

export default MyImmerReducer
