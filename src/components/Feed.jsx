import { useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import {fetchFromAPI} from '../utils/fetchFromAPI.js';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items)
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }} >
      <Box sx={{ 
        height: { sx:'auto', md:'92vh'}, 
        borderRight: '1px solid #3d3d3d', 
        px:{sx:0, md:2}
        }}>

          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography className="copyright" variant="body2"
          sx={{ mt:1.5, color: "#fff" }}
          > 
            Copyright 2023.By MCS.
          </Typography>

      </Box>

      {/* new box for videos */}

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" mb={2}
          sx={{ color: "#fff" }}
          > 
            {selectedCategory} <span style={{ color: '#EC4B36' }}>Videos</span>
          </Typography>

          <Videos  videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed