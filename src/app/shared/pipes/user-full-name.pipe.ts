import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(user: { firstName: string; lastName: string }): string {
    return `${user.firstName} ${user.lastName}`;
  }

}
