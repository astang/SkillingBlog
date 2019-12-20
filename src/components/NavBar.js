import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const BlogPost = () => {
    
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Mabels Skilling Progress 
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;