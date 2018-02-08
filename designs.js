$(document).ready(function () {

    // Define variables
    let table = $("#pixel_canvas");
    let chooseColor = $("#colorPicker");
    let bgColor = $("#bg-color");

    bgColor.val("#ffffff"); // credit for help to https://discussions.udacity.com/u/m.w/summary
    makeGrid(); // have an initial grid on load

    // When size is submitted by the user, call makeGrid()
    $("#sizePicker").submit(function (event) {
        event.preventDefault(); // Prevents default submit to server and page reloading
        makeGrid();
    });

    // Make grid function
    function makeGrid() {
        let row = $("#input_height").val();
        let column = $("#input_width").val();
        table.empty(); // Clear previous grid

        // Select size input
        //create rows
        for (let i = 0; i < row; i++) {
            table.append("<tr></tr>");
        }
        //create columns
        for (let j = 0; j < column; j++) {
            table.children().append("<td></td>");
        }
    }

    // color a cell
    table.on("click", "td", function () {
        let changeColor = chooseColor.val();
        $(this).css("background-color", changeColor);
    });

    // remove color from cell on right click
    table.on("contextmenu", "td", function (e) {
        e.preventDefault();
        $(this).css("background-color", "");
        return false; //prevents context menu on right click
    });

    // drag to draw
    let isDown = false;

    //mousedown
    table.on("mousedown", function () {
        isDown = true;
    });
    //  released
    table.on("mouseup", function () {
        isDown = false;
    });

    table.on("mouseleave", function () {
        isDown = false;
    });

    //drag to paint
    table.on("mousemove", "td", function () {
        if (isDown) {
            $(this).css("background-color", chooseColor.val());
        }
    });

    //choose a bg color
    $("#bg-color").on("change", function () {
        $("td").css("background-color", $(this).val()); // credit for help to https://discussions.udacity.com/u/m.w/summary
    });

    //tools buttons

    //clear all button
    $("#clear-btn").on("click", function () {
        $("td").css("background-color", "#ffffff");
        bgColor.val("#ffffff"); // credit for help to https://discussions.udacity.com/u/m.w/summary
    });

    //Toggle grid button
    $("#toggle-btn").on("click", function () {
        $("tr, td").toggleClass("toggle");
    });

    //Brush button
    $("#brush-btn").click(function () {
        table.on("mousemove", "td", function () {
            if (isDown) {
                $(this).css("background-color", chooseColor.val());
            }
        });
        table.on("click", "td", function() {
            $(this).css("background-color", chooseColor.val());
        });
    });
    
    //Eraser button
    $("#eraser-btn").click(function () {
        table.on("mousemove", "td", function () {
            if (isDown) {
                $(this).css("background-color", bgColor.val()); // credit for help to https://discussions.udacity.com/u/m.w/summary
            }
        });
        table.on("click", "td", function() {
            $(this).css("background-color", bgColor.val());// credit for help to https://discussions.udacity.com/u/m.w/summary
        });
    });

    //collapsible tabs
    $(".tab")
    .click(function (e) {
        e.preventDefault;
        $(this).toggleClass("highlighted");
        $(this)
            .next(".tab-content")
            .slideToggle("medium");
    })
    .next()
    .hide();
});
