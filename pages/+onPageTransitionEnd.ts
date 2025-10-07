export async function onPageTransitionEnd() {
  document.querySelector("body")?.classList.remove("page-is-transitioning");
}
