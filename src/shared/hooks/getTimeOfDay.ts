export const getTimeOfDay = (time: string) => {
  const [hours] = time.split(':').map(Number);

  if (hours >= 1 && hours <= 12) {
    return 'AM';
  } else {
    return 'PM';
  }
};
