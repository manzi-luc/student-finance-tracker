# student-finance-tracker

Student Finance Tracker
A small, accessible, responsive web app for students to record their spending, search it with regular expressions, and see simple statistics. Built with plain HTML, CSS and JavaScript (no frameworks).
Theme chosen: Student Finance Tracker
Live site (GitHub Pages): https://manzi-luc.github.io/student-finance-tracker/
Author:manzi-luc
Features
Add records with a description, amount, category and date. Every record gets a unique id, plus createdAt and updatedAt timestamps.
Live form validation with regular expressions. Error messages appear under each box while typing, and the form refuses to save until every rule passes.
Records table with a Delete button on each row (with a confirmation step).
Sorting by date (newest first), description (A to Z), and amount (low to high or high to low).
Live regex search on descriptions. The pattern is compiled safely, so a broken pattern such as ( shows a message instead of crashing the page. A case-insensitive checkbox switches the i flag on and off.
Spending limit: set in Settings. The dashboard announces the remaining amount politely, and announces going over the limit assertively (ARIA live region).
Responsive, mobile-first layout with breakpoints at about 360px (base), 768px and 1024px, plus a smooth colour transition on buttons.
Pages / sections
Section	Purpose
About	What the app does, and contact details
Dashboard	Totals, top category, 7-day chart, limit message
Records	Search, sort, and the records table
Add	The form for adding a record
Settings	Spending limit, import and export
Data model
{
  "id": "record_1760000000000",
  "description": "Lunch at cafeteria",
  "amount": 12.5,
  "category": "Food",
  "date": "2026-10-12",
  "createdAt": "2026-10-12T09:00:00.000Z",
  "updatedAt": "2026-10-12T09:00:00.000Z"
}
Records are saved in localStorage under the key finance:data.
Regex catalog
Form validation
Field	Pattern	Accepts	Rejects
Description	^\S(?:.*\S)?$	Lunch, Bus ride, A	Lunch (space at the start), Lunch (space at the end), empty text
Amount	^(0|[1-9]\d*)(\.\d{1,2})?$	12, 12.50, 0, 0.5	05, 12.345, -5, abc
Date	^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$	2026-10-15	2026-13-01, 2026-10-32, 2026-1-5, 15-10-2026
Category	^[A-Za-z]+(?:[ -][A-Za-z]+)*$	Food, Fast-food, Eating out	Food2, -Food, Food (trailing space)
Duplicate words (advanced)	\b(\w+)\s+\1\b	matches coffee coffee, the the cat	does not match coffee tea or fast-fast
How the advanced pattern works: \b is a word boundary, (\w+) captures a whole word as group 1, \s+ matches the spaces after it, and \1 is a back-reference that means "the exact same text group 1 captured". So the pattern finds a word that is immediately repeated.
Search examples
The search box accepts any valid regular expression. Examples to try:
Pattern	What it finds
lunch	descriptions containing "lunch"
(coffee|tea)	descriptions containing coffee or tea
\.\d{2}\b	text containing a number with cents
\b(\w+)\s+\1\b	descriptions with a repeated word
(	an invalid pattern, which shows a message and keeps all rows visible
The patterns for the form rules and the safe regex compiler come from the assignment brief.
Keyboard map
Key	Action
Tab / Shift + Tab	Move to the next / previous link, field or button
Enter	Follow a link, press a button
Space	Press a button, toggle the case-insensitive checkbox
Up / Down arrows	Change the selected option in a dropdown (sort, category)
First Tab on any page	Shows the Skip to Content link. Press Enter to jump to the main content
Enter / Esc in the delete confirmation	Confirm / cancel deleting a record
Every control can be reached and used with the keyboard alone, and the focused element always has a visible outline.
Accessibility notes
Semantic landmarks: header, nav, main, section, footer, with a logical heading order (one h1, then h2 for each section).
A "Skip to Content" link, hidden until it receives keyboard focus.
Every input has a label linked with for and id.
Visible focus outline on links, inputs, dropdowns and buttons (a different colour on the dark header).
Invalid fields are marked with aria-invalid, and error messages appear right below each field.
Delete buttons have an aria-label that names the record, for example "Delete Lunch".
The table has a caption and scope="col" on its column headers.
Status messages (search, import, settings) use role="status". The spending limit message uses a polite live region while under the limit and an assertive one when over it.
Colours were chosen for good contrast (dark text on a light background, white text on dark blue). Meaning is never carried by colour alone.
Touch targets for buttons are at least 44px tall.
Running the app and the tests
1.Clone or download the repository.
2.Open the folder in VS Code and install the Live Server extension.
3.Right-click index.html and choose Open with Live Server. (The scripts use ES modules, so the page must be served, not opened by double-clicking.)
4.To run the tests, open tests.html the same way. Every line should say PASS.
You can also use the live site linked at the top.
Testing
tests.html runs small assertions on each validator. It checks good and bad examples for the amount, description, date, category and duplicate-word rules, including edge cases, and prints PASS or FAIL for each.
Project structure
index.html
tests.html
seed.json
main.css
scripts/
  validator.js   regex validators
  state.js       the list of records, saving and loading
  ui.js          DOM updates, events, validation messages, sort, search, dashboard
  tests.js       assertions used by tests.html
planning/        wireframes, data model and accessibility plan (M1)
seed.json contains 12 records with edge cases (leap day, very small and very large amounts, zero, a repeated word, a single letter, special characters). Use Import in Settings to load it.
Known limitations
Editing an existing record is not implemented yet. A record can be deleted and added again.
Currency conversion and editable categories are not implemented. The app uses one currency.
The description rule does not collapse double spaces inside the text.
The duplicate-word pattern is covered by the validators and the tests, but it is not shown as a warning in the form yet. It is case-sensitive, so Coffee coffee is not flagged.
I couldn’t finish the database and saving with also the video explaining the codes.
Credits and AI use
This README were drafted with the help of an AI assistant, which the assignment allows for documentation and seed data.
All JavaScript, HTML and CSS were written by me. An AI assistant was also used to explain concepts and to help me read error messages while debugging.
