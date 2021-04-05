/* selectors */
export const getCurrentPrice = ({ currentPrice }) => currentPrice;

/* action name creator */
const reducerName = 'price';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_PRICE = createActionName('CHANGE_PRICE');

/* action creators */
export const changePrice = payload => ({ payload, type: CHANGE_PRICE });

/* reducer */
export default function reducer (statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PRICE:
      return parseInt(action.payload);
    default:
      return statePart;
  }
}
