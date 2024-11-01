import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../../core/models';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(user: IStudent | null): string {
    if (!user) {
      return '';
    }
    return `${user.firstName} ${user.lastName}`;
  }

}
