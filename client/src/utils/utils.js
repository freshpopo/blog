
export function timestamp(date) {
  return dateOffset(date).toISOString().substring(11,19)
}

export function datestamp(date) {
  return dateOffset(date).toISOString().substring(0,10).replaceAll('-', '.');
}

export function dateTimeStamp(date) {
  return dateOffset(date).toISOString().replace('T', ' ').substring(0,19).replaceAll('-', '.');
}

export function dateOffset(date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset);
}

export function emptyCheck(value) {
  return value || value !== undefined
}