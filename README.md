# KYN Design System

This repo is where all of the reusable React components from the KYN Platform live. The goal is to keep business logic and presentational logic as separate as possible. This separation of concerns will help us maintain clean code for the platform.

## Contributing

As far as contributing goes, you should open a PR against `dev` that references a Github issue. If there is no issue then create one first. 

If you find a bug in an existing component, be sure to write a test that addresses the case where the initial component was failing. If you're adding a new component you should be adding a directoy to `lib` (or a sub-directory of `lib` representing a component grouping) with the following structure:

```
KynComponentName/
  index.js
  KynComponentName.css
  KynComponentName.jsx
  KynComponentName.md
  KynComponentName.test.jsx
```

`index.js` simply re-exports your component from `KynComponentName.jsx` so that imports are simpler.

Be sure to use `propTypes`, `defaultProps`, and to use `jsdoc` to document your component and proptypes. `KynComponentName.md` should contain an example of your component in action, and any additional helpful information.

## Useful Commands

Run tests:
`npm test`

Run style guide:
`npm run styleguide`

My grandfather always said: "Son, if you're going to do something more than twice, then you should probably automate that task." With that piece of advice in mind, the following script creates a new component:

```text
npm run generate path/to/ComponentName
```

And if you would prefer a function style component:

```text
npm run generate path/to/ComponentName -- --type function
```

## Todo List
- [x] Write docs and tests for `KynElevation`
- [x] Write docs and tests for `KynButton`
- [x] `KynIcon`
- [x] `KynIconButton`
- [ ] `KynValidatedTextField`
- [ ] `KynPasswordField`
- [ ] `KynDropdown`
- [ ] `KynDatePicker`
- [ ] `KynChip`
- [ ] `KynCheckbox`
- [ ] `KynRadioButton`
- [ ] `KynRadioGroup`
- [ ] `KynCheckboxGroup`
