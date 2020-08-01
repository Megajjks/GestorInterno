# AlertModal

This component defines the style and functionality of a modal notification.

## Props

| Props       | Type     | Description                 | required |
| ----------- | -------- | --------------------------- | -------- |
| title       | string   | title of modal              | yes      |
| message     | string   | modal content               | yes      |
| open        | function | function to open modal      | yes      |
| handleClose | function | function to close the modal | yes      |
| callback    | function | custom fuction              | yes      |

## Implementation

```jsx
<AlertModal
  title="any title"
  message="content"
  open={openFunction}
  handleClose={closeFunction}
  callback={anyFunction}
/>
```
