$(document).ready(function() {
    $("form#triangles").submit(function(event) {
        const side1 = parseInt($("input#side1").val());
        const side2 = parseInt($("input#side2").val());
        const side3 = parseInt($("input#side3").val());

        if (side1 === side2 && side2 === side3) {
            $("#equilateral").show();
        };
        if (side1 === side2 && side2 !== side3) {
            $("#isosceles").show();
        };
        if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
            $("#scalene").show();
        };
        if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
            $("#not-triangle").show();
        }


        event.preventDefault();
    });
});