
 ## Project features 


- <h3>Smart Credit Management:</h3> Stay within your credit limit  of 20 credits while selecting courses. Avoid accidentally picking the same course twice, thanks to a friendly reminder.

- <h3>Error Alerts with Toasts:</h3>The system catches common errors, like duplicate course selection and exceeding credit limits, and notifies you with pop-up messages (like reminders from a friend).

- <h3>Real-Time Cost Tracking:</h3>Keep tabs on your spending as you choose courses. Your total course cost is calculated and displayed, just like a running bill at a restaurant.


## State Management :

- **Selected Courses:** I used the `useState` hook to create and manage the `courses` state. This state array stored the titles of the selected courses. Whenever a user selected a course, I updated this state by adding the course's title to the array.

   ```javascript
   const [courses, setCourses] = useState([]);
   ```

- **Remaining Hours:** The `remHour` state tracked the remaining credit hours. Whenever a course was selected, I deducted its credit value from this state to keep it updated.

   ```javascript
   const [remHour, setRemHour] = useState(20);
   ```

- **Total Price:** To calculate the total price of the selected courses, I maintained a `totalPrice` state. This state was updated by adding the price of each selected course.

   ```javascript
   const [totalPrice, setPrice] = useState(0);
   ```

- **Error Handling:** To provide user-friendly feedback, I utilized the `react-hot-toast` library to display toasts. These toasts were triggered based on specific conditions, such as selecting the same course twice or exceeding the credit limit.

- **Updating State:** Whenever a user selected a course, I updated the relevant state variables (`courses`, `remHour`, `totalPrice`) using the `setCourses`, `setRemHour`, and `setPrice` functions, respectively.