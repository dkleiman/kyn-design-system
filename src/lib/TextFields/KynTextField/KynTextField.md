## Theming

To customize the theming you can pass a `className` as a prop, and override the default theme by targeting the component with both selectors at once. Here are the properties you should ever care about overriding (and usually just `--primary-color` unless you have a dark theme):

### Color

| Property                         | Default                | Description                                                                                              |
| -------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------- |
| `--primary-color`                | `#000000`              | Color of the label and underline on focus and the caret color.                                           |
| `--label-text-color`             | `rgba(0, 0, 0, 0.4)`   | Color of label text when not focused or text field is active as well as prefix, suffix, and helper text. |
| `--input-text-color`             | `rgba(0, 0, 0, 0.87)`  | Color of the input text.                                                                                 |
| `--container-color`              | `rgba(0, 0, 0, 0.04)`  | Background color of the text field.                                                                      |
| `--container-color-hover`        | `rgba(0, 0, 0, 0.075)` | Background color of the text field on hover.                                                             |
| `--error-color`                  | `#B00020`              | Color of the label, underline, and carret on error.                                                      |
| `--static-underline-color`       | `rgba(0, 0, 0, 0.42)`  | Color of the underline with no focus and no hover.                                                       |
| `--static-underline-hover-color` | `rgba(0, 0, 0, 0.87)`  | Hover color of the underline.                                                                            |

### Shape

| Property          | Default | Description                                   |
| ----------------- | ------- | --------------------------------------------- |
| `--border-radius` | `4px`   | Radius of the top left and top right corners. |
| `width`           | `280px` | The width of the text field.                  |

### Typography

| Property                   | Default | Description                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------- |
| `--label-text-font-family` | Inherit | Font family of the label as well as helper text, error text, and char counters.   |
| `--input-text-font-family` | Inherit | Font family of the input text.                                                    |
| `--input-text-font-size`   | `16px`  | Font size of the input, label, prefix, and suffix text.                           |
| `--helper-text-font-size`  | `12px`  | Font size of the helper, error text, and char counter.                            |
| `--label-scale-factor`     | `0.75`  | Factor by which to scale the label on focus. (Default goes from `16px --> 12px`.) |

## Example

This is the all-dressed example with everything set. If you click "View Code", you can modify it and see the output.

```jsx
<style type="text/css">{`
.KynTextField.my-custom-text-field-theme {
  --primary-color: #000000;
  --border-radius: 4px;
  --label-text-font-family: Roboto;
  --label-text-color: rgba(0, 0, 0, 0.4);
  --input-text-font-family: Roboto;
  --input-text-color: rgba(0, 0, 0, 0.87);
  --input-text-font-size: 16px;
  --helper-text-font-size: 12px;
  --label-scale-factor: 0.75;
  --container-color: rgba(0, 0, 0, 0.04);
  --container-color-hover: rgba(0, 0, 0, 0.075);
  --error-color: #B00020;
  --static-underline-color: rgba(0, 0, 0, 0.42);
  --static-underline-hover-color: rgba(0, 0, 0, 0.87);
  width: 280px;
}
`}</style>

<KynTextField
  label="Revenue Per User*"
  className="my-custom-text-field-theme"
  value={state.value}
  prefixText="$"
  suffixText="/user"
  align="right"
  placeholder="16.00"
  type="text"
  onChange={e => setState({ value: e.target.value })}
  disabled={false}
  helperText="*Required"
  isError
  errorText="This is an error"
  maxLength={30}
  prefixNode={(
    <div style={{
      width: '24px',
      height: '24px',
      backgroundColor: 'blue',
      margin: '16px 12px 16px 0'
    }}/>
  )}
  suffixNode={(
    <div style={{
      width: '24px',
      height: '24px',
      backgroundColor: 'red',
      margin: '16px 0px 16px 12px'
    }}/>
  )}
/>
```