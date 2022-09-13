const sore = 13
const head = 17
const videos = [4,
  "https://www.youtube.com/watch?v=VpW33Celubg&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=4",
  "https://www.youtube.com/watch?v=dcqW72d5JjI&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=2",
  "https://www.youtube.com/watch?v=BPrAtXKsn6o&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=12",
  "https://www.youtube.com/watch?v=0cCYQh0czfY&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=11",
  "https://www.youtube.com/watch?v=Nnd5Slo02us&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=7",
  "https://www.youtube.com/watch?v=XeXz8fIZDCE&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=5",
  "https://www.youtube.com/watch?v=HtSSMx-LbQ4&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=48",
  "https://www.youtube.com/watch?v=M-8FvC3GD8c&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=46",
  "https://www.youtube.com/watch?v=dF7O6-QabIo&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=45",
  "https://www.youtube.com/watch?v=UEEsdXn8oG8&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=43",
  "https://www.youtube.com/watch?v=X3-gKPNyrTA&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=42",
  "https://www.youtube.com/watch?v=SrN9pBY0KZs&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=38",
  "https://www.youtube.com/watch?v=CxuDcHCduw0&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=37",
  "https://www.youtube.com/watch?v=7agiIk9KgyI&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=36",
  "https://www.youtube.com/watch?v=h6lKRlAjq2s&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=33",
  "https://www.youtube.com/watch?v=b1H3xO3x_Js&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=31",
  "https://www.youtube.com/watch?v=p433HzhvB44&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=30",
  "https://www.youtube.com/watch?v=P8uHMMmWMHQ&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=29",
  "https://www.youtube.com/watch?v=UEEsdXn8oG8&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=27",
  "https://www.youtube.com/watch?v=X3-gKPNyrTA&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=26",
  "https://www.youtube.com/watch?v=YbAYMQC_ZaE&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=25",
  "https://www.youtube.com/watch?v=r7xsYgTeM2Q&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=24",
  "https://www.youtube.com/watch?v=RiDhzDhsQU8&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=23",
  "https://www.youtube.com/watch?v=Yzm3fA2HhkQ&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=22",
  "https://www.youtube.com/watch?v=d6zJkHcjbWc&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=21",
  "https://www.youtube.com/watch?v=G6edqEaFJVg&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=20",
]

document.getElementById('yoga').addEventListener('click', getYoga)
document.getElementById('sore').addEventListener('click', getSore)

const today = new Date()
const start = new Date('September 13, 2022')
today.setUTCHours(0,0,0,0)
start.setUTCHours(0,0,0,0)
let day = Math.abs(start - today)/ (1000*60*60*24)

document.getElementById('dayCounter').innerHTML += `Day: ${day}`

let yogaDay =  day


function getYoga (){
  if( yogaDay >= videos.length){
    yogaDay = yogaDay - videos.length
  }
  let holder = 0
  if(yogaDay%3 === 0 ){
    holder =  "https://www.youtube.com/watch?v=V1HbXt5ZRlg&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=17"
  }  else {
    holder = videos[yogaDay]
  }
  document.getElementById('today').innerHTML += `<a href=${holder}>Heres your yoga</a>`
}

function getSore () {
  document.getElementById('today').innerHTML += `<a href="https://www.youtube.com/watch?v=tTZRx453Lyo&list=PLui6Eyny-UzxL6NjFMYD5-vESNii8_aLi&index=12">Heres your yoga</a>`
}

