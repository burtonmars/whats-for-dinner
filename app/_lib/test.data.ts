import { Meal } from '@/app/_lib/definitions'

export const testUserId = 'user_2fspa7LOhbh3lozBaKUzrKkJOUz'

export const testMeals: Meal[] = [
  {
    id: 74,
    userId: testUserId,
    mainTitle: 'Pan Seared Salmon Filets',
    secondaryTitle: 'with lemon parmesan orzo',
    imagePath:
      'https://res.cloudinary.com/dv54qhjnt/image/upload/v1714603179/salmon_dinner_phbhjk.jpg',
    tags: ['dinner', 'healthy', 'fish', 'pasta'],
    ingredients: [
      'salmon',
      'orzo',
      'lemon',
      'chicken broth',
      'parsley',
      'parmesan',
    ],
    notes: 'notes 1',
  },
  {
    id: 75,
    userId: testUserId,
    mainTitle: 'Red Beans and Rice',
    secondaryTitle: 'with sausage',
    imagePath:
      'https://res.cloudinary.com/dv54qhjnt/image/upload/v1714603515/red-beans-and-rice_pdhdgm.jpg',
    tags: ['dinner', 'lunch', 'budget', 'comfort food', 'dairy free'],
    ingredients: [
      'kidney beans',
      'sausage',
      'rice',
      'bell pepper',
      'onion',
      'garlic',
    ],
    notes: 'notes 2',
  },
]
