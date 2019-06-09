## Example

```jsx
initialState = { count: 0 };
<React.Fragment>
  <KynIconButton name="person" onClick={() => setState({ count: state.count + 1 })}/>
  <span>{`Count: ${state.count}`}</span>
</React.Fragment>
```