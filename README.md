## Install App

`npm install`  
`npm run dev`

## Main Libraries

- [redux toolkit](https://redux-toolkit.js.org/) - state manager
- [redux-saga](https://redux-saga.js.org/) - side effect manager
- [react-hook-form](https://react-hook-form.com/) - processing and validating form
- [yup](https://github.com/jquense/yup) - schema builder for runtime value parsing and validation form
- [react-input-mask](https://github.com/sanniassin/react-input-mask) - input masking component
- [react-dropzone](https://react-dropzone.js.org/) - hook to create a drag'n'drop zone
- [react-datepicker](https://reactdatepicker.com/) - datepicker & timepicker component
- [react-leaflet](https://react-leaflet.js.org/) - react components for Leaflet maps
- [styled-components](https://styled-components.com/) - styles

## Architecture

- **assets**
  - fonts
  - images
- **components** (**Components form modules.** This folder for components like a button, input, link and etc.)
  - ExampleComponent
    - ExampleComponent.tsx - main file
    - styles.ts - for styled-components
    - types.ts - for types
- **constants** (app's general constants)
- **containers** (**Containers form pages.** This folder for components like a form, header, footer and etc.)
  - ExampleContainer
    - ExampleContainer.tsx - main file
    - styles.ts - for styled-components
    - types.ts - for types
    - data.ts - for auxiliary functions
- **pages** (**Pages contain containers which in turn contain components**)
  - ExamplePage
    - ExamplePage.tsx - main file
    - styles.ts - for styled-components
- **redux**
  - module
    - slice.ts - actions and reducer
    - saga.ts
    - selectors.ts
- **requests** - contains requests and interceptors
- **routes**
- **store**
- **styles** - contains design tokents
  - breakpoints
  - colors
  - globalStyles
  - typography
- **utils** - contains support functions for example hooks and other
