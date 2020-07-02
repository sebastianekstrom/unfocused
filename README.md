# Unfocused

A tiny NPM package to update the page title when the tab isn't focused

[Changelog](CHANGELOG.md)

## Demo

You can see a demo of it over [here](https://sebastianekstrom.github.io/unfocused/)!

![unfocused](https://cloud.githubusercontent.com/assets/1921046/15626977/3885c8e2-24d5-11e6-9b3b-61091a05c45e.gif)

## Installation and usage

Install the package

```
npm install unfocused --save
```

Implement it

```javascript
import Unfocused from 'unfocused';

const unfocused = new Unfocused({
  blurTitle: "I'm blurred!",
  focusTitle: "I'm in focus!",
});
```

```jsx
import React, {useEffect} from 'react';
import Unfocused from 'unfocused';

const App = () => {
  useEffect(() => {
    const unfocused = new Unfocused({
      blurTitle: "I'm blurred!",
      focusTitle: "I'm in focus!",
    });
    return () => {
      unfocused.destroy();
    };
  }, []);

  return <div />;
};
```

## API

| Name        | Type     | Default        | Description                                                                                          |
| :---------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------- |
| Instantiate | Object   |                | An object containing `blurTitle` and and optional `focusTitle`                                       |
| blurTitle   | String   |                | The page title to display when the page is blurred                                                   |
| focusTitle  | String   | document.title | The page title to display when the page is focused, if none provided, the current title will be used |
| destroy     | Function |                | Method to call to remove the event listener                                                          |

## Browser support

- Chrome
- Firefox
- Safari
- IE10
- Edge

## Development

```
1. yarn install
2. yarn dev
```

## Building the project

```
1. yarn install
2. yarn build
```

## Contributing

For bugs and feature requests, please open an issue. If you'd like to contribute, create a new PR
with your changes. Make sure you update the changelog (if applicable).
