/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  let trigger = document.getElementById("write-some-text");

    trigger.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
          alert(trigger.value)
      }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    let Element = document.getElementById("list-input");
    let list = document.getElementById("list");

    Element.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const texte = Element.value.trim();
            if (texte !== "") {
                const li = document.createElement("li");
                li.textContent = texte;
                list.appendChild(li);
                Element.value = "";
            }
        }
    });
    Element.addEventListener("blur", () => {
        const texte = Element.value.trim();
        if (texte !== "") {
            const li = document.createElement("li");
            li.textContent = texte;
            list.appendChild(li);
            Element.value = "";
        }
    });
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
   let move = document.getElementById("list");

   move.addEventListener('click', () => {
       move.remove()

   });

}
