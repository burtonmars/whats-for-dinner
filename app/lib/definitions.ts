export type Meal = {
  id: number
  mainTitle: string
  secondaryTitle: string
  imagePath: string
  tags: string[]
  ingredients: string[]
  notes: string
}

export type MealTag = {
  value: string
  label: string
}

export const mealTags: MealTag[] = [
  { value: 'Dinner', label: 'dinner' },
  { value: 'Lunch', label: 'lunch' },
  { value: 'Vegetarian', label: 'vegetarian' },
  { value: 'Freezer Friendly', label: 'freezer-friendly' },
  { value: 'Quick', label: 'quick' },
  { value: 'Budget', label: 'budget' },
  { value: 'Healthy', label: 'healthy' },
  { value: 'Comfort Food', label: 'comfort-food' },
  { value: 'Dairy Free', label: 'dairy-free' },
  { value: 'Chicken', label: 'chicken' },
  { value: 'Beef', label: 'beef' },
  { value: 'Pork', label: 'pork' },
  { value: 'Fish', label: 'fish' },
  { value: 'Pasta', label: 'pasta' },
]
