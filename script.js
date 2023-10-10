const inputs = prompt("Please enter your Froyo's flavor (sperete each word by ,):");
const inputsArray = inputs.split(",");

function flavorCounter(M) {

    const y = M.reduce((counts, flavor) => {
        if (!counts.hasOwnProperty(flavor)) {
            counts[flavor] = 1;
        }
        else {
            counts[flavor]++;
        }
        return counts;
    }, {});
    
    for (const x in y) {
        console.log(`${x} = ${y[x]} `);
    }

}
flavorCounter(inputsArray);