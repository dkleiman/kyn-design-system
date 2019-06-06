## Theming
You can set the ink color by overriding the `--ink-color` on the `KynPaperRipple` class. By default it is the `currentColor`.

## Example

```jsx
<style type="text/css">{`
  .KynPaperRipple.ripple-container {
    --ink-color: currentColor;
  }

  .ripple-container {
    width: 200px;
    height: 100px;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
      0 2px 2px 0 rgba(0,0,0,.14),
      0 1px 5px 0 rgba(0,0,0,.12);
    color: blue;
    padding: 16px;
    line-height: 100px;
    text-align: center;
    font-family: Roboto;
  }
`}</style>
<KynPaperRipple className="ripple-container">
  Click Here!
</KynPaperRipple>
```