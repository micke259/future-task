import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import booksImage from '../../assets/books.jpeg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../API/store'

import { setSortedBy, setCategory, setQuery,} from '../../API/filterSlice'


import { handleSearch } from '../../API/fetchBooks'





const Header: React.FC = () => {

  
  const dispatch = useDispatch()
  
  const { sortedBy, category, query, maxResults } = useSelector((state: RootState) => state.filters); 

  

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '300px',
        backgroundColor: 'black',
        backgroundImage: `url(${booksImage})`,
      }}
    >
      <Typography
        sx={{
          color: '#fff',
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        Header
      </Typography>
      <TextField
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        hidden
        sx={{
          backgroundColor: '#fff',
          borderRadius: 0,
          width: '75%',
          minWidth: '320px',
        }}
        InputProps={{
          endAdornment: (
            <IconButton edge='end' onClick={()=>handleSearch({category , sortedBy, maxResults, query}, dispatch)}>
              <SearchIcon />
            </IconButton>
          ),
        }}
        onKeyDown={e => {e.key ==="Enter" && handleSearch({category , sortedBy, maxResults, query}, dispatch)}}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-between',
          minWidth: '320px',
          width: '75%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginRight: { xs: 0, md: '15px' },
            }}
          >
            Выберите категорию
          </Typography>
          <FormControl>
            <Select
              sx={{
                backgroundColor: '#fff',
                minWidth: '320px',
                maxWidth: '15%',
                color: '#000',
                mt: 1,
              }}
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value as string))}
            >
              <MenuItem value='all'>Все</MenuItem>
              <MenuItem value='art'>Искусство</MenuItem>
              <MenuItem value='biography'>Биография</MenuItem>
              <MenuItem value='computers'>Компьютеры</MenuItem>
              <MenuItem value='history'>История</MenuItem>
              <MenuItem value='poetry'>Поэзия</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginRight: { xs: 0, md: '15px' },
            }}
          >
            Сортировать по
          </Typography>
          <FormControl>
            <Select
              sx={{
                backgroundColor: '#fff',
                minWidth: '320px',
                maxWidth: '25%',
                color: '#000',
                mt: 1,
              }}
              value={sortedBy}
              onChange={(e) => dispatch(setSortedBy(e.target.value as string))}
            >
              <MenuItem value='relevance'>Релевантности</MenuItem>
              <MenuItem value='newest'>Новым</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
