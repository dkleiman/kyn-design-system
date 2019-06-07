You can use this component for adding shadows to buttons, or just to make a card!

## Example

```jsx
initialState = { elevation: 2 };
<React.Fragment>
  <style type="text/css">{`
  .cool-card {
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 4px;
  }
  `}</style>
  <KynElevation
    elevation={state.elevation}
    className="cool-card"
    onMouseEnter={() => { setState({ elevation: 8 }); }}
    onMouseLeave={() => { setState({ elevation: 2 }); }}
  >
    I float on hover
  </KynElevation>
</React.Fragment>
```