import React from "react";
import { render } from "react-dom";
import Select from 'react-select'; 
import Button from '@material-ui/core/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Searchbox from "./Searchbox/Searchbox"


class SearchFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(Date.now()  - ( 3600 * 1000 * 24)), //initializes to one day prior 
      endDate:  new Date(),  //initializes to current date
      searchString: "", 
      indexes: [], 
      error: "",
      disabled: false
    };
  }

  setStartDate = (date) => {
    if(date > this.state.endDate) {
      alert("Invalid date! Start date must be before end date.");
    } else {
      this.setState(state => ({
        startDate: date
      }));
    }
  }

  setEndDate = (date) =>  {
    if(date < this.state.startDate) {
      alert("Invalid date! End date must be after start date.");
    } else {
      this.setState(state => ({
        endDate: date
      }));
    }
  }

  setSearchString = (searchString) => {
    if (typeof searchString !== 'undefined' && searchString != "") {
      this.setState(state => ({
        searchString: searchString
      }));
    }
  }

  onIndexSelectChange = (values) => {
    //extract name of selected indices and set state 
    let index_names = values.map((index_object) => index_object.value)
    this.setState(state => ({
      indexes: index_names
    }));
  }  

  performSearch = () =>  {
    alert("New start date is: " + this.state.startDate); 
    alert("New end date is: " + this.state.endDate); 
    alert("Search text is: " + this.state.searchString);
    alert("Selected Indices: " + this.state.indexes);
  } 


  render() {
    const {startDate, endDate} = this.state;

    const indexOptions = [
      { label: 'SmartCore CGSR', value: 'smartcore-cgsr-*' },
      { label: 'SmartCore CIAM', value: 'smartcore-ciam-*' },
      { label: 'SmartCore ECIF', value: 'smartcore-ecif-*' },
      { label: 'SmartScore EPM', value: 'smartcore-epm-*' },
      { label: 'SmartCore HubBPM', value: 'smartcore-hubbpm-*' }
    ]

    const dropdownStyles = {
      control: styles => (
        { ...styles, backgroundColor: 'white', fontSize: 14 }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          fontSize: 14, 
          backgroundColor: 'white',
          color: '#101010',
          cursor: isDisabled ? 'not-allowed' : 'default'
        };
      }
    };
  
    return (
      <div>
        <Searchbox onChange={this.setSearchString}></Searchbox> 

        <DatePicker 
          selected={startDate} 
          showTimeSelect 
          onChange={date => this.setStartDate(date)} 
        />
        
        <DatePicker 
          selected={endDate} 
          showTimeSelect 
          onChange={date => this.setEndDate(date)} 
        />

        <Select 
          isMulti
          options={indexOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={this.onIndexSelectChange}
          styles={dropdownStyles}
        />
      
        <Button variant="contained" color="primary" disableElevation onClick={this.performSearch}>
          Search
        </Button>

      </div>
    );
  }
}


export default SearchFilters; 