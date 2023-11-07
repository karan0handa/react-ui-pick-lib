import { Box, Grid, Typography } from "@mui/joy";

interface ComponentButtonProps {
    count: number
}

interface CountIconProps {
    icon: any,
    value: string
}

function ComponentButton({ count }: ComponentButtonProps) {
    return (
        <Typography>
            <LayersIcon/>
            {` ${count} Components`}
        </Typography>
    )
}

function CountIcon({ icon, value }: CountIconProps) {
    return (
        <Typography>
            <Box>
                {icon}
            </Box>
            {value}
        </Typography>
    )
}

function libraryFeatureComponent(feature: Feature) {
    return (
        <Box
        sx={{
            flexDirection: 'row'
        }}
        >
            <Typography>
                <Box
                sx={{
                    mr: 2
                }}
                >
                    {getFeatureIcon(feature)}
                </Box>
                {getFeatureName(feature)}
            </Typography>
        </Box>
    )
}

export default function Library({ library }: any) {
    return (
        <Box
        sx={{
            p: 5
        }}
        >
            <Box
            sx={{
                flexDirection: 'row'
            }}>
                <Box>
                    {library.icon}
                    {library.name}
                </Box>
                <Grid>
                    {library.features.map((feature) => (
                        <Grid>
                            {libraryFeatureComponent(feature)}
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
            sx={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <Box
                sx={{
                    flexDirection: 'row'
                }}
                >
                    <CountIcon icon={StarIcon} value={getReadableNumber(library.stars)}/>
                    <CountIcon icon={DownloadIcon} value={getReadableNumber(library.downloads)}/>
                </Box>
                <Box>
                    <ComponentButton count={library.components.length}/>
                </Box>
            </Box>
        </Box>
    )
}