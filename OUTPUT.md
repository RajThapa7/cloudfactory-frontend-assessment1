## Changes Made

### App

1. All inline components were extracted into separate files

   - Issue: App.tsx was cluttered with multiple components
   - Fix: Moved each component (`Header`, `HeroSection`, `TagList`) into its own file in `components/` folder

2. Changed the background color
   - Issue: Background color not matching with the figma design
   - Fix: Changed the background color to match with the figma design

### Header

1. Code Cleanup

- Issue: Too many redundant <span> wrapper in the header `Search` and use of inline styling
- Fix: Removed unnecessary <span> wrapper and used tailwind utility classes instead of inline styling

2. Made Ui fixes in the header component

- Issue: UI not matching with the figma design
- Fix: Reduced the size of the logo and fixed the styling of the search input

3. Added State handling for the search input

- Issue: No state handling for the search input
- Fix: Added `searchValue` state to handle the search input

### HeroSection

1. Accessibility improvement in the background image

- Issue: Background image was missing the alt attribute
- Fix: Added alt attribute to the background image

### HeroSearchBar

1. Accessibility improvement in the HeroSearchBar

- Issue: HeroSearchBar was not keyboard accessible
- Fix: Added aria-label to search inputs, type="submit" to the Button and wrapped the search input in a <form>

2. Made Ui fixes to the HeroSearchBar component

- Issue: UI not matching with the figma design and only the inner `Input` component was being focused
- Fix: modified the classes to match the figma design and added focus styling to the outer container

3. Removed unnecessary useEffect hooks

- Issue: unnecessary useEffect hooks used to set the initial value and call onSearch callback on innerValue change
- Fix: removed the unnecessary useEffect hooks and passed the initial value on state initialization and called on the onSearch callback on onSubmit event handler

### BoxArea97

1. Component renamed from `BoxArea97` to `HeroSection`
   - Issue: Name was not descriptive
   - Fix: Renamed to follow semantic naming convention for hero sections

### BoxArea108

1. Component renamed from `BoxArea108` to `HeroSearchBar`
   - Issue: Name was not descriptive
   - Fix: Renamed to follow semantic naming convention

### TagList

1. Added TypeScript props interface

   - Issue: Props were untyped in original component and throwing type error
   - Fix: Defined `TagListProps` interface for `title` and `tags`

2. Used semantic tags

   - Issue: <div> tag was used to render the text
   - Fix: Used <p> tag instead of <div> to render the text

3. Added onChange and value props to the tag selector
   - Issue: State handling missing in the TagList component
   - Fix: handled state by adding onChange and value props to the TagList component
