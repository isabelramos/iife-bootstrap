### Project Description:

Exercise Criteria:

Create a donation submission page for a Walk-A-Thon that allows donors to enter their name, email, dollar amount & whether their donation is lump sum or per lap.

The project should have one HTML file that has:

+ A form for user information submission.
+ The ability to select whether the donation will be a single amount or per lap.
+ A table to display each donor's submission information.
+ A button labeled `Donate` to process the submission.
+ A button labeled `Cancel` to clear the submission form.

The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. `{name: "John Donut", pledge: 70}`

All donor information objects should be stored in a private array in an IIFE.

The donor array cannot be accessed by the other modules except through an accessor (getter) method.

The IIFE should expose, in its public interface, a method named `addDonor` that accepts a single argument. That argument's value should be the user information object.

Create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

For display on the page, use Bootstrap to style the form and table elements. Use Bootstrap's grid system and styling classes to get the following effects:

+ At desktop size display the table on the left and form on the right with some space around the sides.
+ The page should have the same display on a tablet in landscape mode, but with no space at the sides.
+ On mobile/vertical tablet the table should display above the form.
+ The table entries should be alternately striped.

### Technologies used:

HTML, CSS (Bootstrap), Javascript.

### How to run this project (Node must be installed on your machine):

```
git clone https://github.com/isabelramos/iife-bootstrap.git
cd iife-bootstrap
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributors:
[Isabel Ramos](https://github.com/isabelramos)