function formatTime(hours, minutes, seconds, ampm) {
    return `${hours.toString()}:${minutes.toString()}:${seconds.toString()} ${ampm}`;
  }
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = 'AM';
  
    // Convert hours to 12-hour format and determine AM/PM
    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }
  
    const time24 = formatTime(hours, minutes, seconds, '');
    const time12 = formatTime(hours, minutes, seconds, ampm);
  
    console.log(`24-Hour Format: ${time24}`);
    console.log(`12-Hour Format: ${time12}`);
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);