//insertAfter.js
//  insert a new element newElement after an element referenceElement

export function insertAfter(newElement, referenceElement){
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}// end of insertAfter --------