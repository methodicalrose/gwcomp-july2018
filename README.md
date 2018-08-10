# gwcomp-july2018

Geekwise Student Competition entry for July 2018

This is a website/application which is intended to help users come up with ideas for a story (via the random writing prompt generator), and allow them to write, save, and edit their prose.

The prompt generator works using case statements, which selects three random words that users can potentially add together into a short story, poem, or whatever else they like. The "Generate Prompt" button can be used as many times as you want, and the prompt text will replace itself each time.
---UPDATE---
The prompt generator now works using arrays, whose values are determined by randomly selecting the index number of the text values based on the length of the array. This allows for any length of array to be used, making for a much more dynamic function.

Users are presented with a form which requires a title and text body input. A function is in place which will display their text input(read-only) on the page when they click the Submit button.

NOTE: Ideally, this text will be displayed in a stylized fashion on the archives page, but as of today, that has not been accomplished. The form will direct you to the archives page, but the text will still display (unstylized) on the New Project page.

Left to do:
- Get a server to allow display of form data on a separate HTML file
- Make the text editable
- Allow users to save multiple text projects, organized by date in the archives (ideally, but a bit ambitious)
