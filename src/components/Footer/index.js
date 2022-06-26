import {Box, Container} from '@mui/material'
import PersonImage from  '../../images/person.jpg'
import PageImage from '../../images/page.jpg'
import DownArrowImage from '../../images/down-arrow.jpg'

const Footer = () => {
    return (   

<Box key='footer-box'>
  <Box className='background'>
    <div className='overlay'>
      <Container>
      <Container >
      <a className='text-dec' href = "#Terms">Terms and Conditions | </a>
      <a className='text-dec' href = "#NIC">NIC Mail  </a> 
      </Container>
      <Container>
      <a className='text-dec' href = "#Policies">Newspapers | </a>
      <a className='text-dec' href = "#data">india.gov.in  </a>
      </Container>
      <Container>
      <a className='text-dec' href = "#Policies">Website Policies | </a>
      <a className='text-dec' href = "#data">data.gov.in  </a>
      </Container>
      </Container>
      <Container >
      <img  alt =  '' src= {PageImage}/>
      <a className='text-dec' href = "#Policies">Feedback  </a>
      <img  alt =  '' src= {DownArrowImage}/>
      <a className='text-dec' href = "#data">Contact Us  </a>
      <img  alt =  '' src= {PersonImage}/>
      {/* <div> */}
      <a className='text-dec' href = "#data">Visitor's Center <span>109657138</span>  </a>
      {/* </div> */}
      </Container>
      <Container>
      <p className='text-dec'>This site is designed and hosted by National Information Centre
      </p>
      </Container>
      <Container>

      </Container>
    </div>
  </Box>
</Box>




        // <div className='overlay'>
        //   <Grid container className='margin-top'  spacing={11}>

        //     <Grid item>

        //         <a className='text-dec' href = "#Terms">Terms and Conditions | </a> 
        //     </Grid>
        //     <Grid item>  
        //         <a className='text-dec' href = "#NIC">NIC Mail  </a>

        //     </Grid>
        //     <Grid item >

        //         <a className='text-dec' href = "#Policies">Newspapers | </a>
        //     </Grid>
        //     <Grid item>
        //         <a className='text-dec' href = "#data">india.gov.in  </a>

        //     </Grid>
        //     <Grid item>

        //         <a className='text-dec' href = "#Policies">Website Policies | </a>
        //     </Grid>
        //     <Grid item>
        //         <a className='text-dec' href = "#data">data.gov.in  </a>

        //     </Grid>
        //     <Grid item>

        //         <a className='text-dec' href = "#Policies">Feedback | </a>
        //     </Grid>
        //     <Grid item>
        //         <a className='text-dec' href = "#data">Contact Us |  </a>
        //     </Grid>
        //     <Grid item>
        //         <a className='text-dec' href = "#data">Visitor's Center  </a>
        //     </Grid>
        //     <Grid item>


        //     </Grid>
        //     </Grid>
        // </div>
        )
    }
    
export default Footer