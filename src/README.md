# ExpoBread - Source Code Structure

This directory contains the main source code for the ExpoBread application, organized with proper separation of concerns.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Navigation, etc.)
│   ├── restaurant/     # Restaurant-specific components
│   └── ui/            # Base UI components (ThemedText, ThemedView, etc.)
├── data/              # Mock data and data sources
├── hooks/             # Custom React hooks
├── services/          # Business logic and API services
└── types/             # TypeScript type definitions
```

## Separation of Concerns

### 1. **Types** (`src/types/`)

- Contains TypeScript interfaces and type definitions
- Ensures type safety across the application
- Example: `Restaurant`, `RestaurantCardProps`

### 2. **Data Layer** (`src/data/`)

- Contains mock data and data sources
- Separates data from UI components
- Example: `mockRestaurants.ts`

### 3. **Services** (`src/services/`)

- Contains business logic and API calls
- Handles data operations and transformations
- Example: `RestaurantService`

### 4. **Hooks** (`src/hooks/`)

- Custom React hooks for state management
- Encapsulates complex logic and side effects
- Example: `useRestaurants`

### 5. **Components** (`src/components/`)

- **UI Components** (`ui/`): Base, reusable components
- **Layout Components** (`layout/`): Page layout and navigation
- **Feature Components** (`restaurant/`): Feature-specific components

## Best Practices Implemented

1. **Single Responsibility**: Each component and service has a single, well-defined purpose
2. **Dependency Inversion**: High-level modules don't depend on low-level modules
3. **Type Safety**: Comprehensive TypeScript interfaces
4. **Reusability**: Components are modular and reusable
5. **Testability**: Business logic is separated from UI components
6. **Maintainability**: Clear folder structure and naming conventions

## Usage Examples

### Using the Restaurant Service

```typescript
import { RestaurantService } from "@/src/services/restaurantService";

const restaurants = await RestaurantService.getFeaturedRestaurants();
```

### Using Custom Hooks

```typescript
import { useRestaurants } from "@/src/hooks/useRestaurants";

const { featuredRestaurants, loading, error } = useRestaurants();
```

### Using Components

```typescript
import { RestaurantCard, RestaurantSection } from "@/src/components";

<RestaurantCard restaurant={restaurant} variant="featured" />;
```
