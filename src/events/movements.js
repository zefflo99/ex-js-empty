/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {

let screenLog = document.querySelector("#mouse-coordinates");
document.addEventListener("mousemove", function (event){

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        screenLog.textContent = "x: " + mouseX + ", y: " + mouseY;
    });
}

/**
 *
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {

    const inputElement = document.querySelector("#focus-me");

    const labels = document.querySelectorAll('label[for="focus-me"]');

    const originalBorderColor = window.getComputedStyle(inputElement).borderColor;

    let previousBorderColor = originalBorderColor;

    let originalLabel = [];

    for (let i of inputElement.labels) {
        originalLabel.push(i.textContent);
    }

    function getRandomColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];

        const filteredColors = colors.filter(color => color !== previousBorderColor);

        return filteredColors[Math.floor(Math.random() * filteredColors.length)];
    }


    labels.forEach((label) => {

        inputElement.addEventListener("mouseout", () => {

            for (let i = 0; i < inputElement.labels.length; i++) {
                inputElement.labels[i].textContent = originalLabel[i];
            }
        });

        inputElement.addEventListener("mouseover", function () {

            for (let i of inputElement.labels) {
                label.textContent = "survole activer";
            }
        });
    });


    inputElement.addEventListener("focus", function () {

        const newBorderColor = getRandomColor();

        inputElement.style.borderColor = newBorderColor;

        previousBorderColor = newBorderColor;
    });


    inputElement.addEventListener("blur", function () {

        inputElement.style.borderColor = originalBorderColor;
    });




}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    const inputElement = document.getElementById('focus-me');
    const labelElements = document.querySelectorAll('label[for="focus-me"]');

    let defaultBorderColor = '';
    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
    const updateDefaultColor = () => {
        defaultBorderColor = getRandomColor();
        labelElements.forEach(label => label.style.color = defaultBorderColor);
    };
    inputElement.addEventListener('input', () => {
        updateDefaultColor();
    });
    inputElement.addEventListener('blur', () => {
        inputElement.style.borderColor = defaultBorderColor;
    });
}
