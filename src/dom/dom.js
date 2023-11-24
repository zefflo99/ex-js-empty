/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
    const changeColor = document.getElementById("change-my-color");
    changeColor.style.color = "red"
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {

    let Element = document.getElementById("add-your-elements-in-this-element");

    let FirstText = document.createElement("p");

    FirstText.textContent = "Bonjour";

    let SecondText = document.createElement("p");

    SecondText.textContent = "Toto";


    Element.appendChild(FirstText);
    Element.appendChild(SecondText);

}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {

    let ContainerElement = document.getElementById("add-list-here");


    let ulElement = document.createElement("ul");


    listElements.forEach(function (item){

      let liElement = document.createElement("li");

      liElement.textContent = item.name;


      liElement.style.backgroundColor = item.color;

      ulElement.appendChild(liElement);
    });

    ContainerElement.appendChild(ulElement);



}
