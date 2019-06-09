`KynButton`s make use of [`KynElevation`](#kynelevation) and [`KynPaperRipple`](#kynpaperripple). Try out the different variants by modifying the code below.

## Example

```jsx
initialState = { count: 0 };
<React.Fragment>
  <style type="text/css">{`
    .KynButton.my-custom-button {
      --primary-color: purple;
      --font-family: Roboto;

      margin-right: 8px;
    }
  `}</style>

  <KynButton
    type="button"
    className="my-custom-button"
    variant="text"
    onClick={() => setState({ count: state.count + 1 })}
  >
    Up the count!
  </KynButton>

  <span>{`Count: ${state.count}`}</span>
</React.Fragment>
```