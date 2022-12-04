//creating required emements
const start_button = document.querySelector(".start_button button");
const information_box = document.querySelector("information_box");
const exit_button = document.querySelector(".buttons .quit");
const continue_button = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const options_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if the start quiz button is clicked on
start_button.onclick = ()=>{
    information_box.classList.add("activeInformation"); //it will show info box
}

//if the exitQuiz button is clicked on
exit_button.onclick = ()=>{
    information_box.classList.remove(activeInformation); //hide the information box
}