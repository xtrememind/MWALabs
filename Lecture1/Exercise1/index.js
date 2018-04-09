window.onload = function(){
    const items = Array.from(document.querySelectorAll('[data-time]'));
    //console.log(items);
    const filteredItems = items.filter(item => item.innerHTML.includes('ECMA'));
    //console.log(filteredItems);
    const times = filteredItems.map(item=> item.getAttribute('data-time'));
    //console.log(times);
    const totalSeconds = times.map(time=> {
        const times = time.split(':');
        return parseInt(times[0] * 60) + parseInt(times[1]);
    }).reduce((sum, second) => sum += second, 0);
    console.log(totalSeconds);
};