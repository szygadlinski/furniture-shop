/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getComparison = ({ products }) =>
  products.filter(product => product.compare === true);

const createActionName = name => `app/products/${name}`;

const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const COMPARISON_HANDLER = createActionName('COMPARISON_HANDLER');
const REMOVAL_HANDLER = createActionName('REMOVAL_HANDLER');

export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });
export const compareItems = payload => ({ payload, type: COMPARISON_HANDLER });
export const removeItem = payload => ({ payload, type: REMOVAL_HANDLER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorite = !product.favorite;
          return product;
        } else {
          return product;
        }
      });
    }

    case COMPARISON_HANDLER: {
      let compareCount = 0;
      for (let product of statePart) {
        if (product.compare) {
          compareCount++;
        }
      }

      return statePart.map(product => {
        if (product.id === action.payload.id) {
          if (product.compare) {
            product.compare = false;
          } else if (compareCount < 4) {
            product.compare = true;
          }
        }
        return product;
      });
    }

    case REMOVAL_HANDLER: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
    }

    default:
      return statePart;
  }
}
