/* selectors */
export const getAll = ({ favorites }) => favorites;
export const isFavorite = ({ favorites }, id) =>
  favorites.find(favourite => favourite === id) ? true : false;

/* action name creator */
const createActionName = name => `app/favorites/${name}`;

/* action types */
const ADD = createActionName('ADD');
const REMOVE = createActionName('REMOVE');

/* action creators */
export const addFavorite = payload => ({ payload, type: ADD });
export const removeFavorite = payload => ({ payload, type: REMOVE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD: {
      return [...statePart, action.payload];
    }

    case REMOVE: {
      const newStatePart = statePart.filter(favourite => favourite !== action.payload);
      return [...newStatePart];
    }

    default:
      return statePart;
  }
}
