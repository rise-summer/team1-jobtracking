const ADD_URL = "ADD_URL"
const ADD_APPLICATION = "ADD_APPLICATION";


export function addUrl(url){
let payload = {url:url}
return {title: ADD_URL, payload}

}
export function addApplication(
  url,
  role,
  title,
  deadline,
  location,
  description,
  stage
) {
  let payload = {
    url: url,
    role: role,
    title: title,
    deadline: deadline,
    location: location,
    description: description,
    stage: stage,
  };
  return { title: ADD_APPLICATION, payload };
}
