import produce from 'immer';
import {
  LOAD_MATCHS_REQUEST,
  LOAD_MATCHS_SUCCESS,
  LOAD_MATCHS_FAILURE,
} from '../sagas/match';

export const initialState = {
  isLoadingMatchs: false,
  isLoadedMatchs: false,
  loadMatchsErrorReason: '',
  matchs: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_MATCHS_REQUEST:
        draft.isLoadingMatchs = true;
        draft.isLoadedMatchs = false;
        break;
      case LOAD_MATCHS_SUCCESS:
        draft.isLoadingMatchs = false;
        draft.isLoadedMatchs = true;
        draft.matchs = action.data;
        break;
      case LOAD_MATCHS_FAILURE:
        draft.isLoadingMatchs = false;
        draft.isLoadedMatchs = true;
        draft.matchs = null;
        draft.loadingErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
