export type Meal = {
  id: number
  mainTitle: string
  secondaryTitle: string
  imagePath: string
  tags: string[]
  ingredients: string[]
  notes: string
}

export interface MealTag {
  readonly label: string
  readonly value: string
}

export const mealTags: MealTag[] = [
  { label: 'Budget', value: 'budget' },
  { label: 'Quick', value: 'quick' },
  { label: 'Easy', value: 'easy' },
  { label: 'Healthy', value: 'healthy' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Dairy Free', value: 'dairy-free' },
  { label: 'Leftovers', value: 'leftovers' },
  { label: 'Freezer Friendly', value: 'freezer-friendly' },
  { label: 'Comfort Food', value: 'comfort-food' },
  { label: 'Chicken', value: 'chicken' },
  { label: 'Beef', value: 'beef' },
  { label: 'Pork', value: 'pork' },
  { label: 'Fish', value: 'fish' },
  { label: 'Salad', value: 'salad' },
  { label: 'Soup', value: 'soup' },
  { label: 'Pasta', value: 'pasta' },
  { label: 'BBQ', value: 'bbq' },
]
