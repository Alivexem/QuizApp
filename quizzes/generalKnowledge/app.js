


const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuwrap");
let click = true
menuBtn.addEventListener("click", () => {
    if(click){
      menu.classList.add("clicked");
      menu.style.display = "flex"
    }else{
        menu.classList.remove("clicked");
        menu.style.display = "none"
    }
    click = !click
});

let audio = new Audio("audio.wav")

let first_quest = document.getElementById("one");
let second_quest = document.getElementById("two");
let third_quest = document.getElementById("three");
let fourth_quest = document.getElementById("four");
let fifth_quest = document.getElementById("five");
let sixth_quest = document.getElementById("six");
let seventh_quest = document.getElementById("seven");
let eighth_quest = document.getElementById("eight");
let ninth_quest = document.getElementById("nine");
let tenth_quest = document.getElementById("ten");
let eleventh_quest = document.getElementById("eleven");
let twelfth_quest = document.getElementById("twelve");
let thirteenth_quest = document.getElementById("thirteen");
let fourteenth_quest = document.getElementById("fourteen");
let fifteenth_quest = document.getElementById("fifteen");

let start_btn = document.getElementById("btn");

let first_btn = document.getElementById("onebut");
let second_btn = document.getElementById("twobut");
let third_btn = document.getElementById("threebut");
let fourth_btn = document.getElementById("fourbut");
let fifth_btn = document.getElementById("fivebut");
let sixth_btn = document.getElementById("sixbut");
let seventh_btn = document.getElementById("sevenbut");
let eighth_btn = document.getElementById("eightbut");
let ninth_btn = document.getElementById("ninebut");
let tenth_btn = document.getElementById("tenbut");
let eleventh_btn = document.getElementById("elevenbut");
let twelfth_btn = document.getElementById("twelvebut");
let thirteenth_btn = document.getElementById("thirteenbut");
let fourteenth_btn = document.getElementById("fourteenbut");
let fifteenth_btn = document.getElementById("fifteenbut");


let score = 0
let completed = document.getElementById("completed")

completed.style.display = "none"


start_btn.addEventListener("click",() => {
    start_btn.style.display = "none"
    first_quest.style.display = "flex"
    window.location.hash = ("#one")
})


let first_quests = document.querySelectorAll(".ones")
    first_quests.forEach((item) => {
        item.addEventListener("click",() => {
            first_btn.style.pointerEvents = "auto"
            first_btn.style.backgroundColor = "green"
        })
    })
    let second_quests = document.querySelectorAll(".twos")
    second_quests.forEach((item) => {
        item.addEventListener("click",() => {
            second_btn.style.pointerEvents = "auto"
            second_btn.style.backgroundColor = "green"
        })
    })
    let third_quests = document.querySelectorAll(".threes")
    third_quests.forEach((item) => {
        item.addEventListener("click",() => {
            third_btn.style.pointerEvents = "auto"
            third_btn.style.backgroundColor = "green"
        })
    })
    let fourth_quests = document.querySelectorAll(".fours")
    fourth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            fourth_btn.style.pointerEvents = "auto"
            fourth_btn.style.backgroundColor = "green"
        })
    })
    let fifth_quests = document.querySelectorAll(".fives")
    fifth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            fifth_btn.style.pointerEvents = "auto"
            fifth_btn.style.backgroundColor = "green"
        })
    })
    let sixth_quests = document.querySelectorAll(".sixs")
    sixth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            sixth_btn.style.pointerEvents = "auto"
            sixth_btn.style.backgroundColor = "green"
        })
    })
    let seventh_quests = document.querySelectorAll(".sevens")
    seventh_quests.forEach((item) => {
        item.addEventListener("click",() => {
            seventh_btn.style.pointerEvents = "auto"
            seventh_btn.style.backgroundColor = "green"
        })
    })
    let eighth_quests = document.querySelectorAll(".eights")
    eighth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            eighth_btn.style.pointerEvents = "auto"
            eighth_btn.style.backgroundColor = "green"
        })
    })
    let ninth_quests = document.querySelectorAll(".nines")
    ninth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            ninth_btn.style.pointerEvents = "auto"
            ninth_btn.style.backgroundColor = "green"
        })
    })
    let tenth_quests = document.querySelectorAll(".tens")
    tenth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            tenth_btn.style.pointerEvents = "auto"
            tenth_btn.style.backgroundColor = "green"
        })
    })
    let eleventh_quests = document.querySelectorAll(".elevens")
    eleventh_quests.forEach((item) => {
        item.addEventListener("click",() => {
            eleventh_btn.style.pointerEvents = "auto"
            eleventh_btn.style.backgroundColor = "green"
        })
    })
    let twelfth_quests = document.querySelectorAll(".twelves")
    twelfth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            twelfth_btn.style.pointerEvents = "auto"
            twelfth_btn.style.backgroundColor = "green"
        })
    })
    let thirteenth_quests = document.querySelectorAll(".thirteens")
    thirteenth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            thirteenth_btn.style.pointerEvents = "auto"
            thirteenth_btn.style.backgroundColor = "green"
        })
    })
    let fourteenth_quests = document.querySelectorAll(".fourteens")
    fourteenth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            fourteenth_btn.style.pointerEvents = "auto"
            fourteenth_btn.style.backgroundColor = "green"
        })
    })
    let fifteenth_quests = document.querySelectorAll(".fifteens")
    fifteenth_quests.forEach((item) => {
        item.addEventListener("click",() => {
            fifteenth_btn.style.pointerEvents = "auto"
            fifteenth_btn.style.backgroundColor = "green"
        })
    })
    
    

first_btn.addEventListener("click", () => {
      first_quest.style.display = "none";
    second_quest.style.display = "flex";
    let first_quests = document.querySelectorAll(".ones")
    first_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            first_btn.style.display = "none"
        }
    })
});

second_btn.addEventListener("click", () => {
      second_quest.style.display = "none";
    third_quest.style.display = "flex";
    let second_quests = document.querySelectorAll(".twos")
    second_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            second_btn.style.display = "none"
        }
    })
});

third_btn.addEventListener("click", () => {
      third_quest.style.display = "none";
    fourth_quest.style.display = "flex";
    let third_quests = document.querySelectorAll(".threes")
    third_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            third_btn.style.display = "none"
        }
    })
});

fourth_btn.addEventListener("click", () => {
     fourth_quest.style.display = "none";
    fifth_quest.style.display = "flex";
    let fourth_quests = document.querySelectorAll(".fours")
    fourth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            fourth_btn.style.display = "none"
        }
    })
});

fifth_btn.addEventListener("click", () => {
     fifth_quest.style.display = "none";
    sixth_quest.style.display = "flex";
    let fifth_quests = document.querySelectorAll(".fives")
    fifth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            fifth_btn.style.display = "none"
        }
    })
});

sixth_btn.addEventListener("click", () => {
     sixth_quest.style.display = "none";
    seventh_quest.style.display = "flex";
    let sixth_quests = document.querySelectorAll(".sixs")
    sixth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            sixth_btn.style.display = "none"
        }
    })
});

seventh_btn.addEventListener("click", () => {
     seventh_quest.style.display = "none";
    eighth_quest.style.display = "flex";
    let seventh_quests = document.querySelectorAll(".sevens")
    seventh_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            seventh_btn.style.display = "none"
        }
    })
});

eighth_btn.addEventListener("click", () => {
     eighth_quest.style.display = "none";
    ninth_quest.style.display = "flex";
    let eight_quests = document.querySelectorAll(".eights")
    eight_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            eighth_btn.style.display = "none"
        }
    })
});

ninth_btn.addEventListener("click", () => {
     ninth_quest.style.display = "none";
    tenth_quest.style.display = "flex";
    let ninth_quests = document.querySelectorAll(".nines")
    ninth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            ninth_btn.style.display = "none"
        }
    })
});

tenth_btn.addEventListener("click", () => {
     tenth_quest.style.display = "none";
    eleventh_quest.style.display = "flex";
    let tenth_quests = document.querySelectorAll(".tens")
    tenth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            tenth_btn.style.display = "none"
        }
    })
});

eleventh_btn.addEventListener("click", () => {
    eleventh_quest.style.display = "none";
    twelfth_quest.style.display = "flex";
    let eleventh_quests = document.querySelectorAll(".elevens")
    eleventh_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            eleventh_btn.style.display = "none"
        }
        
    })
});

twelfth_btn.addEventListener("click", () => {
     twelfth_quest.style.display = "none";
    thirteenth_quest.style.display = "flex";
    let twelve_quests = document.querySelectorAll(".twelves")
    twelve_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            twelfth_btn.style.display = "none"
        }
    })
});

thirteenth_btn.addEventListener("click", () => {
     thirteenth_quest.style.display = "none";
    fourteenth_quest.style.display = "flex";
    let thirteenth_quests = document.querySelectorAll(".thirteens")
    thirteenth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            thirteenth_btn.style.display = "none"
        }
    })
});

fourteenth_btn.addEventListener("click", () => {
     fourteenth_quest.style.display = "none";
    fifteenth_quest.style.display = "flex";
    let fourteenth_quests = document.querySelectorAll(".fourteens")
    fourteenth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            fourteenth_btn.style.display = "none"
        }
    })
});
let quizScore = document.getElementById("quizScore")

fifteenth_btn.addEventListener("click",() => {
    fifteenth_quest.style.display = "none";
    let fifteenth_quests = document.querySelectorAll(".fifteens")
    fifteenth_quests.forEach((item) => {
        if(item.dataset.value == "true"){
            if(item.style.backgroundColor == "cyan"){
                score += 1
            }
        }
        if(item.dataset.value == "true"){
            item.style.backgroundColor = "green"
            item.style.color = "white"
            fourteenth_btn.style.display = "none"
        }
    })
    completed.style.display = "flex"
    fifteenth_btn.style.display = "none"
    quizScore.innerText = score 
    audio.play()
})



let first_answers = document.querySelectorAll(".ones");

first_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        first_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});

let second_answers = document.querySelectorAll(".twos");

second_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        second_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let third_answers = document.querySelectorAll(".threes");

third_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        third_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let fourth_answers = document.querySelectorAll(".fours");

fourth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        fourth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});



let fifth_answers = document.querySelectorAll(".fives");

fifth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        fifth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});

let sixth_answers = document.querySelectorAll(".sixs");

sixth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        sixth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let seventh_answers = document.querySelectorAll(".sevens");

seventh_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        seventh_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let eight_answers = document.querySelectorAll(".eights");

eight_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        eight_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let ninth_answers = document.querySelectorAll(".nines");

ninth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        ninth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});

let tenth_answers = document.querySelectorAll(".tens");

tenth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        tenth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let eleventh_answers = document.querySelectorAll(".elevens");

eleventh_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        eleventh_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let twelve_answers = document.querySelectorAll(".twelves");

twelve_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        twelve_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});



let thirteenth_answers = document.querySelectorAll(".thirteens");

thirteenth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        thirteenth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});

let fourteenth_answers = document.querySelectorAll(".fourteens");

fourteenth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        fourteenth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let fifteenth_answers = document.querySelectorAll(".fifteens");

fifteenth_answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        fifteenth_answers.forEach((otherAnswer) => {
            otherAnswer.style.backgroundColor = "#eed97c";
        });
        e.target.style.backgroundColor = "cyan";
        console.log(answer.dataset.value)
    });
});


let view = document.getElementById("see")

view.addEventListener("click",() => {
    let all_quests = document.querySelectorAll(".quest")
    all_quests.forEach((item) => {
        item.style.display = "flex"
        item.style.border = "1px solid white"
        item.style.borderRadius = "5px"
    })
    let all_div = document.querySelectorAll(".wrap")
    all_div.forEach((div) => {
        if(div.style.backgroundColor == "cyan"){
            div.style.backgroundColor = "red"
        }
        div.style.pointerEvents = "none"
    })
    window.location.hash = "#one"
    view.style.display = "none"
})


let refresh = document.getElementById("refresh")
refresh.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = window.location.pathname;
    window.location.reload();
});
