// Assuming the image is saved as "kitten_image.png" in the "images" folder.
document.addEventListener("DOMContentLoaded", function() {
    // Create a container for the coloring page
    const container = document.createElement("div");
    container.classList.add("coloring-page-container");

    // Create the image element
    const img = document.createElement("img");
    img.src = "images/A_black_and_white_line_drawing_features_a_cute_car.png";
    img.alt = "Kitten Coloring Page";
    img.classList.add("coloring-image");
    container.appendChild(img);

    // Create a color picker
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.classList.add("color-picker");
    container.appendChild(colorPicker);

    // Add the coloring page container to the body of the webpage
    document.body.appendChild(container);

    // Coloring functionality: change pixel color when clicked
    img.addEventListener("click", function(event) {
        // Only color if a color is selected
        if (colorPicker.value) {
            const color = colorPicker.value;
            event.target.style.fill = color; // Fill pixel color (works if SVG)
        }
    });
});
