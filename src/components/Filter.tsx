import { Box, Accordion, AccordionGroup, AccordionSummary, AccordionDetails } from '@mui/joy';
import React from 'react';

export default function Filter() {
    return (
        <Box>
            <AccordionGroup>
                <Accordion>
                    <AccordionSummary>Main Features</AccordionSummary>
                    <AccordionDetails>
                        <MainFeatureSelection/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>More Features</AccordionSummary>
                    <AccordionDetails>
                        <MoreFeatureSelection/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>Available Components</AccordionSummary>
                    <AccordionDetails>
                        <AvailableComponentSelection/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>Popularity</AccordionSummary>
                    <AccordionDetails>
                        <PopularitySelection/>
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </Box>
    )
}