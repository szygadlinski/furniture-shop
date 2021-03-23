/* selectors */
export const getAll = ({ favourites }) => favourites;
export const isFavourite = ({ favourites }, id) =>
  favourites.find(favourite => favourite === id) ? true : false;

/* action name creator */
const createActionName = name => `app/favourites/${name}`;

/* action types */
const ADD = createActionName('ADD');
const REMOVE = createActionName('REMOVE');

/* action creators */
export const addFavourite = payload => ({ payload, type: ADD });
export const removeFavourite = payload => ({ payload, type: REMOVE });

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
