// Patterns for the Amount

const amountPattern =  /^(0|[1-9]\d*)(\.\d{1,2})?$/

export function isValidAmount(text){
    return amountPattern.test(text);

}

// Pattern for the Description

const descriptionPattern = /^\S(?:.*\S)?$/

export function isValidDescription(text){
    return descriptionPattern.test(text);
}

// Pattern for the Date

const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

export function isValidDate(text){
    return datePattern.test(text);

}

// Pattern for Category

const categoryPattern = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/

export function isValidCategory(text){
    return categoryPattern.test(text);
}

// Pattern for duplicate

const duplicatePattern = /^\b(\w+)\s+\1\b$/

export function isValidDuplicate(text){
    return duplicatePattern.test(text);
    
}