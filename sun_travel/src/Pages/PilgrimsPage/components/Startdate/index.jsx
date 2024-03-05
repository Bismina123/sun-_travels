import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import styled from "styled-components";

function Startdate({startDate,setStartDate,endDate,setEndDate}) {
  const minDate = dayjs();
  const today = dayjs();
  
 
  const handleStartDateChange = (date) => {
    setStartDate(date);
    updateDurationCount(date, endDate);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    updateDurationCount(startDate, date);
  };
  const [durationCount, setDurationCount] = useState("1");
  const updateDurationCount = (start, end) => {
    const durationCount = end.diff(start, "day");
    setDurationCount(durationCount);
    // document.querySelector('.durationdateCount').innerText = `Duration: ${durationCount} days`;
  };
  return (
    <DateWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Start Date"
            minDate={minDate}
            format="DD/MM/YYYY"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div className="durationdateCount">
        <p>{durationCount}</p>
        <h2>Night(s)</h2>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="End Date"
            minDate={minDate}
            format="DD/MM/YYYY"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </DateWrapper>
  );
}

export default Startdate;
const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  @media only screen and (min-width: 300px) and (max-width: 768px) {
     display: block;
    }
  .durationdateCount {
    font-weight: bolder;
    @media only screen and (min-width: 300px) and (max-width: 1000px) {
    font-size: 13px;
    }
    @media only screen and (min-width: 300px) and (max-width: 1300px) {
    font-size: 17px;
    }
    h2{
      padding: 0px 20px;
    font-weight: 300;
    font-family: 'lato';
    }
  }

`;
