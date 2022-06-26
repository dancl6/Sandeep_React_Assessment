import {Box, Container} from '@mui/material'
import PersonImage from  '../../images/person.jpg'
import PageImage from '../../images/page.jpg'
import DownArrowImage from '../../images/down-arrow.jpg'
// Footer component to display image and links at bottom of page
const Footer = () => {
    return (   

<Box key='footer-box'>
  <Box className='background'>
    <div className='overlay'>
      <div className='relative'></div>
      <Container className='absolute'>
      <Container className='space-between'>
      <a className='text-dec space-between2' href = "#Terms">Terms and Conditions  </a>
      <a className='text-dec' href = "#NIC">NIC Mail  </a> 
      </Container>
      <Container className='space-between'>
      <a className='text-dec space-between2' href = "#Newspapers">Newspapers  </a>
      <a className='text-dec' href = "#data">india.gov.in  </a>
      </Container>
      <Container>
      <a className='text-dec space-between2' href = "#Policies">Website Policies  </a>
      <a className='text-dec' href = "#data">data.gov.in  </a>
      </Container>
      </Container>
      <Container className='absolute2' >
      <img  alt =  '' src= {PageImage}/>
      <a className='text-dec' href = "#Feedback">Feedback  </a>
      <img  alt =  '' src= {DownArrowImage}/>
      <a className='text-dec' href = "#Contact">Contact Us  </a>
      <img  alt =  '' src= {PersonImage}/>
      <a className='text-dec' href = "#Visitors">Visitor's Center <span>109657138</span>  </a>
      </Container>
      <Container>
      <p className='text-dec absolute3'>This site is designed and hosted by National Information Centre
      </p>
      </Container>
      <Container>

      </Container>
    </div>
  </Box>
</Box>
        )
    }
    
export default Footer