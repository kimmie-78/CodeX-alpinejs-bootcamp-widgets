function enoughAirtime(projectedUsage, availableAirtime) {
    const callRate = 1.88;
    const dataRate = 12;
    const smsRate = 0.75;
  
    const items = projectedUsage.split(',');
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        switch (items[i].trim()) { 
            case 'call':
                totalCost += callRate;
                break;
            case 'data':
                totalCost += dataRate;
                break;
            case 'sms':
                totalCost += smsRate;
                break;
            default:
                break;
        }
    }
    const remainingAirtime = availableAirtime - totalCost;
    return remainingAirtime > 0 ? 'R' + remainingAirtime.toFixed(2) : 'R0.00';
}

function calculateAirtime() {
    const usageInput = document.getElementById('usageInput').value;
    const airtimeInput = parseFloat(document.getElementById('airtimeInput').value);
    
    if (!usageInput || isNaN(airtimeInput)) {
        alert('Please enter valid usage and airtime values.');
        return;
    }

    const result = enoughAirtime(usageInput, airtimeInput);
    document.getElementById('remainingAirtime').innerText = 'Remaining Airtime: ' + result;
}

const projectedUsage = 'call,call,call,data,sms,sms,call,data';
const availableAirtime = 50;
console.log(enoughAirtime(projectedUsage, availableAirtime));
