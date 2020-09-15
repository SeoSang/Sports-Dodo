import produce from 'immer';
import {
  LOAD_RANKINGS_REQUEST,
  LOAD_RANKINGS_SUCCESS,
  LOAD_RANKINGS_FAILURE,
} from '../sagas/ranking';

export const initialState = {
  isLoadingRankings: false,
  isLoadedRankings: false,
  loadRankingsErrorReason: '',
  rankings: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RANKINGS_REQUEST:
        draft.isLoadingRankings = true;
        draft.isLoadedRankings = false;
        break;
      case LOAD_RANKINGS_SUCCESS:
        draft.isLoadingRankings = false;
        draft.isLoadedRankings = true;
        draft.rankings = action.data.data;
        break;
      case LOAD_RANKINGS_FAILURE:
        draft.isLoadingRankings = false;
        draft.isLoadedRankings = false;
        draft.rankings = null;
        draft.loadingErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
