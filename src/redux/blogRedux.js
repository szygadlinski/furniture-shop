/*selectors*/
export const getAll = ({ blogboxes }) => blogboxes;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
