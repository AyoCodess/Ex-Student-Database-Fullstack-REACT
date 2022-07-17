# Ex-Student Database Client App

### Live link

https://student-database-ayocodes.netlify.app/

### About

A collection of schools want a web application to help them manage the contact information they hold on ex-students.

### Tech Stack

1. React, Tailwind CSS, Tailwind UI, Headless UI React-spinner and Axios.

### Approach

1. Mobile first
2. Intuitive design
3. Maintainable code

### Initial Plan

<img src="https://i.imgur.com/bziVilt.png" style="width: 400px; height 400px;">

### Core Features

1. Search through contacts by Name, School, DOB and Phone
2. Add new contacts
3. Delete contacts
4. Update details of existing contacts
5. Contact count
6. Loading states

### Other features

1. Date input field only accepts text input in dd/mm/yyyy form.
2. Database will not update if any of the input fields are left empty, check console for validation. We also also have a simple toast too show the error. Go to Modal.js line 77 to view the logic.
3. Error modal will timeout after 8 seconds, so the user does not have to exit it manually.
4. List automatically sorts by User ID when the list is updated.

### What could be improved

1. Input field error validation alerts, right now we have a toast alert and console errors.
2. Add list sorting functions. i.e sort by name ascending, descending and school and associated buttons.
3. Add pagination.
4. Add cooler loading states
5. Cache api data if nothing has changed on the front end.
6. Refactor code, could be streamlined.
7. When updating a student, their current details should populate in the form.

### My Experience

This was a great challenge for me! I particularly enjoyed envisioning the design in my head and building it accordingly while keeping the user experience at the front and centre of everything I implemented. As i was building new ideas for features came up, but for an MVP and due to the time constraints of the project, focusing on core features and getting it right took has to take priority.

To ensure quality design and implementation, considering data flow logic, state management, and bug fixing, I needed more than the expected 1-2 hours to complete the task. I also ran into some brief trouble with the API (unexpectedly working with Axios), the whole project took me a work day to complete. That said, if I were to perform this task again I‘m confident I could significantly reduce that time down to about 4 hours if i had the designs.
