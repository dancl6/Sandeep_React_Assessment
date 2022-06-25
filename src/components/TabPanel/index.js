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
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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

  return (
    <Box sx={{ bgcolor: 'background.paper'}}>
      <div className='formsSelected'>{checked} Forms Selected</div>
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
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
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
          </form>
            </Grid>
    

      ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Application Forms
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Forms for New Members
        </TabPanel>
      </SwipeableViews>
      <TablePagination
        component="div"
        count={100}
        // page={page}
        // onPageChange={handleChangePage}
        // rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        page={8}
        onPageChange={12}
        rowsPerPage={10}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />




    </Box>




  );
}