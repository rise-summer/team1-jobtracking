const ADD_APPLICATION = "ADD_APPLICATION";

export function addApplication(application){
  return {type: ADD_APPLICATION, payload: application};
}
