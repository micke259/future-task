import axios from 'axios';
import { API_KEY } from '../Constants/key';

import { FilterState, setBooks } from './filterSlice';

interface search extends Omit<FilterState, 'data'>{}


export const handleSearch = ({ category, query, sortedBy, maxResults }: search, dispatch: Function) => {
  const params = {
    q: `subject:${category} ${query}`,
    key: API_KEY,
    orderBy: sortedBy,
    maxResults: maxResults
  };

  axios
    .get('https://www.googleapis.com/books/v1/volumes', { params })
    .then((response) => {
      dispatch(setBooks(response.data.items ?? []));
    })
    .catch((error) => {
      console.error('Ошибка при запросе к Google Books API:', error);
    });
};
