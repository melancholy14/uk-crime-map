// @flow

import { createSelector } from 'reselect';

import {
  allCrime,
} from '../../utils/constants';

const getSearch = state => state.search;
const getForm = state => state.form;

export const getCategoriesState = createSelector(
  [getForm, getSearch],
  (form, search) => {
    const {
      search: {
        values: {
          minDate,
          maxDate,
          postcode,
          ...fields
        } = {},
        active,
      } = {},
    } = form;

    const {
      category,
    } = search;

    let checkboxes = [];
    if (active) {
      if (active === allCrime.url) {
        checkboxes = category.map(cat => ({
          ...cat,
          checked: fields[active],
        }));
      } else {
        const t = Object.values(fields).every(v => v);
        checkboxes = category.map(cat => ({
          ...cat,
          checked: cat.url === allCrime.url ? t
            : (fields[cat.url] === undefined || !!fields[cat.url]),
        }));
      }
    } else {
      checkboxes = category.map(cat => ({
        ...cat,
        checked: (fields[cat.url] === undefined || !!fields[cat.url]),
      }));
    }

    return checkboxes;
  },
);

export const getSearchState = createSelector(
  [getSearch],
  (search) => {
    const {
      loading,
      message,
      ...state
    } = search;

    return state;
  },
);

export const getMetaState = createSelector(
  [getSearch],
  (search) => {
    const {
      loading,
      message,
    } = search;

    return {
      loading,
      message,
    };
  },
);