export type Meal = {
  id: number
  userId: string
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
  { value: 'dinner', label: 'dinner' },
  { value: 'lunch', label: 'lunch' },
  { value: 'vegetarian', label: 'vegetarian' },
  { value: 'freezer friendly', label: 'freezer-friendly' },
  { value: 'quick', label: 'quick' },
  { value: 'budget', label: 'budget' },
  { value: 'healthy', label: 'healthy' },
  { value: 'comfort food', label: 'comfort-food' },
  { value: 'dairy free', label: 'dairy-free' },
  { value: 'chicken', label: 'chicken' },
  { value: 'beef', label: 'beef' },
  { value: 'pork', label: 'pork' },
  { value: 'fish', label: 'fish' },
  { value: 'pasta', label: 'pasta' },
]
