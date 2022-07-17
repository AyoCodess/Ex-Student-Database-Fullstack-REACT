# School Manager Client-side App

### Live link

TBA

### About

A collection of schools want a web application to help them manage the contact information they hold on ex-students.

### Tech Stack

1. React, Tailwind CSS, Tailwind UI, Headless UI React-spinner and Axios.

### Approach

1. Mobile first
2. Intuitive design
3. Maintainable code

### Initial Plan

<img src="https://i.imgur.com/bziVilt.png" style="width: 200px; height 200px;">

### Core Features

1. Search through contacts by Name, School, DOB and Phone
2. Add new contacts
3. Delete contacts
4. Update details of existing contacts
5. Contact count
6. Loading states

### Other features

1. Date input field only accepts text input in dd/mm/yyyy form.
2. Database will not update if any of the input fields are left empty, check console for validation, we also also have a simple toast too show that. Go to Modal.js line 77 to view the logic.
3. Error modal will timeout after 8 seconds.4.
4. List automatically sorts by User ID when list is updated

### What could be improved

1. Input field error validation alerts, right now we have a toast alert and console errors.
2. Add list sorting functions. i.e sort by name ascending, descending and school.
3. Add pagination.
4. Add cooler loading states
5. Cache api data if nothing has changed on the front end.
6. Refactor code, could be streamlined.
