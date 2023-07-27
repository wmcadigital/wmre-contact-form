import React, { useReducer, createContext } from 'react';
import { getSearchParam } from 'helpers/URLSearchParams';

export const FormDataContext = createContext();

export const FormDataProvider = (props) => {
  const { children } = props || {};

  let FirstName = null;
  let LastName = null;
  const UrlName = getSearchParam('name');

  if (UrlName && decodeURI(UrlName)) {
    [FirstName, LastName] = decodeURI(UrlName).split(' ');
  }

  // Set intial state of when
  const initialState = {
    currentStep: getSearchParam('email') && getSearchParam('email').length > 0 ? 3 : 1,
    formData: {
      Firstname: FirstName,
      LastName,
    },
    hasReachedConfirmation: false,
  };

  // Set up a reducer so we can change state based on centralised logic here
  const reducer = (state, action) => {
    // Update the point to chosen
    switch (action.type) {
      // Remove the waypoint by the id
      case 'UPDATE_FORM_DATA': {
        return {
          ...state,
          formData: { ...state.formData, ...action.payload },
        };
      }

      // Remove the waypoint by the id
      case 'UPDATE_STEP': {
        return {
          ...state,
          currentStep: action.payload,
        };
      }

      case 'REACHED_CONFIRMATION': {
        return {
          ...state,
          hasReachedConfirmation: action.payload,
        };
      }

      // Default should return intial state if error
      default:
        return initialState;
    }
  };

  // Set up reducer using reducer logic and initialState by default
  const [formState, formDispatch] = useReducer(reducer, initialState);

  // Pass state and dispatch in context and make accessible to children it wraps
  return (
    <FormDataContext.Provider value={[formState, formDispatch]}>
      {children}
    </FormDataContext.Provider>
  );
};
