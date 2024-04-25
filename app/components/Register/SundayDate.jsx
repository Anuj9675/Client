'use client'
import React, { useState, useEffect } from 'react';

const SundayDate = () => {
  const [nextSunday, setNextSunday] = useState(getNextSunday());

  useEffect(() => {
    const interval = setInterval(() => {
      setNextSunday(getNextSunday());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to get the next upcoming Sunday date
  function getNextSunday() {
    let today = new Date();
    let dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    let nextSunday = new Date(today); // Clone today's date

    // Calculate the days until next Sunday
    let daysUntilSunday = 0;
    if (dayOfWeek !== 0) {
      daysUntilSunday = 7 - dayOfWeek;
    }

    // Set the date to next Sunday
    nextSunday.setDate(today.getDate() + daysUntilSunday);

    return nextSunday;
  }

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = nextSunday.toLocaleDateString('en-US', options);

  return <div className="text-sm">{formattedDate}</div>;
};

export default SundayDate;
