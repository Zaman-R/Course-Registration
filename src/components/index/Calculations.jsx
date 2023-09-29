import SelectedCourses from "./SelectedCourses";
import PropTypes from 'prop-types';

// The Calculations component receives courses, remHour, and totalPrice as props
const Calculations = ({ courses, remHour, totalPrice }) => {
  return (
    <div className="w-auto my-auto mt-6 ml-10 break-word bg-slate-50 p-5 pr-8 rounded-lg flex sm:flex-wrap">
      <div>
        {/* Display the remaining hours */}
        <h1 className="font-bold text-2xl my-4 break-word text-blue-700">Credit Hour Remaining {remHour} hr</h1>
        <div className="w-full h-0.5 rounded-lg bg-gray-300"></div>
        
        {/* Display the course list */}
        <h1 className="font-bold text-2xl my-3">Course Name</h1>
        <ol>
          {
            // Map through courses and render SelectedCourses for each course
            courses.map((x, idx) => <SelectedCourses key={idx} x={x} count={idx + 1}> </SelectedCourses>)
          }
        </ol>

        <div className="w-full h-0.5 rounded-lg bg-gray-300"></div>
        
        {/* Display the total credit hours */}
        <h2 className="text-xl my-4 font-medium text-slate-600">Total Credit Hour : {20-remHour}</h2>
        <div className="w-full h-0.5 rounded-lg bg-gray-300"></div>
        
        {/* Display the total price */}
        <h2 className="my-4 font-medium text-slate-600 text-2xl">Total Price : {totalPrice} USD</h2>
      </div>
    </div>
  );
};

// Define PropTypes for courses, remHour, and totalPrice
Calculations.propTypes = {
  courses: PropTypes.array,
  remHour: PropTypes.number,
  totalPrice: PropTypes.number
};

export default Calculations;
