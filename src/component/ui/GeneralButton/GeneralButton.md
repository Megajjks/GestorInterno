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
| size    | string   | define the button size with css measurements if no exist the value for default is 100%                                                                                          | no       |

## Implementation

```jsx
  //Primary button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		size="any size" //px,%,em any css measure
  />

  //Secundary button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="secundary"
		size="any size" //px,%,em any css measure
  />

  //Warning button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="warning"
		size="any size" //px,%,em any css measure
  />

  //Status button
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="status"
		color="any color of status"
		size="any size" //px,%,em any css measure
  />

  //Button with ico
	<GeneralButton
		title="any title"
		onClick={anyFunction}
		type="any title"
		ico={icono}
		size="any size" //px,%,em any css measure
	/>

```
