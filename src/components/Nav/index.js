import {Grid} from '@mui/material'
import Image from  '../../images/RajyaSabhaPic.jpg'
// Navbar component to create navbars at top of page
const Nav = () => {

    return (
        <div key = 'nav-div'>
            <Grid key = 'nav-grid1' container className='margin-top'  spacing={11}>
                <Grid  item >
                    <a className='text-dec2' href = "#EN" >EN </a>
                </Grid>
                <Grid  item >
                    <a className='text-dec2'  href = "#Skip">Skip to main content  </a>
                </Grid>
                <Grid item >
                    <a className='text-dec2' href = "#ScreenReader">Screen Reader Access</a>
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
                    <input className='search' placeholder="🔎Search here"></input>
                </Grid>  
            </Grid>
            <hr key='nav-hr-element' className="solid" ></hr>
            <Grid key= 'nav-grid2' container className='line2'>
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
            <a key='nav-downloads' className='downloads' href = "#downloads">Home /Downloads</a>
            <div key='nav-div-downloads' className='large-downloads'>Downloads</div>
        </div>
    )
}

export default Nav