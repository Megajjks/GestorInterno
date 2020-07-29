# CommitmentCardList

This component define the logic and data shown in a list of commitments.

## Props

| Props       | Type   | Description                                                    | required |
| ----------- | ------ | -------------------------------------------------------------- | -------- |
| commitments | object | all data of commitments comming from a request                 | yes      |
| btnTitle    | string | commitment button title if it exist                            | no       |
| btnUrlBase  | string | base url where you will direct the user by clicking the button | no       |

## Implementation

```jsx
  //with button
  <CommitmentCardList
		commitments={data}
		btnTitle="view commitment"
		btnUrlBase="/url_base/"
  />

  //without button
	<CommitmentCardList
		commitments={data}
	/>
```
