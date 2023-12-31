import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book{
  id: string;
  volumeInfo:{
    imageLinks?:{
      smallThumbnail:string
      thumbnail:string
    }
    title: string;
    categories: string[];
    authors: string[];
    description: string;
  }
}


export interface FilterState {
  maxResults:number
  sortedBy: string;
  category: string;
  query: string;
  data:Book[]
  loading:boolean
}

const initialState: FilterState = {
  maxResults: 30,
  sortedBy: 'relevance',
  category: 'all',
  query: '',
  data: [],
  loading: false
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortedBy: (state, action: PayloadAction<string>) => {
      state.sortedBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.data = action.payload;
    },
    setMaxResults: (state, action:PayloadAction<number>)=>{
      state.maxResults = action.payload
    },
    setLoading:(state, action:PayloadAction<boolean>)=>{
      state.loading = action.payload
    }

  },
});

export const { setSortedBy, setCategory, setQuery, setBooks, setMaxResults, setLoading } = filterSlice.actions;
export default filterSlice.reducer;
