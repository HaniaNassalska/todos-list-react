export const getExampleTask = async () => {
  const response = await fetch("/todos-list-react/exempleTasks.json")
  if (!response.ok) {
    new Error((response).statusText);
  }
 
  return await response.json();
};