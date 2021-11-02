export const forFirstCharUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function getContactsList(callback) {
  fetch("https://randomuser.me/api/?results=400")
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => callback(error));
}

export function updateNameFilter(setFilter, name) {
  setFilter((prevState) => {
    return {
      ...prevState,
      nameFilter: forFirstCharUppercase(name),
    };
  });
}
export function updateGenderFilter(setFilter, gender) {
  setFilter((prevState) => {
    return {
      ...prevState,
      genderFilter: gender,
    };
  });
}
