let date = new Date(); /** 2022.08.24 22시 57분 32초*/

const renderCalendar = () => {

const viewYear = date.getFullYear();  /** 2022년*/
const viewMonth = date.getMonth();   /** 7월*/

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;  /* ''을 쓰는게 아니라 ~의 ``를 사용해야 값이 적용됨*/ 

const prevLast = new Date(viewYear, viewMonth, 0); /* 2022.07.31 0시 0분 0초, 이전 달의 마지막 날*/ 
const thisLast = new Date(viewYear, viewMonth + 1, 0); /** 2022.08.31 0시 0분 0초*/

const PLDate = prevLast.getDate(); /** 31일*/
const PLDay = prevLast.getDay();  /** 일요일*/
 
const TLDate = thisLast.getDate(); /** 31일*/
const TLDay = thisLast.getDay(); /** 수요일*/

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);  /**Array(32)--> 0부터 31까지 배열로 돼 있음 */
const nextDates = [];

if(PLDay !== 6) {
    for(let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
    }
}

for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);
const firstDateIndex = dates.indexOf(1);
const lastDateIndex = dates.lastIndexOf(TLDate);


dates.forEach((date, i) => {    /*forEach는 하나하나 다 나오게끔 하는 것*/
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';                  
    dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
});

document.querySelector('.dates').innerHTML = dates.join('');

const today = new Date();
if(viewMonth===today.getMonth() && viewYear===today.getFullYear()) {
    for(let date of document.querySelectorAll('.this')) {
        if(+date.innerText === today.getDate()) {
            date.classList.add('today');
            break; 
        }
    }
}
};

renderCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

const goToday = () => {
    date = new Date();
    renderCalendar();
};

