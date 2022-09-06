document.getElementById('sub').addEventListener('click', getDate)

const today = new Date()
const start = new Date('September 6, 2022')
today.setUTCHours(0,0,0,0)
start.setUTCHours(0,0,0,0)
let day = Math.abs(start - today)/ (1000*60*60*24)

function getDate (){
  document.getElementById("today").innerHTML = `<a href = ${dict[day].yoga}>Yoga for today</a> <p> ${dict[day].cardio} </p> <p> ${dict[day].workout} </p>`

}

const dict = {
  0: {
    yoga: "https://www.youtube.com/watch?v=JpWa4LtKe4c&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=1",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  1: {
    yoga: "https://www.youtube.com/watch?v=ZSIp00SewO8&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=3",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  2: {
    yoga: "https://www.youtube.com/watch?v=GaL3YF1vY2k&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=4",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  3: {
    yoga: "https://www.youtube.com/watch?v=hJjqx6YlcWs&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=5",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  4: {
    yoga: "https://www.youtube.com/watch?v=-rjYMUNJsO0&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=6",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  5: {
    yoga: "https://www.youtube.com/watch?v=jWMtgM_8jAE&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=7",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  6: {
    yoga: "https://www.youtube.com/watch?v=aAVOdXvdtk8&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=8",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  7: {
    yoga: "https://www.youtube.com/watch?v=uxWJRKyUNZo&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=9",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  8: {
    yoga: "https://www.youtube.com/watch?v=18oXIcsTpUY&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=10",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  9: {
    yoga: "https://www.youtube.com/watch?v=JAOUZR3Jw3E&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=11",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  10: {
    yoga: "https://www.youtube.com/watch?v=upiiNyibfF0&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=12",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  11: {
    yoga: "https://www.youtube.com/watch?v=hmUAQIxZwXw&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=13",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },  
  12: {
    yoga: "https://www.youtube.com/watch?v=5sTZMSGurlg&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=14",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  13: {
    yoga: "https://www.youtube.com/watch?v=_O0z9EBEO6g&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=15",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  14: {
    yoga: "https://www.youtube.com/watch?v=PVJtNPVq26Q&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=16",
    cardio : "30 mins of cardio",
    workout: "1: walking Lunges 2: Push-ups 3: Rows 4: Plank Shoulder Taps"
  },
  15: {
    yoga: "https://www.youtube.com/watch?v=uZ0J5Sj_0Yw&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=17",
    cardio : "30 mins of cardio",
    workout: ""
  },
  16: {
    yoga: "https://www.youtube.com/watch?v=mnw2-SUbcCI&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=18",
    cardio : "30 mins of cardio",
    workout: ""
  },
  17: {
    yoga: "https://www.youtube.com/watch?v=sqbavY4lOyI&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=19",
    cardio : "30 mins of cardio",
    workout: ""
  },
  18: {
    yoga: "https://www.youtube.com/watch?v=RfJseP0-Tys&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=20",
    cardio : "30 mins of cardio",
    workout: ""
  },
  19: {
    yoga: "https://www.youtube.com/watch?v=z0q2K-ot_R4&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=21",
    cardio : "30 mins of cardio",
    workout: ""
  },
  20: {
    yoga: "https://www.youtube.com/watch?v=_aCNiRAyOlI&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=22",
    cardio : "30 mins of cardio",
    workout: ""
  },
  21: {
    yoga: "https://www.youtube.com/watch?v=iTvFko3tOKY&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=23",
    cardio : "30 mins of cardio",
    workout: ""
  },
  22: {
    yoga: "https://www.youtube.com/watch?v=T1VJBw0vL_Q&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=24",
    cardio : "30 mins of cardio",
    workout: ""
  },
  23: {
    yoga: "https://www.youtube.com/watch?v=mfjo2dCuU9s&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=25",
    cardio : "30 mins of cardio",
    workout: ""
  },
  24: {
    yoga: "https://www.youtube.com/watch?v=d1jKp2mZkSQ&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=26",
    cardio : "30 mins of cardio",
    workout: ""
  },
  25: {
    yoga: "https://www.youtube.com/watch?v=DRNdD9c7HMc&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=27",
    cardio : "30 mins of cardio",
    workout: ""
  },
  26: {
    yoga: "https://www.youtube.com/watch?v=jc27Unjv_tM&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=28",
    cardio : "30 mins of cardio",
    workout: ""
  },
  27: {
    yoga: "https://www.youtube.com/watch?v=-j9o8sxTnbs&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=29",
    cardio : "30 mins of cardio",
    workout: ""
  },
  28: {
    yoga: "https://www.youtube.com/watch?v=ZvX-N5c0pVA&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=30",
    cardio : "30 mins of cardio",
    workout: ""
  },
  29: {
    yoga: "https://www.youtube.com/watch?v=_j0zxr9RZwM&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=31",
    cardio : "30 mins of cardio",
    workout: ""
  },
  30: {
    yoga: "https://www.youtube.com/watch?v=TVwyEtS_7OQ&list=PLui6Eyny-UzzJ4NSTesh4xRWg4ZWNz5s4&index=32",
    cardio : "30 mins of cardio",
    workout: ""
  },
}