import { ClipLoader } from 'react-spinners';

const Spinner = ({ color = '#E44848', size = 12 }) => {
  return <ClipLoader color={color} size={size} aria-label="Loading Spinner" />;
};

export default Spinner;
