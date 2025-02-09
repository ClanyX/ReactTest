import {AppBar, Toolbar, Typography } from "@mui/material";

function Header({ title }) {
    return(
        <AppBar possition="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;