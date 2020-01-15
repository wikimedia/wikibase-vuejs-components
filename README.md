# Wikibase Vue.js Components

A Vue.js component library used in Wikibase projects, inspired by OOUI.

## Usage

### Installation
Run `npm i --save @wmde/wikibase-vuejs-components` and ensure you have all necessary peer dependencies installed.

### Import
In your style entry point(s), e.g. `_main.scss`, add
```scss
@import '~@wmde/wikibase-vuejs-components/dist/wikibase-vuejs-components.css';
```
This will import styles for all components included in the library.

Then you can import components, e.g.
```js
import { IndeterminateProgressBar } from '@wmde/wikibase-vuejs-components';
```

### Storybook
You can see the available components and their usage examples at the [storybook on doc.wikimedia.org](https://doc.wikimedia.org/wikibase-vuejs-components/master/ui/).

## Building Docker image
```sh
# ensure the node user uses your user id, so you own generated files
docker-compose build --build-arg UID=$(id -u) --build-arg GID=$(id -g) node

# install npm dependencies
docker-compose run --rm node npm install
```

## Development

### Run all code quality tools
* `docker-compose run --rm node npm test`

### Run code quality tools individually
* `docker-compose run --rm node npm run test:unit` runs all unit tests
* `docker-compose run --rm node npm run test:lint` for linting, `docker-compose run --rm node npm run fix` for fixing auto-fixable lint errors

### Developing with Storybook
There are storybook previews of all components, and new stories should be added for any newly added components. You can run the storybook as follows:
`docker-compose up storybook`
