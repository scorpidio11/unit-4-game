
$(document).ready(function () {


    var total = 0;
    var win = 0;
    var lose = 0;
    var message = "";




    var targetNumber = Math.floor(Math.random() * 120) + 19; // random traget number 19-120
    $("#targetNum").text(targetNumber);


    // random crystal numbers

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12) + 1;

        var crystal = $("<div>");
        crystal.attr({

            "class": "crystal",
            "data-random": random

            // <div class="crystals">
            // <div class="crystal" data-random="7"></div>
        });

        $(".crystals").append(crystal);

        console.log(random);

    }
    colorReset();


    //Reset Colors while reloading Reference site  http://jsfiddle.net/VXG36/1/

    function colorReset() {
        var randomColors = ["green", "purple", "red", "blue"];
        $(".crystal").each(function (index) {
            var len = randomColors.length;
            var randomNum = Math.floor(Math.random() * len);
            $(this).css("backgroundColor", randomColors[randomNum]);
            //Removes color from array so it can't be used again
            randomColors.splice(randomNum, 1);
        });

    }


    // When user clicks crystal button

    $(".crystal").on("click", function () {
        var num = parseInt($(this).attr('data-random'));
        console.log(num);

        total += num;
        $("#totalNum").text(total);

        if (total === targetNumber) {
            $("#message").text("YOU WON");
            $("#win").text(++win);

            reset();
            colorReset();

            console.log(random);

        }

        else if (total > targetNumber) {
            $("#message").text("YOU LOST");
            $("#lose").text(++lose);

            reset();
            colorReset();
        }
    });


    function reset() {

        $("#totalNum").empty();
        total = 0;
        $("#totalNum").text(total);

        console.log(total);

        $("#targetNum").empty();
        targetNumber = Math.floor(Math.random() * 120 + 19);


        $("#targetNum").text(targetNumber);
        console.log(targetNumber);


    }

});



