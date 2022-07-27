const greetingMesage = (date: Date) => {
  date = new Date();
  let currentHour: number = date.getHours();
  if (currentHour < 12 && currentHour > 0) {
    return "Good Morning";
  } else if (currentHour < 16 && currentHour > 12) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

export default greetingMesage;
