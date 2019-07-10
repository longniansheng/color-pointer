import produce from 'immer';
import ColorPoint from '../models/ColorPoint';
import Action from '../models/Action';

const pointReducer = (state: ColorPoint[], action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'MOVE':
        draft[action.payload.idx] = action.payload.point;
        return;

      default:
        return;
    }
  });

export default pointReducer;
