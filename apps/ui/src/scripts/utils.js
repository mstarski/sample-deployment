String.prototype.toElement = function (el = "span") {
  const span = document.createElement(el);
  span.innerHTML = this.toString();

  return span;
};

Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

/**
 *
 * @param selector
 * @param options {{ multi: boolean }}
 * @returns html element/list
 */
const $ = (selector, options = {}) =>
  options.multi
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);

const toggleButtons = (selector = "button") => {
  $(selector, { multi: true }).forEach((btn) => (btn.disabled = !btn.disabled));
};

// https://stackoverflow.com/a/2117523
const uuidv4 = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
