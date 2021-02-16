export const mouseParallaxHelper = (
  element: HTMLElement,
  event: MouseEvent
): void => {
  /*
   * Used this Stack Overflow post to determine parallax logic:
   * https://stackoverflow.com/questions/56025761/how-do-parallax-mouse-move-effect-pure-javascript
   */
  const offsetWidth = element.offsetWidth;
  const offsetHeight = element.offsetHeight;
  element.style.setProperty(
    "--mouseX",
    (event.clientX * 9) / offsetWidth + "%"
  );
  element.style.setProperty(
    "--mouseY",
    (event.clientY * 16) / offsetHeight + "%"
  );
};
