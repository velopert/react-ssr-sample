import { handleActions } from 'redux-actions';
import createPromiseThunk from '../../lib/createPromiseThunk';
import * as api from '../../lib/api';

export const getProfile = createPromiseThunk('GET_PROFILE', api.getProfile);

export default handleActions(
  {
    GET_PROFILE_SUCCESS: (state, action) => action.payload.data
  },
  null
);
