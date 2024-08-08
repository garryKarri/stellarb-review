import {
  getIngredients,
  initialStateIngredients,
  ingredientsReducer
} from './ingredients';

const ingredients = [
  {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0941',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
  }
];

describe('Test ingredients slice', () => {
  it('test loading ingredients', () => {
    const stateIsLoading = ingredientsReducer(initialStateIngredients, {
      type: getIngredients.pending.type
    });

    expect(stateIsLoading.isIngredientsLoading).toEqual(true);
    const newStateIsLoading = ingredientsReducer(stateIsLoading, {
      type: getIngredients.fulfilled.type,
      payload: ingredients
    });
    expect(newStateIsLoading.isIngredientsLoading).toEqual(false);
    expect(newStateIsLoading.ingredients).toEqual(ingredients);
  });

  it('test get ingredients', () => {
    const state = ingredientsReducer(initialStateIngredients, {
      type: getIngredients.fulfilled.type,
      payload: ingredients
    });

    expect(state.ingredients).toEqual(ingredients);
  });

  it('test get ingredients rejected', () => {
    const state = ingredientsReducer(initialStateIngredients, {
      type: getIngredients.rejected.type
    });

    expect(state).toEqual(initialStateIngredients);
  });
});
