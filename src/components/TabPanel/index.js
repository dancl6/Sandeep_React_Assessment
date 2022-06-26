import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Image from  '../../images/pdf-icon-4.jpg'
import Image2 from '../../images/download.jpg'
import {Grid, Typography} from '@mui/material'

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = useState(0)
 const  handleCheckbox = event => {

      if(event.target.checked === true){
        setChecked(checked + 1)
      } 
      if(event.target.checked === false){
        setChecked(checked - 1)
      }

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setChecked(0)
  };


  const testData = [
    {index:0,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 1,name: "Application for allotment of Guest Accommodation", name2: "MEMBERS AMENITIES SECTION FORM"},
    {index: 2,name: "NICNET Application Form", name2: "I.T. SECTION (H&S) FORMS"},
    {index: 3,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 4, name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 5,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"}
  ];

  const testData2 = [
    {index:0,name: "Zero Hour", name2: "Rating of matter with permission"},
    {index: 1,name: "Short Notice Question", name2: "Issuing of Half-an-Hour Discussion"},
    {index: 2,name: "Half-an-Hour Discussion", name2: "Notice of my intention to call the Minister's attention"},
    {index: 3,name: "Calling Attention", name2: "Notice of my intention to call the Minister's attention"},
    {index: 4, name: "Short Duration Discussion", name2: "Notice of my intention to raise a discussion for short duration"}
  ];

  function fun() {
    console.log('hello')
    
  }
  return (
    <Box key='tab-box'  sx={{ bgcolor: 'background.paper'}}>


      <AppBar className='box-tab' position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className='tab'
        >
          <Tab className = 'forms' label="Parliamentary Notice forms" {...a11yProps(0)} />
          <Tab className = 'forms' label="Application Forms" {...a11yProps(1)} />
          <Tab className = 'forms' label="Forms for New Members" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <input className=' search2' placeholder="🔎Search for a word"></input>
      { value === 1?    (  
      <div>
      <div className='formsSelected same-line'>{checked} Forms Selected <span className='same-line2'>v   Download Forms   x</span></div>

      </div>
      ) : null   }
      <div>
        <TabPanel  value={value} index={0} dir={theme.direction}>
        <Grid  container  >
        {testData2.map(item => (

            <Grid   item xs={12} md={12} key={item.index} >
            <form   className='forms tab-panel'>

              <div>
                <h3 >
                  {item.name}
                </h3>
                <h4>
                  {item.name2}
                </h4>
                <div className = 'float-right2'>
                <img  alt =  '' src= {Image2}/>
                <select className='drop-down2' name = "Business">
                                  
                </select>
                </div>
              </div>
          </form>
            </Grid>
      ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container   >
        {testData.map(item => (

            <Grid  item xs={12} md={12} key={item.index} >
            <form  className='forms'>
          <div>
            <label className = 'main'>
             <input  onChange= {handleCheckbox} type="checkbox" id={item.index} ></input>
              <span className = 'geekmark'></span>
            {item.name} 
            </label> 
          </div>
          <div className='blue-back'>
            {item.name2}
          </div>
          <img  alt =  '' src= {Image}/>
          <div className = 'float-right'>
          <img  alt =  '' src= {Image2}/>
          <select className='drop-down2' name = "Business">
                            
          </select>
          </div>
          </form>
            </Grid>
    

      ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} key= "tab-forms">
          Forms for New Members
        </TabPanel>
      </div>
      <Grid container   spacing={11}>
      <Grid  item xs={12} md={12} >
      <TablePagination
        component="div"
        count={100}
        page={0}
        onPageChange={fun()}
        rowsPerPage={10}

      />
      </Grid>
      </Grid>
    </Box>
  );
}