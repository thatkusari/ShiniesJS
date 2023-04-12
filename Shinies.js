let AppID = 'ShiniesJS';
function pay(Customer, Key, Receiver, Amount) {
    fetch(`https://shinies.space/pay-with-key?user=${Customer}&key=${Key}&receiver=${Receiver}&amount=${Amount}&appid=${AppID}`, {
        method: 'POST'
    })
    .then(r=>r.text())
    .then(d=>console.log(d)); // Plain-text success or error message for the customer.
};

function request(Customer, Key, Receiver, Amount) {
    fetch(`https://shinies.space/request-with-key?user=${Customer}&key=${Key}&torequest=${Receiver}&amount=${Amount}&appid=${AppID}`, {
        method: 'POST'
    })
    .then(r=>r.text())
    .then(d=>console.log(d)); // Plain-text success or error message for the customer.
}