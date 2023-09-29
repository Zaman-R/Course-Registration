import PropTypes from 'prop-types';

// The SelectedCourses component receives x (course name) and count (numeric count) as props
const SelectedCourses = ({ x, count }) => {
  
  return (
    <div className='my-3 font-medium text-slate-600'>
      <ol>
        {/* Display the numeric count and course name */}
        <li>{count}. {x} </li>
      </ol>
    </div>
  );
};

// Define PropTypes for x (course name) and count (numeric count)
SelectedCourses.propTypes = {
  x: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default SelectedCourses;
