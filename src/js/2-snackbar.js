import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const PromisForm = document.querySelector('.form');




PromisForm.addEventListener('submit', event => {
    event.preventDefault();
    const userDelay = Number(event.target.elements.delay.value);
    const userPromis = event.target.elements.state.value;
    executor(userDelay, userPromis).then(fulfilled => {
        iziToast.success({
            title: 'OK',
            message: `✅ Fulfilled promise in ${fulfilled}ms`
,
        });
    }).catch(error => {
        iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${error}ms`
,
});
    })
})



function executor(delay, typeOfPromise) {
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
         
            if (typeOfPromise === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    }); 

}
