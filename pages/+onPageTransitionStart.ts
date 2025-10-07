export async function onPageTransitionStart() {
  document.querySelector("body")?.classList.remove("page-is-transitioning");
}
