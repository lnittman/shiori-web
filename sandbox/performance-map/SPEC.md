# Performance Map: Technical Specification

## Architecture Integration
The component is implemented in React using plain SVG for the map and `framer-motion` for hover animations. It consumes the existing `performances` data and maps locations to 2D coordinates.

## Components and Extensions

### PerformanceMap
- **Purpose**: Renders a simplified world map with pins for each performance location.
- **Implementation Approach**: Uses an inline SVG for the map outline and absolute-positioned markers computed from latitude and longitude. Hovering a marker reveals a small card that fades in with `framer-motion`.
- **Integration Points**: Can be imported into pages such as `src/app/work/page.tsx` to give users an overview of performance locations.

### locationMap
- **Purpose**: Provides a mapping from location strings in `performances.ts` to geographic coordinates.
- **Implementation Approach**: Simple object lookup exported from the sandbox.
- **Integration Points**: Used by `PerformanceMap` to place markers.

## State and Data Flow
The component receives an array of performances converted to marker objects. Internal state tracks which marker is active on hover to display the card. No external state management is required.

## Integration Strategy
1. Import `PerformanceMap` and the `performances` data.
2. Convert the data to include coordinates using the `toMapMarkers` helper.
3. Render the component where appropriate in the `work` page.

## Future Considerations
- Replace the placeholder SVG with a more detailed map.
- Support filtering or clustering of markers as the number of performances grows.
