import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';

// The Single_cart component receives a course object and an addCourse function as props
const Single_cart = ({ course, addCourse }) => {
    const { cover, title, details, price, credit } = course;

    return (
        <div className='w-11/12 h-[500px] m-auto mt-6 ml-10 bg-slate-50 p-4 rounded-lg flex flex-col justify-between '>
            <div>
            <img className='w-full my-2' src={cover} />
            <h1 className='my-3 font-bold text-2xl'>{title}</h1>
            <p className='break-words font-medium text-slate-500'>{details}</p>
            </div>
            <div>
            <div className="flex justify-between my-3">
                <p className='flex items-center gap-2 font-medium text-slate-600'> <BiDollar />Price :  {price}</p>

                <p className='flex items-center gap-2 font-medium text-slate-600'> <BsBook /> Credit : {credit} hr</p>
            </div>
            {/* Button to select the course */}
            <button className='w-full bg-blue-500 p-3 text-2xl text-white rounded-lg' onClick={() => addCourse(course)}>Select</button>
            </div>
        </div>
    );
};

// Define PropTypes for course (object) and addCourse (function)
Single_cart.propTypes = {
    course: PropTypes.object.isRequired,
    addCourse: PropTypes.func.isRequired
};

export default Single_cart;
