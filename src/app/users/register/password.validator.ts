import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static validate(registrationFormGroup: FormGroup) {
        const password = registrationFormGroup.controls.password.value;
        const confirmPassword = registrationFormGroup.controls.confirmPassword.value;

        if (confirmPassword.length <= 0) {
            return null;
        }

        if (confirmPassword !== password) {
            return {
                doesNotMatchPassword: true
            };
        }

        return null;

    }
}
