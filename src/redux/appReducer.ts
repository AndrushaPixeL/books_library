import { createActionCreators, ImmerReducer } from 'immer-reducer'
import { IData } from '../types'

export interface MyImmerReducerInitialStateInt {
  data: IData,
  startIndex: number,
  isLoading: boolean
}
export const myImmerReducerInitialState: MyImmerReducerInitialStateInt = {
  data: { items: [], kind: '', totalItems: 0 },
  startIndex: 120,
  isLoading: false
}

class MyImmerReducer extends ImmerReducer<MyImmerReducerInitialStateInt> {
  setData(data: IData) {
    this.draftState.data = {items: Array.from(new Set(this.draftState.data.items.concat(data.items))), kind: data.kind, totalItems: data.totalItems}
  }
  setStartIndex(startIndex: number){
    this.draftState.startIndex = startIndex
  }
  setIsLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading
  }
}

export const MyImmerActionCreater = createActionCreators(MyImmerReducer)

export default MyImmerReducer
