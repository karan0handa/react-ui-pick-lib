import { Box } from '@mui/joy';
import React from 'react';
import Title from './Title';
import Filter from './Filter';
import Libraries from './Libraries';

export default function MainBody() {
    return (
        <Box
        sx={{
            maxWidth: 'xl'
        }}>
            <Title/>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row'

            }}
            >
                <Filter/>
                <Libraries/>
            </Box>
        </Box>
    )
}