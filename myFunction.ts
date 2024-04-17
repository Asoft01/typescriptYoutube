// function addTwo(num: number) {
//     // return num + 2;
//     return "hello"; 
// }

function addTwo(num: number): number {
    return num + 2; 
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){

}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

let myValue = addTwo(2);
getUpper("adeleke");
signUpUser("hammed", "adeleke", false);
loginUser("h", "h@h.com");

// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"]; 
// const heros = [1, 2, 3]; 
heros.map(hero => {
    return `hero is ${hero}`;
});

export {};
