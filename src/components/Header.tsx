import { Box, IconButton, Typography } from '@mui/joy'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useColorScheme } from '@mui/joy';
import ModeToggle from './ModeToggle';

export default function Header() {

    return (
        <Box
        component="header"
        className="Header"
        sx={[
          {
            p: 2,
            gap: 2,
            bgcolor: 'background.surface',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gridColumn: '1 / -1',
            borderBottom: '1px solid',
            borderColor: 'divider',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
          },
        ]}
      >
        <Typography component="h1" fontWeight="xl">
            React UI PickLib
        </Typography>
        <Box
        sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <IconButton>
                <GitHubIcon/>
            </IconButton>
            <ModeToggle/>
        </Box>
      </Box>
    )
}