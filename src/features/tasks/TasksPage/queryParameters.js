import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (target) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(target);
};

export const useReplaceQuaryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  
  return ({ key, value }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`)
  }

};


