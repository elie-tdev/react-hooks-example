# Simple React Project With Hooks

UI Purpose:

Dynamically create reusable widgets that can modify different values.

Shaded boxes in the mockup mean interactive.

You may design and style it however you like.

Please only allow setting non-negative values.

Leave room for future integration of server API calls but you don't have to implement the server.

## Instructions

1. The template requests when creating a new widget, the value name should be entered (not the value). This way the value is bound to the widget.
2. There can be more than 1 value and more than 2 widgets to track
3. The template requests that every time the create widget button is clicked, a new widget should be created. We could see more than 1 widget of the same type, and each of them could track a different value or the same value.

## Example

- User creates new widget (widget-name=’widget 1’, value-name=’value 1’, type=’input’)
- User creates new widget (widget-name=’widget 2’, value-name=’value 1’, type=’buttons’)
- User creates new widget (widget-name=’widget 3’, value-name=’value 1’, type=’input’)
- User creates new widget (widget-name=’widget 4’, value-name=’value 2’, type=’input’)

Now, the page should render 4 widgets. When user clicks a button in widget 2, the value shown in widget 1 and 3 should also both change. The value in widget 4 will remain unchanged.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Live URL

Open [https://jouji-react-hooks.netlify.app/](https://jouji-react-hooks.netlify.app/) to view it in your browser.
