 // TODO: provide initial 10x10 grid on start?

 
 $(function(){

// Define variables
const table = $("#pixel_canvas");
const submit = $("#submit_btn");
const toggle = $("#toggle-btn");
const row = $("#input_height").val();
const column = $("#input_width").val();
let chooseColor=$("#colorPicker");
// When size is submitted by the user, call makeGrid()
submit.click(function(event){
// Prevents default submit to server and page reloading   
    event.preventDefault();
    makeGrid();
});

// Make grid function
function makeGrid() {

// Clear previous grid
    table.empty(); 

// Select size input
    //create the rows
    for(let i=0; i<row; i++){
        table.append("<tr></tr>");
    }
    //create the columns
    for(let j=0; j<column; j++){
        table.children().append("<td></td>");
    }
}


// TODO: add toggle function

// color a cell
table.on("click", "td", function(){
    let changeColor=chooseColor.val();
    $(this).css("background-color", changeColor);
});

// remove color from cell on dbl click
// table.on("dblclick", "td", function(){
//     $(this).css("background-color", "#ffffff");
// });
// TODO: drag to draw




});