//scroll to function
export function scrollTo(section) {
  section.current.scrollIntoView({ behavior: "smooth"});
}

//open window
export const openURLInNewWindow = (url) => {
  window.open(url, '_blank');
};
