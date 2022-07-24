## 2.0.21 (July 24, 2022)
- Fixed duplicate answers on every refresh

## 2.0.20 (July 23, 2022)
- Added woff and woff2 formats for existed fonts

## 2.0.19 (July 11, 2022)
- Fixed answers view not react on adding answers when form has no answers

## 2.0.18 (July 10, 2022)
- Fixed remaining responses when switching to a new tab after rejecting unsaved changes in confirmation dialogue

## 2.0.17 (July 3, 2022)
- Revert changes with deleting *answers* field from Firestore while new structure is creating

## 2.0.16 (July 3, 2022)
- Fixed going back to previous page from form page

## 2.0.15 (July 1, 2022)
- Allow creator to enter on dashboard

## 2.0.14 (June 30, 2022)
- Fixed crash app when drawing answers from empty form or filtered so that the draw would not give any results 

## 2.0.13 (June 28, 2022)
- Fixed remaining answers after switching form
- Fixed misspellings in creating form field algorithm

## 2.0.12 (June 26, 2022)
- Fixed no changing form id when other user logged in
- Fixed set form id on creating new user
- Display alert after successful user add
- Fixed adding new user with new Firestore structure

## 2.0.11 (June 26, 2022)
- Add blocking navigation when are some unsaved changes on answers table
- Allows to enter nested routes

## 2.0.10 (June 16, 2022)
- Change saving changes icon to floating button

## 2.0.9 (June 13, 2022)
- Change preparing form link on switching form card

## 2.0.8 (June 13, 2022)
- Change preparing form link on switching form card

## 2.0.7 (June 13, 2022)
- Refactor preparing link form

## 2.0.6 (June 13, 2022)
- Change *div* with link to *Link* component

## 2.0.5 (June 12, 2022)
- Fixed immediately redirecting to 404 after log in
- Fixed flashing page content immediately after log in

## 2.0.4 (June 6, 2022)
- Fixed CI app building

## 2.0.3 (June 6, 2022)
- CI dependencies now installed locally

## 2.0.2 (June 6, 2022)
- Move set storybook hosting to separate step

## 1.3.14 (June 6, 2022)
- Update actions/checkout and actions/setup-node in CI
- Add dashboard page and associated components

## 1.3.13 (October 15, 2021)
- Fixed types in text fields and filter components

## 1.3.12 (October 15, 2021)
- Update Typescript, Storybook, Typescript-eslint/eslint-plugin and Typescript-eslint/parser
- Add alphabet sorting stories in storybook

## 1.3.11 (September 18, 2021)
- Fixed choosing form from dropdown list

## 1.3.10 (September 17, 2021)
- Add MemoryRouter to Storybook
- Separate to new component fragment of code with choosing form

## 1.3.9 (September 8, 2021)
- Add tabs component

## 1.3.8 (September 4, 2021)
- Add virtualized table component
- Add table filters component

## 1.3.7 (September 1, 2021)
- Fixed version bumper in CI

## 1.3.6 (September 1, 2021)
- Add version bumper in CI

## 1.3.3 (April 16, 2021)
- Fix draw widget display.
- Fix loading screen display.

## 1.3.2 (April 15, 2021)
- Fix bug with user identifier that prevented submitting responses from a file.

## 1.3.1 (April 15, 2021)
- Fixed bug with displaying forms that prevented submitting responses from a file.

## 1.3.0 (April 15, 2021)
- Add modal with redirection to new page hosted on firebase only on development mode.
- Add loading screens in whole app.
- Add Typescript to project.
- Fix inputs and buttons focus styling.
- Fix routing bug that prevent open guest page when user is sign in.
- Remove required all fields to submit form. The form is possible to submit if only one field is filled.
- Get all answers of form (only in development mode).

## 1.2.0 (December 26, 2020)
- Add copy form name functionality
- Copy text now is scrollable
- Now draws from unique value
- Form name now highlight on idle

## 1.1.1 (October 19, 2020)
- Fix problem with Redux DevTools

## 1.1.0 (October 18, 2020)
- Add copy link functionality
- Add list of forms
- Switch between forms

## 1.0.4 (October 11, 2020)
- Add Footer

## 1.0.3 (October 11, 2020)
- Fix wrong paths

## 1.0.2 (October 11, 2020)
- Add 404 page for GitHub
- Add favicon
- Change title of page

## 1.0.1 (October 11, 2020)
- Update README

## 1.0.0 (October 11, 2020)
- You can login 
- You can send answers via form (unauthorized)
- You can display creator name (unauthorized)
- You can display form name (unauthorized, authorized)
- You can randomize answers from the form fields (authorized)
- You can randomize from the filtered answers (authorized)

## 0.1.0 (October 3, 2020)
- Initial public release
