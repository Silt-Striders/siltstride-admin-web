/**
 * Visual parallax effect helper function designed to be tied to the
 * [GlobalEventHandlers#onmousemove]{@link https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove}
 * event of any [HTMLElement]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement}
 *
 * Used this [Stack Overflow post]{@link https://stackoverflow.com/questions/56025761/how-do-parallax-mouse-move-effect-pure-javascript}
 * to determine parallax logic
 * @param {HTMLElement} element The HTML element this helper is anchored to
 * @param {MouseEvent} event The MouseEvent passed in from the HTML template
 */
export const mouseParallaxHelper = (
  element: HTMLElement,
  event: MouseEvent
): void => {
  const offsetWidth = element.offsetWidth;
  const offsetHeight = element.offsetHeight;
  element.style.setProperty(
    "--mouseX",
    `${(event.clientX * 9) / offsetWidth}%`
  );
  element.style.setProperty(
    "--mouseY",
    `${(event.clientY * 16) / offsetHeight}%`
  );
};
