import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../API/store';
import { useParams } from 'react-router-dom';

const BooksDetail: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.filters);
  const { id } = useParams<{ id: string }>(); // Указываем тип параметра id как строку

  
  const book = data.find((item) => item.id === id);

  return (
    <Box sx={{
      
      padding: 16,
      
    }}>
      {book ? (
        <Box
        sx={{
          display: "flex",
          flexDirection: {xl:'row', md:'column'},
          flexWrap: "nowrap",
          
        }}
        >
        <img style={{
          width:400,
           height:500,
            marginRight:'15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}} src={book.volumeInfo.imageLinks?.thumbnail}/>
        <Box>
          <Typography variant="h4">{book.volumeInfo.categories}</Typography>
          <Typography variant="h3">{book.volumeInfo.authors?.join(', ')}</Typography>
          <Typography 
          variant="body1"
          sx={{boxShadow: '0 4px 8px rgba(0,0,0,0.2)', padding:2}}
          >{book.volumeInfo.description}</Typography>
        </Box>
        </Box>
      ) : (
        <Typography variant="h4">Книга не найдена</Typography>
      )}
    </Box>
  );
}

export default BooksDetail;
