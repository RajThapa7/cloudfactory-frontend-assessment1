## Changes Made

###[Component Name]

1. useEffect in line 37
   - Issue: useEffect missing dependencies causing stale state
   - Fix: Added required dependencies to useEffect array
2. Accessibility issue with the search icon line 98
   - Issue: search icon is not accessible
   - Fix: Added search icon to the input field

### App

1. All inline components were extracted into separate files
   - Issue: App.tsx was cluttered with multiple components
   - Fix: Moved each component (`Header`, `HeroSection`, `TagList`) into its own file in `components/` folder

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
