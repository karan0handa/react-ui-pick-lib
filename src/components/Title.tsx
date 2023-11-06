import { Box, Typography, Link } from "@mui/joy";
import React from 'react';

export default function Title() {
    return (
        <Box
        >
            <Typography level="h1">Pick the right UI Library</Typography>
            <Typography level="h2">for your <Link href="https://react.dev/">React</Link> project.</Typography>
        </Box>
    )
}