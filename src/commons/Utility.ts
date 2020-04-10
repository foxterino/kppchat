export const isNil = (value: any) => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    (isObject(value) && Object.keys(value).length === 0) ||
    (isString(value) && value.trim().length === 0)
  );
};

export const isUndefined = (value: any): value is undefined => {
  return value === undefined;
};

export const isNull = (value: any): value is null => {
  return value === null;
};

export const isString = (value: any): value is string => {
  return typeof value === 'string';
};

export const isObject = (value: any): value is object => {
  return typeof value === 'object';
};

export const noop = () => {};
