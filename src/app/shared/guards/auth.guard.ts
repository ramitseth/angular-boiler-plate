import { Injectable } from '@angular/core';
import { CanMatch } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch {

  canMatch(): boolean {
    console.log('guard reached');
    return true;
  }
}
