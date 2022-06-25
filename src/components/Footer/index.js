import {Grid, Divider, createTheme} from '@mui/material'
import Image from  '../../images/RajyaSabhaPic.jpg'
import { slide as Menu } from 'react-burger-menu'

const Footer = () => {



    return (

        // <div>      
        <div className='overlay'>
            {/* <div className = 'position'> */}
            <Grid container className='footer2'  spacing={1}>
            <Grid  item xs={2} md={1} >
            <a className='footer' href = "#Terms">Terms and Conditions  </a>
            </Grid>
            <Grid  item xs={2} md={1} >
            <div className='footer'>|</div>
            </Grid>
            <Grid  item xs={2} md={1} >
            <a className='footer' href = "#NIC">NIC Mail  </a>
            </Grid>
            </Grid>
            {/* </div> */}
            {/* <div> */}
            <Grid container  spacing={1}>
            <Grid  item xs={2} md={1} >
            <a className='footer' href = "#Policies">Website Policies  </a>
            </Grid>
            <Grid  item xs={2} md={1} >
            {/* <Divider orientation="vertical" flexItem /> */}
            <a className='footer' href = "#data">data.gov.in  </a>
            </Grid>
            </Grid>
            {/* </div> */}
        </div>
        
        // </div>

        )
    }
    
export default Footer