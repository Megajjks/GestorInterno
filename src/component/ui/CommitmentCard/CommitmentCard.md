# CommitmentCard

This component defines the style and structure of a commitment card.

## Props

| Props    | Type     | Description                                                 | required |
| -------- | -------- | ----------------------------------------------------------- | -------- |
| data     | object   | all data corresponding to a commitment                      | yes      |
| btnTitle | string   | commitment button title if it exist                         | no       |
| onclick  | function | call back that will function when the user click the button | no       |

## Implementation

```jsx
//with button
<CommitmentCard
  data={commitments}
  btnTitle="view commitment"
  onClick={functionname}
/>

//without button
<CommitmentCard
  data={commitments}
/>
```
