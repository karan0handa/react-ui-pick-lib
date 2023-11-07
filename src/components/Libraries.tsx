import { Grid } from "@mui/joy";
import Library from "./Library";

export default function Libraries({ selectedLibraries }: any) {
    return (
        <Grid
        sx={{
            flexGrow: 3
        }}
        >
            {selectedLibraries.map((libary) => (
                <Grid>
                    <Libary library/>
                </Grid>
            ))}
        </Grid>
    )
}