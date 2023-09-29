import { useEffect } from "react";
import { useState } from "react";
import Single_cart from "./Single_cart";
import PropTypes from 'prop-types';

// The All_carts component receives the addCourse function as a prop
const All_carts = ({ addCourse }) => {
  // State to store the course data fetched from 'course.json'
  const [courseCart, setUpdate] = useState([]);

  // Fetch and update course data when the component mounts
  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setUpdate(data))
  }, []);

  return (
    <div className='grid md:grid-cols-3 md:w-3/4'>
      {/* Map through courseCart and render Single_cart components for each course */}
      {
        courseCart.map(course => (
          <Single_cart
            key={course.id}
            course={course}
            addCourse={addCourse}
          ></Single_cart>
        ))
      }
    </div>
  );
};

// Define PropTypes for addCourse function
All_carts.propTypes = {
  addCourse: PropTypes.func,
};

export default All_carts;
