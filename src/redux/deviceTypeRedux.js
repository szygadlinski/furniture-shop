/*selectors*/
export const getDeviceType = ({ deviceType }) => deviceType;

/*action name creator*/
const reducerName = 'deviceType';
const createActionName = name => `app/${reducerName}/${name}`;

/*action types*/
const DETERMINE_WINDOW_WIDTH = createActionName('DETERMINE_WINDOW_WIDTH');

/*action creators*/
export const determineWindowWidth = payload => ({
  payload,
  type: DETERMINE_WINDOW_WIDTH,
});

/*reducer*/
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case DETERMINE_WINDOW_WIDTH: {
      let screenSize = '';
      if (action.payload < 768) {
        screenSize = 'mobile';
      } else if (action.payload < 992) {
        screenSize = 'tablet';
      } else {
        screenSize = 'desktop';
      }
      return screenSize;
    }
    default:
      return statePart;
  }
}
