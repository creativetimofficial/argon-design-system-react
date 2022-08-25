# Change Log

## [1.1.1] 2022-08-25

- Update dependencies
- Migrate to React 18
- Migrate from node-sass to sass

## [1.1.0] 2020-02-14

### Bug fixing

- Changed all 1.0.0 versioning to v1.1.0
- Solved https://github.com/creativetimofficial/argon-design-system-react/issues/2
- Changes to match [Argon Design System](https://www.creative-tim.com/product/argon-design-system?ref=adsr-changelog) by Creative Tim
- - `src/components/Footers/CardsFooter.js`
- - `src/views/IndexSections/Datepicker.js`
- Solved build issue

### Major style changes

- Changed the whole scss/css files and folders to match those of [Argon Design System](https://www.creative-tim.com/product/argon-design-system?ref=adsr-changelog) by Creative Tim

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

- eslint-plugin-flowtype@3.13.0 (To stop warning: `npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.`)
- bootstrap@4.3.1 (To match the new files and folders of scss)
- jquery@3.4.1 (To stop warning: `npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.`)

### Updated dependencies

```
headroom.js           0.9.4   →    0.11.0
node-sass            4.12.0   →    4.13.1
nouislider           13.1.5   →    14.1.1
react                16.8.6   →   16.12.0
react-dom            16.8.6   →   16.12.0
react-router          5.0.0   →     5.1.2
react-router-dom      5.0.0   →     5.1.2
react-scripts         3.0.0   →     3.3.1
reactstrap            8.0.0   →     8.4.1
@types/googlemaps   3.30.19   →    3.39.2
@types/react        16.8.16   →   16.9.19
typescript            3.4.5   →     3.7.5
```

### Warning

**The following warnings could not be solved, due to some of our dependencies, however, they do not affect the functionality or the UI of the product:**

```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```

**The following warning could not be solved due to the usage of react-datetime (Note: if the warning will persist after React changes version to 17, we'll drop the support for react-datetime and replace them with other react library for dates input):**

```
Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: DateTime
```

## [1.0.0] 2019-05-13

### Original Release

- Added Reactstrap as base framework
- Added design from Argon Design System by Creative Tim
