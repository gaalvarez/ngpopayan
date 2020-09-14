import { AbstractControl } from '@angular/forms';

export function validadorNumerico(control: AbstractControl): { [key: string]: any } | null {
  return /^\d+$/.test(control.value)
    ? null
    : { invalidNumber: { valid: false, value: control.value } };
}
