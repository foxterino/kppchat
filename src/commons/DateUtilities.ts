import dateformat from 'dateformat';

export const formatMessageDate = (date: string | number | Date) => {
  return dateformat(date, 'HH:MM');
};
