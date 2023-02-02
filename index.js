var dadosJason = $.ajax({
  url: "data.json",
  dataType: "json",
  async: false
}).responseJSON;

var divs = document.querySelectorAll(".div");
var horas = document.querySelectorAll(".hours");
var previous = document.querySelectorAll(".previous");
var data = document.querySelectorAll(".date");
var title = document.querySelectorAll(".title");

var tempoArray = document.querySelectorAll("li");

// var timeframesDaily = dadosJason.map((objeto) => [objeto.timeframes.daily]);
// var timeframesWeekly = dadosJason.map((objeto) => [objeto.timeframes.weekly]);
// var timeframesMonthly = dadosJason.map((objeto) => [objeto.timeframes.monthly]);

// var timeframesWork;
// var timeframesPlay;
// var timeframesStudy;
// var timeframesExercise;
// var timeframesSocial;
// var timeframesSelfCare;

// function removeClass(event) {
//   const elementoNovo = event.target;
//   const elementoAntigo = document.querySeletor(".active");
//   if (elementoAntigo === null) {
//     elementoNovo.classList.add("active");
//   } else {
//     elementoAntigo.classList.remove("active");
//     elementoNovo.classList.add("active");
//   }
// }

var ehDia = false;
var ehSemana = true;
var ehMes = false;

window.addEventListener("load", () => {
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];

    for (let i = 0; i < dadosJason.length; i++) {
      const objeto = dadosJason[i];

      if (ehSemana) {
        data.forEach((element) => {
          element.textContent = "Week";
        });

        if (objeto.title === "Work" && div.classList.contains("work")) {
          horas[0].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[0].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[0].textContent = objeto.title;
        }

        if (objeto.title === "Play" && div.classList.contains("play")) {
          horas[1].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[1].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[1].textContent = objeto.title;
        }

        if (objeto.title === "Study" && div.classList.contains("study")) {
          horas[2].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[2].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[2].textContent = objeto.title;
        }

        if (objeto.title === "Exercise" && div.classList.contains("exercise")) {
          horas[3].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[3].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[3].textContent = objeto.title;
        }

        if (objeto.title === "Social" && div.classList.contains("social")) {
          horas[4].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[4].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[4].textContent = objeto.title;
        }

        if (
          objeto.title === "Self Care" &&
          div.classList.contains("self-care")
        ) {
          horas[5].textContent = objeto.timeframes.weekly.current + "hrs";
          previous[5].textContent = objeto.timeframes.weekly.previous + "hrs";
          title[5].textContent = objeto.title;
        }
      }
    }
  }
});

for (let i = 0; i < tempoArray.length; i++) {
  const tempo = tempoArray[i];

  function trocaClasse() {
    var elementoNovo = tempo;
    var elementoAntigo = document.querySelector(".active");

    if (elementoAntigo === null) {
      elementoNovo.classList.add("active");
    } else {
      elementoAntigo.classList.remove("active");
      elementoNovo.classList.add("active");
    }
  }

  function validaDiaSemanaMes() {
    if (tempo.textContent.trim() === "Daily") {
      ehDia = true;
      ehSemana = false;
      ehMes = false;
    }
    if (tempo.textContent.trim() === "Weekly") {
      ehDia = false;
      ehSemana = true;
      ehMes = false;
    }
    if (tempo.textContent.trim() === "Monthly") {
      ehDia = false;
      ehSemana = false;
      ehMes = true;
    }
  }

  tempo.addEventListener("click", () => trocaClasse());
  tempo.addEventListener("click", () => validaDiaSemanaMes());
  tempo.addEventListener("click", () => {
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];

      for (let i = 0; i < dadosJason.length; i++) {
        const objeto = dadosJason[i];

        if (ehSemana) {
          data.forEach((element) => {
            element.textContent = "Week";
          });

          if (objeto.title === "Work" && div.classList.contains("work")) {
            horas[0].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[0].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[0].textContent = objeto.title;
          }

          if (objeto.title === "Play" && div.classList.contains("play")) {
            horas[1].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[1].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[1].textContent = objeto.title;
          }

          if (objeto.title === "Study" && div.classList.contains("study")) {
            horas[2].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[2].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[2].textContent = objeto.title;
          }

          if (
            objeto.title === "Exercise" &&
            div.classList.contains("exercise")
          ) {
            horas[3].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[3].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[3].textContent = objeto.title;
          }

          if (objeto.title === "Social" && div.classList.contains("social")) {
            horas[4].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[4].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[4].textContent = objeto.title;
          }

          if (
            objeto.title === "Self Care" &&
            div.classList.contains("self-care")
          ) {
            horas[5].textContent = objeto.timeframes.weekly.current + "hrs";
            previous[5].textContent = objeto.timeframes.weekly.previous + "hrs";
            title[5].textContent = objeto.title;
          }
        }

        if (ehDia) {
          data.forEach((element) => {
            element.textContent = "Day";
          });

          if (objeto.title === "Work" && div.classList.contains("work")) {
            horas[0].textContent = objeto.timeframes.daily.current + "hrs";
            previous[0].textContent = objeto.timeframes.daily.previous + "hrs";
            title[0].textContent = objeto.title;
          }

          if (objeto.title === "Play" && div.classList.contains("play")) {
            horas[1].textContent = objeto.timeframes.daily.current + "hrs";
            previous[1].textContent = objeto.timeframes.daily.previous + "hrs";
            title[1].textContent = objeto.title;
          }

          if (objeto.title === "Study" && div.classList.contains("study")) {
            horas[2].textContent = objeto.timeframes.daily.current + "hrs";
            previous[2].textContent = objeto.timeframes.daily.previous + "hrs";
            title[2].textContent = objeto.title;
          }

          if (
            objeto.title === "Exercise" &&
            div.classList.contains("exercise")
          ) {
            horas[3].textContent = objeto.timeframes.daily.current + "hrs";
            previous[3].textContent = objeto.timeframes.daily.previous + "hrs";
            title[3].textContent = objeto.title;
          }

          if (objeto.title === "Social" && div.classList.contains("social")) {
            horas[4].textContent = objeto.timeframes.daily.current + "hrs";
            previous[4].textContent = objeto.timeframes.daily.previous + "hrs";
            title[4].textContent = objeto.title;
          }

          if (
            objeto.title === "Self Care" &&
            div.classList.contains("self-care")
          ) {
            horas[5].textContent = objeto.timeframes.daily.current + "hrs";
            previous[5].textContent = objeto.timeframes.daily.previous + "hrs";
            title[5].textContent = objeto.title;
          }
        }
        if (ehMes) {
          data.forEach((element) => {
            element.textContent = "Month";
          });

          if (objeto.title === "Work" && div.classList.contains("work")) {
            horas[0].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[0].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[0].textContent = objeto.title;
          }

          if (objeto.title === "Play" && div.classList.contains("play")) {
            horas[1].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[1].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[1].textContent = objeto.title;
          }

          if (objeto.title === "Study" && div.classList.contains("study")) {
            horas[2].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[2].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[2].textContent = objeto.title;
          }

          if (
            objeto.title === "Exercise" &&
            div.classList.contains("exercise")
          ) {
            horas[3].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[3].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[3].textContent = objeto.title;
          }

          if (objeto.title === "Social" && div.classList.contains("social")) {
            horas[4].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[4].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[4].textContent = objeto.title;
          }

          if (
            objeto.title === "Self Care" &&
            div.classList.contains("self-care")
          ) {
            horas[5].textContent = objeto.timeframes.monthly.current + "hrs";
            previous[5].textContent =
              objeto.timeframes.monthly.previous + "hrs";
            title[5].textContent = objeto.title;
          }
        }
      }
    }
  });
}

// Passando os dados para os elementos
// for (let i = 0; i < divs.length; i++) {
//   const div = divs[i];

//   for (let i = 0; i < dadosJason.length; i++) {
//     const objeto = dadosJason[i];

//     if (ehSemana) {
//       data.forEach((element) => {
//         element.textContent = "Week";
//       });

//       if (objeto.title === "Work" && div.classList.contains("work")) {
//         horas[0].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[0].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[0].textContent = objeto.title;
//       }

//       if (objeto.title === "Play" && div.classList.contains("play")) {
//         horas[1].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[1].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[1].textContent = objeto.title;
//       }

//       if (objeto.title === "Study" && div.classList.contains("study")) {
//         horas[2].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[2].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[2].textContent = objeto.title;
//       }

//       if (objeto.title === "Exercise" && div.classList.contains("exercise")) {
//         horas[3].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[3].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[3].textContent = objeto.title;
//       }

//       if (objeto.title === "Social" && div.classList.contains("social")) {
//         horas[4].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[4].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[4].textContent = objeto.title;
//       }

//       if (objeto.title === "Self Care" && div.classList.contains("self-care")) {
//         horas[5].textContent = objeto.timeframes.weekly.current + "hrs";
//         previous[5].textContent = objeto.timeframes.weekly.previous + "hrs";
//         title[5].textContent = objeto.title;
//       }
//     }

//     if (ehDia) {
//       data.forEach((element) => {
//         element.textContent = "Day";
//       });

//       if (objeto.title === "Work" && div.classList.contains("work")) {
//         horas[0].textContent = objeto.timeframes.monthly.current + "hrs";
//         previous[0].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[0].textContent = objeto.title;
//       }

//       if (objeto.title === "Play" && div.classList.contains("play")) {
//         horas[1].textContent = objeto.timeframes.daily.current + "hrs";
//         previous[1].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[1].textContent = objeto.title;
//       }

//       if (objeto.title === "Study" && div.classList.contains("study")) {
//         horas[2].textContent = objeto.timeframes.daily.current + "hrs";
//         previous[2].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[2].textContent = objeto.title;
//       }

//       if (objeto.title === "Exercise" && div.classList.contains("exercise")) {
//         horas[3].textContent = objeto.timeframes.daily.current + "hrs";
//         previous[3].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[3].textContent = objeto.title;
//       }

//       if (objeto.title === "Social" && div.classList.contains("social")) {
//         horas[4].textContent = objeto.timeframes.daily.current + "hrs";
//         previous[4].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[4].textContent = objeto.title;
//       }

//       if (objeto.title === "Self Care" && div.classList.contains("self-care")) {
//         horas[5].textContent = objeto.timeframes.daily.current + "hrs";
//         previous[5].textContent = objeto.timeframes.daily.previous + "hrs";
//         title[5].textContent = objeto.title;
//       }
//     }
//   }
// }
