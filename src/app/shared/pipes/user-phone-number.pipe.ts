import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPhoneNumber'
})
export class UserPhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    const formattedPhone = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;

    return formattedPhone;
  }

}
