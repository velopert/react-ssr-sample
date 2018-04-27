import { handleActions } from 'redux-actions';
import createPromiseThunk from '../../lib/createPromiseThunk';
import * as api from '../../lib/api';

export const getRepo = createPromiseThunk('GET_REPO', api.getRepo);

export default handleActions(
  {
    GET_REPO_SUCCESS: (state, action) => action.payload.data
  },
  null
);
