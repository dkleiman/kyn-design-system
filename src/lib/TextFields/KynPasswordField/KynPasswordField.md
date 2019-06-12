## Example

```jsx
<style type="text/css">{`
.KynTextField.my-custom-password-field-theme {
  --primary-color: purple;
  --label-text-font-family: Roboto;
  --input-text-font-family: Roboto;
}
`}</style>
<KynPasswordField
  className="my-custom-password-field-theme"
  label="Password"
  helperText="At least 6 chars"
  value="p@ssword"
/>
```