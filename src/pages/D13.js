import { Box, Typography } from '@mui/material';

const D13Medical = () => {
    return (
        <Box>
            <Typography variant="h4" padding={'1%'}>D13 Medical</Typography>
            <Box sx={{ width: '100%', height: '83vh' }}>
                <object width='100%' height='100%' data="public/content/D13Training.pdf"/>
            </Box>
        </Box>
    );
}

export default D13Medical;