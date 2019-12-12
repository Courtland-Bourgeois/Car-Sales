// 
export const ADD_FEATURE = 'ADD_FEATURE';
// action creator
export const addFeature = feature => {
  return {
    type: ADD_FEATURE, payload: feature
  }
}


export const REMOVE_FEATURE = 'REMOVE_FEATURE';
// action creator
export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE, payload: feature
  }
}