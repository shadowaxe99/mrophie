// frontend/src/actions/rules.js

import axios from 'axios';

// Action Types
export const ADD_RULE = 'ADD_RULE';
export const UPDATE_RULE = 'UPDATE_RULE';
export const DELETE_RULE = 'DELETE_RULE';
export const GET_RULES = 'GET_RULES';

// Action Creators
export const addRule = (rule) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/rules', rule);
      dispatch({ type: ADD_RULE, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateRule = (id, rule) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/rules/${id}`, rule);
      dispatch({ type: UPDATE_RULE, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteRule = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/rules/${id}`);
      dispatch({ type: DELETE_RULE, payload: id });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getRules = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/rules');
      dispatch({ type: GET_RULES, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
};
