const min=0
const max=1500
export function getRandomInt (){
    return Math.floor(Math.random() * (max - min)) + min;
}