As far as contributing goes, you should open a PR against `dev` that references a Github issue. If there is no issue then create one first. 

If you find a bug in an existing component, be sure to write a test that addresses the case where the initial component was failing. If you're adding a new component you should be adding a directoy to `lib` (or a sub-directory of `lib` representing a component grouping) with the following structure:

```text
KynComponentName/
  index.js
  KynComponentName.css
  KynComponentName.jsx
  KynComponentName.md
  KynComponentName.test.jsx
```

Just use the component generating script from the [previous section!](#section-contributing)

`index.js` simply re-exports your component from `KynComponentName.jsx` so that imports are simpler.

Be sure to use `propTypes`, `defaultProps`, and to use `jsdoc` to document your component and proptypes. `KynComponentName.md` should contain an example of your component in action, and any additional helpful information.