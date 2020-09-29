# Pagination

This component draw pagination anywhere.

## Props

| Props    | Type     | Description                                                            | Required |
| -------- | -------- | ---------------------------------------------------------------------- | -------- |
| count    | Number   | Total pages that will exist in pagination                              | Yes      |
| page     | Number   | Page number current                                                    | Yes      |
| onChange | Function | Custom function that will be executed when interacting with pagination | Yes      |
| size     | String   | Size of pagination (small, medium,large)                               | Yes      |

## Implementation

```jsx
<PaginationBar count={count} page={page} onChange={callBack} size="large" />
```
