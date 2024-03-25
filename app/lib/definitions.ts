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

export const mealTags: readonly MealTag[] = [
  { label: 'Dinner', value: 'dinner' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Freezer Friendly', value: 'freezer-friendly' },
  { label: 'Quick', value: 'quick' },
  { label: 'Budget', value: 'budget' },
  { label: 'Healthy', value: 'healthy' },
  { label: 'Comfort Food', value: 'comfort-food' },
  { label: 'Dairy Free', value: 'dairy-free' },
  { label: 'Chicken', value: 'chicken' },
  { label: 'Beef', value: 'beef' },
  { label: 'Pork', value: 'pork' },
  { label: 'Fish', value: 'fish' },
  { label: 'Pasta', value: 'pasta' },
]
