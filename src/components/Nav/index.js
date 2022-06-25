import {Grid, Divider, createTheme} from '@mui/material'
import Image from  '../../images/RajyaSabhaPic.jpg'
import { slide as Menu } from 'react-burger-menu'
const theme = createTheme()
const Nav = () => {



    return (

        <div>

            <Grid container className='line'  spacing={11}>
                <Grid  item >
                <a className='text-dec' href = "#EN" >EN </a>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid  item >
                <a className='text-dec'  href = "#Skip">Skip to main content  </a>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item >
                <a className='text-dec' href = "#ScreenReader">Screen Reader Access</a>
                </Grid>                
                <Grid  item >
                <li className='printer push-right' >🖨️</li>
                </Grid>
                <Grid  item >
                <li className='letters' >A-</li>
                </Grid>
                <Grid item >
                <li className='letters'>A</li>
                </Grid>
                <Grid item >
                <li className='letters'>A+</li>
                </Grid>
                <Grid  item >
                <li className='letter-black'>A</li>
                </Grid>
                <Grid  item >
                <li className='letter-bold'>A</li>
                </Grid>
                <Grid  item>
        
                <input placeholder="🔎Search here"></input>
                </Grid>  
            </Grid>

            <Grid container className='line2'>
                <Grid  item >
                <img className='raj-img' alt =  '' src= {Image}/>
                </Grid>                
                <Grid  item >
                    <form  >          
                        <select className='drop-down' name = "About">
                            <option >About</option>
                        </select>
                    </form>
                </Grid>
                <Grid  item >
                    <form  >          
                        <select className='drop-down' name = "Members">
                            <option >Members</option>
                        </select>
                    </form>
                </Grid>
                <Grid  item >
                     <form  >          
                        <select className='drop-down' name = "Business">
                            <option >Business</option>
                        </select>
                    </form>
                </Grid>
                <Grid  item >
                    <form  >          
                        <select className='drop-down' name = "Debates">
                            <option >Debates</option>
                        </select>
                    </form>
                </Grid>
                <Grid  item >
                   <form  >          
                        <select className='drop-down' name = "Committees">
                            <option >Committees</option>
                        </select>
                    </form>
                </Grid>                
                <Grid  item >
                   <form  >          
                        <select className='drop-down' name = "Business">
                            <option >Business</option>
                        </select>
                    </form>
                </Grid>
                <Grid  item >

                    <div className='more '>
                        More
                    </div>


                </Grid>
                <Grid  item >
                <button className='login' href = "#Login">Login</button>
                </Grid>
            </Grid>

            <a className='downloads' href = "#downloads">Home /Downloads</a>
            <div className='large-downloads'>Downloads</div>

        </div>


    )
}

export default Nav