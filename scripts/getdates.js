const main = () => {
  /* SETS THE YEAR */
  document.getElementById("currentYear").textContent = getCurrentYear();
  /* SETS LAST MODIFIED DATE */
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${getLastModifiedDate()}`;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const getLastModifiedDate = () => {
  return document.lastModified;
};

document.addEventListener("DOMContentLoaded", main);
