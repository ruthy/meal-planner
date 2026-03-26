export interface DetoxMeal {
  time: 'morning' | 'noon' | 'evening';
  titleKey: string;
  descKey: string;
}

export const DETOX_PLAN: DetoxMeal[] = [
  {
    time: 'morning',
    titleKey: 'gut.detox.morning.title',
    descKey: 'gut.detox.morning.desc',
  },
  {
    time: 'noon',
    titleKey: 'gut.detox.noon.title',
    descKey: 'gut.detox.noon.desc',
  },
  {
    time: 'evening',
    titleKey: 'gut.detox.evening.title',
    descKey: 'gut.detox.evening.desc',
  },
];

export interface Recipe {
  id: string;
  nameKey: string;
  emoji: string;
  prepTime: string;
  servings: string;
  ingredientsKey: string;
  instructionsKey: string;
  notesKey?: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 'celery_shake',
    nameKey: 'gut.recipe.celery_shake.name',
    emoji: '🥤',
    prepTime: '5',
    servings: '1',
    ingredientsKey: 'gut.recipe.celery_shake.ingredients',
    instructionsKey: 'gut.recipe.celery_shake.instructions',
    notesKey: 'gut.recipe.celery_shake.notes',
  },
  {
    id: 'chia_pudding',
    nameKey: 'gut.recipe.chia_pudding.name',
    emoji: '🥣',
    prepTime: '10',
    servings: '1',
    ingredientsKey: 'gut.recipe.chia_pudding.ingredients',
    instructionsKey: 'gut.recipe.chia_pudding.instructions',
  },
  {
    id: 'rich_salad',
    nameKey: 'gut.recipe.rich_salad.name',
    emoji: '🥗',
    prepTime: '10',
    servings: '1',
    ingredientsKey: 'gut.recipe.rich_salad.ingredients',
    instructionsKey: 'gut.recipe.rich_salad.instructions',
  },
  {
    id: 'buckwheat_tortilla',
    nameKey: 'gut.recipe.buckwheat_tortilla.name',
    emoji: '🌯',
    prepTime: '30',
    servings: '15',
    ingredientsKey: 'gut.recipe.buckwheat_tortilla.ingredients',
    instructionsKey: 'gut.recipe.buckwheat_tortilla.instructions',
    notesKey: 'gut.recipe.buckwheat_tortilla.notes',
  },
  {
    id: 'orange_soup',
    nameKey: 'gut.recipe.orange_soup.name',
    emoji: '🍲',
    prepTime: '30',
    servings: '4',
    ingredientsKey: 'gut.recipe.orange_soup.ingredients',
    instructionsKey: 'gut.recipe.orange_soup.instructions',
    notesKey: 'gut.recipe.orange_soup.notes',
  },
  {
    id: 'quinoa_patties',
    nameKey: 'gut.recipe.quinoa_patties.name',
    emoji: '🥙',
    prepTime: '25',
    servings: '20',
    ingredientsKey: 'gut.recipe.quinoa_patties.ingredients',
    instructionsKey: 'gut.recipe.quinoa_patties.instructions',
  },
  {
    id: 'tofu_shawarma',
    nameKey: 'gut.recipe.tofu_shawarma.name',
    emoji: '🍛',
    prepTime: '15',
    servings: '3',
    ingredientsKey: 'gut.recipe.tofu_shawarma.ingredients',
    instructionsKey: 'gut.recipe.tofu_shawarma.instructions',
  },
  {
    id: 'baked_falafel',
    nameKey: 'gut.recipe.baked_falafel.name',
    emoji: '🧆',
    prepTime: '30',
    servings: '20',
    ingredientsKey: 'gut.recipe.baked_falafel.ingredients',
    instructionsKey: 'gut.recipe.baked_falafel.instructions',
    notesKey: 'gut.recipe.baked_falafel.notes',
  },
  {
    id: 'choco_dates',
    nameKey: 'gut.recipe.choco_dates.name',
    emoji: '🍫',
    prepTime: '15',
    servings: '20',
    ingredientsKey: 'gut.recipe.choco_dates.ingredients',
    instructionsKey: 'gut.recipe.choco_dates.instructions',
  },
  {
    id: 'keto_meal',
    nameKey: 'gut.recipe.keto_meal.name',
    emoji: '🍳',
    prepTime: '10',
    servings: '1',
    ingredientsKey: 'gut.recipe.keto_meal.ingredients',
    instructionsKey: 'gut.recipe.keto_meal.instructions',
  },
  {
    id: 'fish_patties',
    nameKey: 'gut.recipe.fish_patties.name',
    emoji: '🐟',
    prepTime: '25',
    servings: '4',
    ingredientsKey: 'gut.recipe.fish_patties.ingredients',
    instructionsKey: 'gut.recipe.fish_patties.instructions',
  },
  {
    id: 'quinoa_avocado',
    nameKey: 'gut.recipe.quinoa_avocado.name',
    emoji: '🥑',
    prepTime: '20',
    servings: '2',
    ingredientsKey: 'gut.recipe.quinoa_avocado.ingredients',
    instructionsKey: 'gut.recipe.quinoa_avocado.instructions',
  },
  {
    id: 'sardine_wraps',
    nameKey: 'gut.recipe.sardine_wraps.name',
    emoji: '🥬',
    prepTime: '5',
    servings: '1',
    ingredientsKey: 'gut.recipe.sardine_wraps.ingredients',
    instructionsKey: 'gut.recipe.sardine_wraps.instructions',
  },
];

export const COMMON_TRIGGERS = [
  'gut.trigger.white_bread',
  'gut.trigger.dairy',
  'gut.trigger.legumes',
  'gut.trigger.cruciferous',
  'gut.trigger.raw_veggies',
  'gut.trigger.carbonated',
  'gut.trigger.fast_eating',
  'gut.trigger.snacking',
  'gut.trigger.sugar_subs',
  'gut.trigger.gluten',
] as const;
