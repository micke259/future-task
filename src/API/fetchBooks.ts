import axios from 'axios';
import { API_KEY } from '../Constants/key';

import { FilterState, setBooks, setLoading } from './filterSlice';

interface Search extends Omit<FilterState, 'data'> {}

export const handleSearch = ({ category, query, sortedBy, maxResults, loading }: Search, dispatch: Function) => {
  dispatch(setLoading(true));
  
  let params = {
    q: query,
    key: API_KEY,
    orderBy: sortedBy,
    maxResults: maxResults,
  };

  if (category !== 'all') {
    
    params.q += ` subject:${category}`;
  }

  axios
    .get('https://www.googleapis.com/books/v1/volumes', { params })
    .then((response) => {
      dispatch(setBooks(response.data.items ?? []));
    })
    .catch((error) => {
      console.error('Ошибка при запросе к Google Books API:', error);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
