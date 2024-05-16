function clock(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let day = document.getElementById('day');

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let d =new Date().getDate()

    // console.log(s)


    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    day.innerHTML = d


}
    let interval = setInterval(clock,1000);
