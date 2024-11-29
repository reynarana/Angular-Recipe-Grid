import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 21,
      name: 'Beef Stir-Fry',
      description: 'Tender beef slices stir-fried with colorful veggies and savory sauce.',
      image: 'assets/Beef Stir-Fry.jpg',
      category: 'Main Course',
      ingredients: [
        '500g beef sirloin, thinly sliced',
        '1 bell pepper, sliced',
        '1 onion, sliced',
        '1 carrot, julienned',
        '2 tbsp soy sauce',
        '1 tbsp oyster sauce',
        '1 tsp sesame oil',
        '1 clove garlic, minced',
        'Cooked rice for serving',
        'Sesame seeds for garnish',
      ],
    },
    {
      id: 22,
      name: 'Chicken Fajitas',
      description: 'Sizzling chicken strips served with peppers and onions in soft tortillas.',
      image: 'assets/Chicken Fajitas.jpg',
      category: 'Main Course',
      ingredients: [
        '500g chicken breasts, sliced',
        '1 bell pepper, sliced',
        '1 onion, sliced',
        '1 tbsp olive oil',
        '1 tsp cumin',
        '1 tsp paprika',
        '1/2 tsp chili powder',
        'Salt and pepper to taste',
        'Tortillas',
        'Sour cream and salsa for serving',
      ],
    },
    {
      id: 23,
      name: 'Chicken Caesar Salad',
      description: 'Grilled chicken on a bed of Romaine lettuce with Caesar dressing and croutons.',
      image: 'assets/Chicken Caesar Salad.jpg',
      category: 'Salad',
      ingredients: [
        '2 chicken breasts, grilled and sliced',
        '4 cups Romaine lettuce, chopped',
        '1/2 cup Caesar dressing',
        '1/4 cup Parmesan cheese, grated',
        '1 cup croutons',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 24,
      name: 'Vegetarian Chili',
      description: 'A hearty and spicy vegetarian chili loaded with beans and vegetables.',
      image: 'assets/Vegetarian Chili.jpg',
      category: 'Main Course',
      ingredients: [
        '1 onion, chopped',
        '1 bell pepper, chopped',
        '2 cloves garlic, minced',
        '1 can kidney beans, drained',
        '1 can black beans, drained',
        '1 can diced tomatoes',
        '1 tbsp chili powder',
        '1 tsp cumin',
        'Salt and pepper to taste',
        'Fresh cilantro for garnish',
      ],
    },
    {
      id: 25,
      name: 'Egg Fried Rice',
      description: 'Stir-fried rice with scrambled eggs, vegetables, and soy sauce.',
      image: 'assets/Egg Fried Rice.jpg',
      category: 'Side Dish',
      ingredients: [
        '2 cups cooked rice',
        '2 eggs, beaten',
        '1/2 cup peas and carrots',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        '1 clove garlic, minced',
        '1 green onion, chopped',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 26,
      name: 'Pork Schnitzel',
      description: 'Crispy breaded pork cutlets served with lemon wedges and mashed potatoes.',
      image: 'assets/Pork Schnitzel.jpg',
      category: 'Main Course',
      ingredients: [
        '4 pork chops, boneless',
        '1 cup breadcrumbs',
        '1/2 cup flour',
        '2 eggs, beaten',
        '1 tsp paprika',
        '1 tbsp lemon juice',
        'Salt and pepper to taste',
        'Vegetable oil for frying',
      ],
    },
    {
      id: 27,
      name: 'Stuffed Bell Peppers',
      description: 'Bell peppers filled with seasoned ground beef, rice, and topped with cheese.',
      image: 'assets/Stuffed Bell Peppers.jpg',
      category: 'Main Course',
      ingredients: [
        '4 bell peppers, tops cut off and seeded',
        '500g ground beef',
        '1 cup cooked rice',
        '1 can diced tomatoes',
        '1/2 cup cheddar cheese, shredded',
        '1 onion, chopped',
        '1 tsp cumin',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 28,
      name: 'Grilled Salmon',
      description: 'Flaky grilled salmon with a tangy lemon-dill sauce.',
      image: 'assets/Grilled Salmon.jpg',
      category: 'Main Course',
      ingredients: [
        '4 salmon fillets',
        '1 tbsp olive oil',
        '1 lemon, sliced',
        '2 tbsp fresh dill, chopped',
        '1 tbsp Dijon mustard',
        '1 tbsp honey',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 29,
      name: 'Moussaka',
      description: 'Layers of eggplant, ground beef, and béchamel sauce baked to perfection.',
      image: 'assets/Moussaka.jpg',
      category: 'Main Course',
      ingredients: [
        '2 eggplants, sliced',
        '500g ground beef',
        '1 onion, chopped',
        '1 can tomato paste',
        '2 tbsp flour',
        '2 cups milk',
        '1/2 cup grated Parmesan cheese',
        '1 egg',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 30,
      name: 'Shrimp Paella',
      description: 'A flavorful Spanish rice dish with shrimp, saffron, and vegetables.',
      image: 'assets/Shrimp Paella.jpg',
      category: 'Main Course',
      ingredients: [
        '500g shrimp, peeled and deveined',
        '2 cups Arborio rice',
        '1 onion, chopped',
        '1 bell pepper, chopped',
        '1 can diced tomatoes',
        '1/4 tsp saffron threads',
        '1/2 cup white wine',
        '4 cups chicken broth',
        '1 tsp paprika',
        'Lemon wedges for garnish',
      ],
    },
  ];

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

}