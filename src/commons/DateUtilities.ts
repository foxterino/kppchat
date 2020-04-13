import dateformat from 'dateformat';

export const formatMessageDate = (date: Date) => dateformat(date, 'HH:MM');
