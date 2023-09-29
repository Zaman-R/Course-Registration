import { useState } from 'react'
import './App.css'
import All_carts from './components/index/All_carts'
import Calculations from './components/index/Calculations'
import Header from './components/index/Header'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  // State for storing selected courses and remaining hours
  const [courses, setCourses] = useState([]) // Stores selected courses
  const [remHour, setRemHour] = useState(20) // Stores remaining hours
  const [totalPrice, setPrice] = useState(0) // Stores the total price of selected courses

  // Function to add a course
  const addCourse = (x) => {
    if (!courses.includes(x.title)) {
      // Create a new array with the selected course title
      const newCourses = [...courses, x.title];

      // Check if adding the course won't exceed the remaining hours
      if (remHour - x.credit >= 0) {
        setRemHour(remHour - x.credit); // Subtract course credit from remaining hours
        setCourses(newCourses); // Update the selected courses
        setPrice(totalPrice + x.price); // Update the total price
      } else {
        // Alert if adding the course exceeds remaining hours
        toast.error("Exceeded the limit of your Remaining Credit !!");
      }
    } else {
      // Alert if the course is already selected
      toast.error("You Cannot Select twice !!");
    }
  }

  return (
    <>
      <Header></Header> {/* Render the Header component */}
      <Toaster />
      <main className='flex'>
        <All_carts addCourse={addCourse}></All_carts> {/* Render the All_carts component and pass the addCourse function as a prop */}
        <Calculations courses={courses} remHour={remHour} totalPrice={totalPrice}></Calculations> {/* Render the Calculations component and pass selected courses and remaining hours as props */}
      </main>
    </>
  )
}

export default App;
