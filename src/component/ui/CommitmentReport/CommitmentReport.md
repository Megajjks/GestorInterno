# CommitmentReport

This component shows a summary of the data entered by an agent when making a commitment, for the admin or contributor to approve, decline or give feedback to this commitment.

## Props

| Props    | Type    | Description                                                                                                                                                                                      | required |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| rol      | string  | role of the user to be able to give permissions to the user, if he is admin he can edit commitments, \* else admin or this prop is missing the user will not have permission to edit commitments | no       |
| isDetail | boolean | if it is true the commitment validation buttons are activated, otherwise it is not shown turning it into a report.                                                                               | no       |

## Implementation

```javascript
  //with rol and commitment validations buttons
	<CommitmentReport
		rol="any rol"
		isDetail=true
  />

  //with rol and without commitment validations buttons
	<CommitmentReport
		rol="any rol"
  />

  //with commitment validations buttons and without rol
	<CommitmentReport
		isDetail=true
  />

  //without rol and commitment validations buttons
	<CommitmentReport/>
```
