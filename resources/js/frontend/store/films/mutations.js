
import {
  SET_ORDER_BY,
  SET_LIMIT,
  SET_OFFSET,
  SET_RESULT,
} from './mutationTypes';

export default {
  [SET_ORDER_BY](state, value) {
    state.orderBy = value;
  },

  [SET_LIMIT](state, value) {
    state.limit = value;
  },

  [SET_OFFSET](state, value) {
    state.offset = value;
  },

  [SET_RESULT](state, value) {
    state.result = value;
  }
};
