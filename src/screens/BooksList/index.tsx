import { Box, Typography, Button, CircularProgress } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../API/store'
import { Book} from '../../API/filterSlice'



const BooksList: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: RootState) => state.filters);


 

  return (
	
    <Fragment>
	  {loading ? <Box sx={{display:'flex', justifyContent:"center"}}> 
		<CircularProgress 
			size={200} 
			thickness={2}/>
		</Box>
			 : 
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
}
     
    </Fragment>
  )
}

export default BooksList;