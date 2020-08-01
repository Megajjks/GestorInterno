# Sidebar

This component defines the structure of how the sidebar.

## Props

|Props   | Type    | Description                                             | Required |
|--------|---------| --------------------------------------------------------|----------|
|items   | Array   | Data to show options depending on the role of the user  | Yes      |
|isAgent | Boolean | Identify which user is entering                         | Yes      |

## Implementation

```jsx
<Sidebar
    items={rol[roles.userHasRole()]}
    isAgent={roles.userHasRole() === "AGE_USR" ? true : false}
/>
```