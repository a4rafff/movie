import { inject } from '@angular/core';
import { CanActivateFn ,Router } from '@angular/router';
import { AuthService } from './auth.service';
 
export const gardGuard: CanActivateFn = (route, state) => {
  const _router =inject(Router)
  const _AuthService=inject(AuthService)

  if(_AuthService.userData.getValue() != null)
  {
    return true;
  }
  else
  {
    _router.navigate(["login"])
    return false;
  }
};
