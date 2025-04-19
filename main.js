const monatsansicht= document.querySelector(".monatsansicht"), 
      monatsheader= document.querySelector(".monatsheader"),
      currentmonth= document.querySelector(".currentmonth"),
      monat= document.querySelector(".monat");


const months= [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const eventsArr = [
    {
      day: 13, 
      month: 3, 
      year: 2025, 
      events: [ 
        {
          title: "Event 1 test", 
          time: "10:00 AM",
          description: "blabla",
          tag: "Freizeit",
          complete: 0
        },
        {
          title: "Event 2 test", 
          time: "11:00 AM",
          description: "blabla" ,
          tag: "Arbeit",
          complete: 0
        }
      ]
    },
    {
      day: 24,
      month: 3,
      year:2025,
      events:[
       {
          title: "test test", 
          time: "04:08 - 10:10",
          description: "blablablabla",
          tag: "Arbeit",
          complete: 0
        },
        {
          title: "einkaufen gehen", 
          time: "12:00 - 13:00",
          description: "blabla" ,
          tag: "Freizeit",
          complete: 0
        },
        {
          title: "lernen", 
          time: "11:00 - 14:00",
          description: "kapitel 1 bis 5" ,
          tag: "Studium",
          complete: 0
        }
      ]
    
    }, 
    {
      day: 12,
      month: 3,
      year:2025,
      events:[
       {
          title: "test test", 
          time: "04:08 - 10:10",
          description: "blablablabla",
          tag: "Arbeit",
          complete: 0
        },
        {
          title: "einkaufen gehen", 
          time: "12:00 - 13:00",
          description: "blabla" ,
          tag: "Freizeit",
          complete: 0
        },
        {
          title: "lernen", 
          time: "11:00 - 14:00",
          description: "kapitel 1 bis 5" ,
          tag: "Studium",
          complete: 0
        }
      ]
    
    }, 
    {
      day: 2,
      month: 3,
      year:2025,
      events:[
       {
          title: "test test", 
          time: "04:08 - 10:10",
          description: "blablablabla",
          tag: "Arbeit",
          complete: 0
        },
        {
          title: "einkaufen gehen", 
          time: "12:00 - 13:00",
          description: "blabla" ,
          tag: "Freizeit",
          complete: 0
        },
        {
          title: "lernen", 
          time: "11:00 - 14:00",
          description: "kapitel 1 bis 5" ,
          tag: "Studium",
          complete: 0
        }
      ]
    
    },
    {
      day: 20,
      month: 3,
      year:2025,
      events:[
       {
          title: "test test", 
          time: "04:08 - 10:10",
          description: "blablablabla",
          tag: "Arbeit",
          complete: 0
        },
        {
          title: "einkaufen gehen", 
          time: "12:00 - 13:00",
          description: "blabla" ,
          tag: "Freizeit",
          complete: 0
        },
        {
          title: "lernen", 
          time: "11:00 - 14:00",
          description: "kapitel 1 bis 5" ,
          tag: "Studium",
          complete: 0
        }
      ]
    
    }      
    
  ];
  

let heute = new Date();
let month = heute.getMonth();
let year = heute.getFullYear();

//getrennt weil die ansicht des kalendars nicht durch die statistik geändert werden soll
let heuteFürStatistik = new Date();
let monthFürStatistik = heuteFürStatistik.getMonth();
let yearFürStatistik = heuteFürStatistik.getFullYear();


function obenDatum(){
    currentmonth.innerHTML= months[month]+ " " + year;
}

function initKalendar(){
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month+1, 0);
    let prevlastDay = new Date(year,month,0);
    let prevlastDayAsNumber= prevlastDay.getDate();
    let firstDayWeekday = firstDay.getDay();
    let lastDayWeekday = lastDay.getDay();
    let monatstage= '';

    //die letzten Tage des vorherigen Monats
    let x= firstDayWeekday;
    let y=firstDayWeekday-1
    //spezialfall für sonntag
    if(x==0){
        for(let i=0; i<6; i++){
            monatstage += `<div class="day notAktuell">${prevlastDayAsNumber - y +1}</div>`;
    
        }
    }
    else{ 
        for(y ; y>0; y--){
        monatstage += `<div class="day notAktuell">${prevlastDayAsNumber - y +1}</div>`;
    }}
   
    
    

    //die Tage des jetzigen Monats, wobei der heutige Tag markiert wird
    for(let i = 1; i <= lastDay.getDate();i++){
        let eventAmTag= false;

        eventsArr.forEach((eventObjekt) => {
            if(eventObjekt.day=== i &&
            eventObjekt.month== month &&
            eventObjekt.year == year){
                eventAmTag= true;

            }

        });


        if(i== new Date().getDate() &&
        month == new Date().getMonth() &&
        year== new Date().getFullYear()){
            if(eventAmTag){monatstage += `<div class="day heute event ${i} ${month} ${year}" data-day="${i}" data-month="${month}" data-year="${year}">${i}</div>`;}
             else {monatstage += `<div class="day heute ${i} ${month} ${year}" data-day="${i}" data-month="${month}" data-year="${year}" >${i}</div>`;}
        
        } else{

            if(eventAmTag){monatstage +=`<div class="day event ${i} ${month} ${year}" data-day="${i}" data-month="${month}" data-year="${year}" >${i}</div>`;}
           
            else{
            monatstage +=`<div class="day ${i} ${month} ${year}" data-day="${i}" data-month="${month}" data-year="${year}">${i}</div>`;
            }
        }

    }

    //die ersten Tage des nächsten Monats
    for(let i=1; i<=(7-lastDayWeekday);i++){
        monatstage+= `<div class="day notAktuell">${i}</div>`;
    }

    monat.innerHTML = monatstage;

    obenDatum();
    addEventListenertoDays();
}
initKalendar();

function before(){
    
    if(month<1){
        month= 11;
        year= year-1;
    }else{month= month-1;}
   
    initKalendar();
    addEventListenertoDays();
    
}
function next(){
    if(month>10){
        month= 0;
        year= year+1;
    }else{month= month+1;}
   
    initKalendar();
    addEventListenertoDays();
    

}

function today(){
    month= new Date().getMonth();
    year= new Date().getFullYear();
    initKalendar();
    

}



function changestatus(element){
    let x = element.classList;
    if(x.contains('uncomplete')){
        x.remove('uncomplete');
        x.remove('fa-square');
        x.add('fa-square-check');
        x.add('complete');

    }
    else{
        x.remove('complete');
        x.remove('fa-square-check');
        x.add('fa-square');
        x.add('uncomplete');
    }
    //der titel der task
    let title= element.id; 
    console.log(title);
    eventsArr.forEach((eventobjekt)=>{
        if(x.contains(eventobjekt.day) && x.contains(eventobjekt.month)&& x.contains(eventobjekt.year)){
            eventobjekt.events.forEach((konkreteseventobjekt)=>{
                if(konkreteseventobjekt.title==title){
                    if(konkreteseventobjekt.complete==0){
                        konkreteseventobjekt.complete=1
                        console.log(konkreteseventobjekt.complete);
                    }else{konkreteseventobjekt.complete=0;
                        console.log(konkreteseventobjekt.complete);
                    }
                }
            })
        }
    })
    
}

function addEventBox(){
    x= document.getElementById('eventbox').classList;
    if(x.contains('active')){
        x.remove('active');
        x.add('closed');
    }else if(x.contains('closed')){
        x.remove('closed');
        x.add('active');
    }
}
// wird noch für addEvent gebraucht
let aktiverTag = 0;
let aktiverTagContainer;

function getActiveday(date){
    const clickedDay = document.querySelector(".angeklicktesDatum");
    
    clickedDay.innerHTML = date + " " + months[month] + " " + year ;
}
function addEventListenertoDays(){
    document.querySelectorAll('.day').forEach((day)=>{
    day.addEventListener("click", (e)=>{
        getActiveday(e.target.innerHTML);
        eventsWiedergeben(day);
        aktiverTag= e.target.innerHTML;
        aktiverTagContainer= e.target;

    });
    });
}



function eventsWiedergeben(element){
    
    const aufgabenFürDenTag = document.querySelector(".tasks");
    const tage = document.querySelectorAll(".day");
    tage.forEach((tag)=>{tag.classList.remove('active')});
    element.classList.add('active');

    const dayElement= element.dataset.day;
    const monthElement= element.dataset.month;
    const yearElement= element.dataset.year;
    
    let aufgaben= '';
   
    

    eventsArr.forEach((eventObjekt) => {
        if(eventObjekt.day== dayElement &&
        eventObjekt.month== monthElement &&
        eventObjekt.year == yearElement){
           

            eventObjekt.events.forEach((konkretesEvent)=>
                {
                    if(konkretesEvent.complete==1){
                        aufgaben += `<div class="task">
                            <div class="headerVonTask"><i class="far fa-square-check complete ${dayElement} ${monthElement} ${yearElement}" id="${konkretesEvent.title}" onclick="changestatus(this)"></i><span class="name">${konkretesEvent.title}</span><span class="time">${konkretesEvent.time}</span></div>
                            <div class="beschreibung">${konkretesEvent.description}</div>
                            <div class="tag">${konkretesEvent.tag}</div>
                            </div>`;

                    } else{
                
                    aufgaben += `<div class="task">
                            <div class="headerVonTask"><i class="far fa-square uncomplete ${dayElement} ${monthElement} ${yearElement}" id="${konkretesEvent.title}" onclick="changestatus(this)"></i><span class="name">${konkretesEvent.title}</span><span class="time">${konkretesEvent.time}</span></div>
                            <div class="beschreibung">${konkretesEvent.description}</div>
                            <div class="tag">${konkretesEvent.tag}</div>
                            </div>`;}



                    



                });
            

        }

    });
    if(aufgaben == ''){
        aufgaben += `<div class="task"><div class="noEvents">no events</div></div>`;
    }
    aufgabenFürDenTag.innerHTML = aufgaben;
      
}



document.querySelector(".hinzufuegen").addEventListener("click", (e)=>{
    const aufgabenFürDenTag = document.querySelector(".tasks");
    const nameDerTask = document.getElementById("namensInput").value;
    const beschreibungDesTasks = document.getElementById("beschreibungsInput").value;
    const tagDesTasks = document.getElementById("tagSelect").value;
    const vonZeit = document.getElementById("von").value;
    const bisZeit = document.getElementById("bis").value;
   

    if(nameDerTask == "" || vonZeit =="" || bisZeit==""){
        alert("name und Zeit eingeben bitte");
    }
    let newEvent = {
        title: nameDerTask,
        time: vonZeit+ "-" + bisZeit,
        description: beschreibungDesTasks,
        tag: tagDesTasks,
        complete: 0
    }
    let added= false;
    //test
    console.log("Aktiver Tag:", aktiverTag);
    console.log("Monat:", month);
    console.log("Jahr:", year);

    eventsArr.forEach((eventItem)=>{
    if(eventItem.day==aktiverTag &&
        eventItem.month == month &&
        eventItem.year == year){
            eventItem.events.push(newEvent);
            added= true;
            
            
        }
    });
    if(!added){
            eventsArr.push({
                day: aktiverTag, 
                month: month, 
                year: year, 
                events: [newEvent]
                
            })
            aktiverTagContainer.classList.add('event');
            aufgabenFürDenTag.innerHTML = '';
            
        
            
    }
    
    
    addEventBox();
    
    document.getElementById("namensInput").value= '';
    document.getElementById("beschreibungsInput").value='';
    document.getElementById("von").value='';
    document.getElementById("bis").value='';

    eventsWiedergeben(aktiverTagContainer);    


});

// brauchen wir für die funktion unten
let aufStatistikGestellt= false;
const aktuellerMonatFürStatistik = document.querySelector(".currentmonthForStatistics");
//wenn statistik gedrückt wird, dann wird die monatsansicht unsichtbar und das fenster erweitert sich um die statistiken zu zeigen
function statistik(){
    const kalendar= document.querySelector(".monatsansicht");
    const seitenAnzeige = document.querySelector(".anzeige");
    const statistik = document.querySelector(".statistikAnsicht");
    

    //kalendaransicht grade aktiv
    if(!aufStatistikGestellt){
        kalendar.classList.remove('active');
        seitenAnzeige.classList.remove('active');
        statistik.classList.add('active');
        aufStatistikGestellt= true;
        updateChart(monthFürStatistik,yearFürStatistik);
    } else if(aufStatistikGestellt){
        kalendar.classList.add('active');
        seitenAnzeige.classList.add('active');
        statistik.classList.remove('active');
        aufStatistikGestellt= false;
    }
    aktuellerMonatFürStatistik.innerHTML = months[monthFürStatistik] +' '+ yearFürStatistik;
          
}

//für die statistik 

function daysInAMonth(month, year){

    let date = new Date(year, month+1, 0);

    let anzahl= date.getDate();

    let array = new Array();

    for(let i=1; i<= anzahl; i++){
        array.push(i);
    }
    
    return array;

}
function completedTasks(month,year){

    let array = new Array();

    
    for(let eventTag=1; eventTag<= daysInAMonth(month,year).length; eventTag++){
        let eventsAmTag =eventsArr.find(events => events.year== year && events.month == month && events.day== eventTag);
        if(eventsAmTag){
        let counter= 0;
        for(let i=0; i< eventsAmTag.events.length; i++){
            if(eventsAmTag.events[i].complete==1){
                counter++;
            }
           
        }  array.push(counter);}
        else{
            array.push(0);
        }
        
    }
    
    return array;
}

let lineChart;

function updateChart(monat,jahr){

const chart= document.getElementById('myChart');

if(lineChart){
    lineChart.data.labels= daysInAMonth(monat,jahr);
    lineChart.data.datasets[0].data = completedTasks(monat, jahr);
    lineChart.update();
}else{

lineChart= new Chart(chart, {
    type: 'line',
    data: {
      labels: daysInAMonth(monat,jahr),
      datasets: [{
        label: 'erledigte Aufgaben',
        data: completedTasks(monat,jahr),
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });}

}

function nextMonthForStatistics(){
    if(monthFürStatistik>10){
        monthFürStatistik= 0;
        yearFürStatistik= year+1;
    }else{monthFürStatistik= monthFürStatistik+1;}
   
    updateChart(monthFürStatistik,yearFürStatistik);
    aktuellerMonatFürStatistik.innerHTML = months[monthFürStatistik] +' '+ yearFürStatistik;
}

function prevMonthForStatistics(){
    if(monthFürStatistik<1){
        monthFürStatistik= 11;
        yearFürStatistik= yearFürStatistik-1;
    }else{monthFürStatistik= monthFürStatistik-1;}
   
    updateChart(monthFürStatistik,yearFürStatistik);
    aktuellerMonatFürStatistik.innerHTML = months[monthFürStatistik] +' '+ yearFürStatistik;
}



