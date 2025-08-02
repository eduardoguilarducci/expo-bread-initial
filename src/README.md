# ExpoBread - Source Code Structure

This directory contains the main source code for the ExpoBread application, organized with proper separation of concerns.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Navigation, etc.)
│   ├── restaurant/     # Bread-specific components (using recipe data)
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
- Example: `BreadItem`, `SmallCardProps`, `Recipe`

### 2. **Data Layer** (`src/data/`)

- Contains mock data and data sources
- Separates data from UI components
- Example: `mockRecipes.ts` (sole data source for all bread items)

### 3. **Services** (`src/services/`)

- Contains business logic and API calls
- Handles data operations and transformations
- Example: `RecipeService`

### 4. **Hooks** (`src/hooks/`)

- Custom React hooks for state management
- Encapsulates complex logic and side effects
- Example: `useRecipes`, `useBreadItems`

### 5. **Components** (`src/components/`)

- **UI Components** (`ui/`): Base, reusable components
- **Layout Components** (`layout/`): Page layout and navigation
- **Feature Components** (`restaurant/`): Bread-specific components using recipe data

## Best Practices Implemented

1. **Single Responsibility**: Each component and service has a single, well-defined purpose
2. **Dependency Inversion**: High-level modules don't depend on low-level modules
3. **Type Safety**: Comprehensive TypeScript interfaces
4. **Reusability**: Components are modular and reusable
5. **Testability**: Business logic is separated from UI components
6. **Maintainability**: Clear folder structure and naming conventions

## Usage Examples

### Using Recipe Data Directly

```typescript
import { getAllRecipes } from "@/src/data/mockRecipes";

const recipes = getAllRecipes();
const breadRecipes = recipes.filter(recipe => recipe.recipeType === "bread");
```

### Using Custom Hooks

```typescript
import { useRecipes, useBreadItems } from "@/src/hooks";

const { recipes, loading, error } = useRecipes();
const { featuredBreadItems, allBreadItems } = useBreadItems();
```

### Using Components

```typescript
import { SmallCard, BreadSection } from "@/src/components";

<SmallCard restaurant={breadItem} variant="featured" />;
```
