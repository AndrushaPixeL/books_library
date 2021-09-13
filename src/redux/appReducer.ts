import { createActionCreators, ImmerReducer } from "immer-reducer";
import { IData, SearchData } from "../types";

export interface MyImmerReducerInitialStateInt {
  data: IData;
  startIndex: number;
  searchData: SearchData;
  isLoading: boolean;
}
export const myImmerReducerInitialState: MyImmerReducerInitialStateInt = {
  data: { items: [], kind: "", totalItems: 0 },
  startIndex: 0,
  searchData: { searchValue: "", category: "", sort: "relevance" },
  isLoading: false
};

class MyImmerReducer extends ImmerReducer<MyImmerReducerInitialStateInt> {
  setSearchData(searchValue: string, category: string, sort: string) {
    this.draftState.searchData = { searchValue, category, sort };
  }
  setData(data: IData) {
    this.draftState.data = {
      items: Array.from(new Set(this.draftState.data.items.concat(data.items))),
      kind: data.kind,
      totalItems: data.totalItems
    };
  }
  setStartIndex(startIndex: number) {
    this.draftState.startIndex = startIndex;
  }
  setIsLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading;
  }
  clearData() {
    this.draftState.data = { items: [], kind: "", totalItems: 0 };
  }
}

export const MyImmerActionCreator = createActionCreators(MyImmerReducer);

export default MyImmerReducer;
