import { Box, Typography, Button } from '@mui/material'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../API/store'
import { Book, setMaxResults } from '../../API/filterSlice'
import { handleSearch } from '../../API/fetchBooks'


const BooksList: React.FC = () => {
  const navigate = useNavigate();
  const { data, maxResults } = useSelector((state: RootState) => state.filters);
 
  const dispatch = useDispatch()
  const { sortedBy, category, query} = useSelector((state: RootState) => state.filters); 
 

 const handleLoad  = ()=>{
	handleSearch({sortedBy, category, query, maxResults}, dispatch)
 }

  return (
    <Fragment>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', 
      }}>
        {data.map((item: Book) => (
          <Box key={item.id} sx={{
            backgroundColor: '0 4px 8px rgba(0,0,0,0.2)',
            width: '300px',
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            border: "1px solid black",
			padding:2,
            margin: 1,
			cursor:'pointer'
          }}
		  onClick={() =>navigate(`/book/${item.id}`)}
		  >
            <img src={item.volumeInfo.imageLinks?.thumbnail} style={{
              width: 150,
              height: 200
            }} alt={item.volumeInfo.title} />
            	<Typography>{item.volumeInfo.title}</Typography>
				<Typography>{item.volumeInfo.categories ? item.volumeInfo.categories[0] : ''}</Typography>
				<Typography>{item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : ''}</Typography>
          </Box>
        ))}
      </Box>

     
      <Button
        variant="contained"
        onClick={handleLoad}
      >
        Загрузить ещё
      </Button>
    </Fragment>
  )
}

export default BooksList;