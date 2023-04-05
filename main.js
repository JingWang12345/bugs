// console.log('bugs');


// function parseIntWithError(SelectedString){
//     const result = parseInt(SelectedString);
//     if (isNaN(result)){
//         throw new Error('sei un cretino, non hai messo un numero!!!');
//     } else {
//         return result
//     }
  
// }

// // console.log(parseIntWithError('123'));
// // console.log(parseIntWithError('SIMONE'));

// try {
//     const numero = parseIntWithError('caffè')
//     console.log(numero);
// } catch (error) {
//     console.log(error.message);
// }

// function indexOfWithError(array, element) {
//     if (array.length === 0) {
//         throw new emptyArrayError('che cazzo combini? mi hai passato un array vuoto!')
//     } else {
//         const index = array.indexOf(element);
//         if (index === -1) {
//             throw new ElementNotFoundError('non ho trovato un belin di niente!!!')
//         } else {
//             return index;
//         }
//     }
// }

// try {
//     const index = indexOfWithError(['qui','quo','qua'], 'paperone');
//     console.log(index);
// } catch (error) {
//     if(error instanceof EmptyArrayError){
//         console.log('caro utente per qualche strano errore mo è arrivato un array vuoto');
//     } else if (error instanceof ElementNotFoundError){
// console.log('ho cercato in lungo e in largo ma purtroppo non ho trovato niente');
//     } else {
// console.log('qualcosa si è rotto ma non so cosa');
//     }
// }

// function isElementInArray(array, element) {
//     try {
//         indexOfWithError(array, element);
//         return true;
//     } catch (error) {
//         if (error instanceof ElementNotFoundError) {
//             return false;
//         } else {
// throw error;
//         }
//     } finally {
//         console.log('qualcosa si è rotto');
//     }
// }

// try {
//     const isInside = isElementInArray(['qui', 'quo', 'qua'], 'qui');
//     console.log(isInside);
// } catch (error) {
//     console.log(error.message);
// }