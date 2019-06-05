import { AbstractControl, ValidationErrors } from '@angular/forms';

// Password Security level Validation
export const PasswordSecurityValidator = function (control: AbstractControl): ValidationErrors {

    let password: string = control.value;
    let upperCaseMatch = /[A-Z]+/g.test(password);
    let lowerCaseMatch = /[a-z]+/g.test(password);
    let charLengthMatch = /[a-zA-Z]{3,}/.test(password);
    let numberMatch = /.*[0-9]+/g.test(password);

    let specialCharMatch = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    let securityLevel: string;

    // Upper/Lower = LOW
    if (upperCaseMatch || lowerCaseMatch) {
        securityLevel = 'Low';
    }

    // Upper/Lower and 6Char long = Mid
    if ((upperCaseMatch || lowerCaseMatch) && charLengthMatch) {
        securityLevel = 'Mid';
    }

    // Upper/Lower and Number = Mid
    if ((upperCaseMatch || lowerCaseMatch) && (charLengthMatch && numberMatch)) {
        securityLevel = 'Mid';
    }

    // Upper/Lower and Number and Special = High
    if ((upperCaseMatch || lowerCaseMatch) && (charLengthMatch && numberMatch && specialCharMatch)) {
        securityLevel = 'High';
    }

    // // Make Password Valid if SL 'High' (Dont throw Validation error)
    if (securityLevel === 'High') {
        return null;
    } else {
        return { passwordSecurity: securityLevel };
    }
}