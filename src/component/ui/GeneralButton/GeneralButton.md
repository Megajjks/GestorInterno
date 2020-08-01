# GeneralButton

This component defines the style and structure of the buttons to use.

## Props

| Props   | Type     | Description                                                                                                                                                                     | required |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| title   | string   | define the button title                                                                                                                                                         | yes      |
| onClick | function | defines an action at the moment the user presses the button                                                                                                                     | yes      |
| ico     | string   | button icon                                                                                                                                                                     | no       |
| color   | string   | commitment status circle icon color                                                                                                                                             | no       |
| type    | string   | button type; **secundary** = secundary button, **warning** = warning button, **status** = status button and if this prop is not placed the button by default is the **primary** | no       |

## Implementation

```jsx
  //Primary button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
  />

  //Secundary button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="secundary"
  />

  //Warning button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="warning"
  />

  //Status button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="status"
		color="any color of status"
  />

  //Button with ico
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="any title"
		ico={icono}
	/>

```
