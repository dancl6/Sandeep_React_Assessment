import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Image from  '../../images/pdf-icon-4.jpg'
import Image2 from '../../images/download.jpg'
import {Grid} from '@mui/material'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [selected, setSelected] = useState([]);

  function onChange(event, item) {
    if (event.target.checked) {
      setSelected([...selected, item]);
    } else {
      setSelected((prev) =>
        prev.filter((currItem) => currItem.value !== item.value)
      );
    }
  }


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
      console.log(event.target.checked)
      if(event.target.checked === true){
        setChecked(checked + 1)
      } 
      if(event.target.checked === false){
        setChecked(checked - 1)
      }

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("indexing 2 is:", newValue)
    setChecked(0)
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    console.log("indexing is:", index)
  };
  console.log('number checked is:', checked)
  const [testData, setTestData] = useState([
    {index:0,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 1,name: "Application for allotment of Guest Accommodation", name2: "MEMBERS AMENITIES SECTION FORM"},
    {index: 2,name: "NICNET Application Form", name2: "I.T. SECTION (H&S) FORMS"},
    {index: 3,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 4, name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"},
    {index: 5,name: "Application for Car Park Label (for Sitting MP)", name2: "NOTICE OFFICE FORMS"}
  ]);

  const [testData2, setTestData2] = useState([
    {index:0,name: "Zero Hour", name2: "Rating of matter with permission"},
    {index: 1,name: "Short Notice Question", name2: "Issuing of Half-an-Hour Discussion"},
    {index: 2,name: "Half-an-Hour Discussion", name2: "Notice of my intention to call the Minister's attention"},
    {index: 3,name: "Calling Attention", name2: "Notice of my intention to call the Minister's attention"},
    {index: 4, name: "Short Duration Discussion", name2: "Notice of my intention to raise a discussion for short duration"}
  ]);


  return (
    <Box sx={{ bgcolor: 'background.paper'}}>
      { value === 1?    (  <div className='formsSelected'>{checked} Forms Selected</div>) : null   }

      <AppBar position="static">
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
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container   spacing={11}>
        {testData2.map(item => (

            <Grid  item xs={12} md={12} >
            <form  className='forms'>
          {/* <div>
            <label className = 'main'>
             <input className='checkmark' onChange= {handleCheckbox} type="checkbox" id={item.index} ></input>
              <span className = 'geekmark'></span>
            {item.name} 
            </label> 
          </div> */}
          <div>
          <h2 >
            {item.name}
          </h2>
          <h3>
            {item.name2}
          </h3>
          <div className = 'align-right'>
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
        <Grid container   spacing={11}>
        {testData.map(item => (

            <Grid  item xs={12} md={12} >
            <form  className='forms'>
          <div>
            <label className = 'main'>
             <input className='checkmark' onChange= {handleCheckbox} type="checkbox" id={item.index} ></input>
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
        <TabPanel value={value} index={2} dir={theme.direction}>
          Forms for New Members
        </TabPanel>
      </SwipeableViews>
      <Grid container   spacing={11}>
      <Grid  item xs={12} md={12} >
      <TablePagination
        component="div"
        count={100}
        // page={page}
        // onPageChange={handleChangePage}
        // rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        page={0}
        onPageChange={12}
        rowsPerPage={10}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Grid>
      </Grid>



    </Box>




  );
}