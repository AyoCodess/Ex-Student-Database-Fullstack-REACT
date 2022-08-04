# Ex-Student Database Client App

**Note** This project originally had an API folder which I have since removed, due to the original API I was consuming not working any longer. This gave me idea of creating my own API for some of my projects going forward.

**Link to API landing page:** https://ayocodes-api.up.railway.app/

### Live link

https://student-database-ayocodes.netlify.app/

### About

A collection of schools want a web application to help them manage the contact information they hold on ex-students

### Tech Stack

React, Tailwind CSS, Tailwind UI, Headless UI React-spinner and Axios

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

1. Date input field only accepts text input in dd/mm/yyyy format
2. Input field validation
3. Database will not update if any of the input fields are left empty. We also have a simple toast too show the errors.
4. Error modal will timeout after 8 seconds, so the user does not have to exit it manually
5. List automatically sorts by User ID when loaded for the first time and when updated subsequently
6. Universal fetch function, reducing code.

### What could be improved

1. More input field error validation alerts, i.e if a user enters a number instead of a string, they should get feedback right away. right now we have a simple toast alert and console errors
2. Add list sorting buttons i.e sort by name ascending, descending and school
3. Add pagination
4. Add cooler loading states
5. Cache API data if nothing has been changed on the front end
6. Ability to hide contact rows

### My Experience (Front-end design and API requests only)

This was a great challenge for me! I particularly enjoyed envisioning the design in my head, mocking it and then building it, while keeping the user experience at the front and centre of everything I implemented. As I was building, new ideas for features came up, but for an MVP and due to the time constraints of the project, focusing on core features and getting it right has to take priority.

To ensure quality design and implementation, considering data flow logic, state management, and bug fixing, the whole project took me a work 10 hours to complete. If I were to perform this task again I‘m confident I could significantly reduce that time down to about 4 to 7 hours if I had some UI components to work with and accoutring for the testing and the unknown.
