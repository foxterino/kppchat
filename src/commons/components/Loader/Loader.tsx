import React from 'react';

interface LoaderProps {
  isLoading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading = true }) => {
  return isLoading ? <div>Loading...</div> : null;
};
