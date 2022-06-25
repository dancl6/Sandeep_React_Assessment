import {FormGroup, FormControlLabel, Switch} from '@mui/material'
// import {Grid, Item} from '@mui/material'
import {Grid, Paper, TextField} from '@mui/material'

// import Item from '@mui/material/Item'
const Nav = () => {
    return (

        <div>
            <Grid container>

                <Grid className='inner' item xs={2} md={1} >
                <a href = "#EN" >EN </a>
                </Grid>
                <Grid className='inner' item xs={2} md={1}>
                <a href = "#Skip">Skip to main content  </a>
                </Grid>
                <Grid className='inner' item xs={2} md={1}>
                <a href = "#ScreenReader">Screen Reader Access</a>
                </Grid>                
                <Grid className='inner' item>
                <li className='printer'>🖨️</li>
                </Grid>
                <Grid className='inner' item>
                <li className='letters'>A-</li>
                </Grid>
                <Grid className='inner' item>
                <li className='letters'>A</li>
                </Grid>
                <Grid className='inner' item>
                <li className='letters'>A+</li>
                </Grid>
                <Grid className='inner' item>
                <li className='letter-black'>A</li>
                </Grid>
                <Grid className='inner' item>
                <li className='letter-bold'>A</li>
                </Grid>
                <Grid className='inner' item>
                <TextField id="outlined-basic" label="🔎 Search here" variant="outlined"></TextField>
                </Grid>  
            </Grid>
            {/* <li><a href = "#Skip" >EN </a></li>
                <li>|</li>
                <li><a href = "#Skip">Skip to main content  </a></li>
                <li>|</li>
                <li><a href = "#ScreenReader">Screen Reader Access</a></li>
            <ul>
                <li className='printer'>🖨️</li>
            </ul>
            <ul>
                <li className='navs'>A-</li>
                <li className='navs'>A</li>
                <li className='navs'>A+</li>
            </ul> */}
        </div>


    )
}

export default Nav