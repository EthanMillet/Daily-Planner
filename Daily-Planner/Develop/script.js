// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    var text9 = $("#hour-9").find("textarea");
    var text10 = $("#hour-10").find("textarea");
    var text11 = $("#hour-11").find("textarea");
    var text12 = $("#hour-12").find("textarea");
    var text1 = $("#hour-1").find("textarea");
    var text2 = $("#hour-2").find("textarea");
    var text3 = $("#hour-3").find("textarea");
    var text4 = $("#hour-4").find("textarea");
    var text5 = $("#hour-5").find("textarea");
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', saveFunc);

    function saveFunc() {
        for (i = 1; i < 13; i++) {
            if (i != 6 && i != 7 && i != 8) {
    var tasks = $("#hour-" + i).find("textarea").val();
        localStorage.setItem("task" + i, JSON.stringify(tasks));
   };
    }
   }
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
   var timeformat = dayjs().format('H')

    for (i = 9; i < 24; i++) {
        
        if (timeformat > i) {
            $("#hour-" + i).removeClass("future")
            $("#hour-" + i).addClass("past")
        } else if (timeformat == i) {
            $("#hour-" + i).removeClass("future")
            $("#hour-" + i).addClass("present")
        }
        else {
            
        }

};


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
        function readStorage() {
            var task9 = localStorage.getItem('task9');
            var task10 = localStorage.getItem('task10');
            var task11 = localStorage.getItem('task11');
            var task12 = localStorage.getItem('task12');
            var task1 = localStorage.getItem('task1');
            var task2 = localStorage.getItem('task2');
            var task3 = localStorage.getItem('task3');
            var task4 = localStorage.getItem('task4');
            var task5 = localStorage.getItem('task5');
            if (task9 || task10 || task11 || task12 || task1 || task2 || task3 || task4 || task5) {
                var tasks9 = JSON.parse(task9);
                var tasks10 = JSON.parse(task10);
                var tasks11 = JSON.parse(task11);
                var tasks12 = JSON.parse(task12);
                var tasks1 = JSON.parse(task1);
                var tasks2 = JSON.parse(task2);
                var tasks3 = JSON.parse(task3);
                var tasks4 = JSON.parse(task4);
                var 
                tasks5 = JSON.parse(task5);

                text9.append(tasks9);
                text10.append(tasks10);
                text11.append(tasks11);
                text12.append(tasks12);
                text1.append(tasks1);
                text2.append(tasks2);
                text3.append(tasks3);
                text4.append(tasks4);
                text5.append(tasks5);
            } else {
                task9 = [];
                task10 = [];
                task11 = [];
                task12 = [];
                task1 = [];
                task2 = [];
                task3 = [];
                task4 = [];
                task5 = [];
            }
            return task1 + task2 + task3 + task4 + task5 + task9 + task10 + task11 + task12;
        }
readStorage();

    // Displays the current date in the header of the page.
    var timeDisplayEl = $('#currentDay')
    var Date = dayjs().format('MMMM DD YYYY');
    timeDisplayEl.append(Date);
  });
  