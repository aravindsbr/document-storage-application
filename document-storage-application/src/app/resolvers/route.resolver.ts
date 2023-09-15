import { FileHandlingService } from './../file-handling.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
export const RouteResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  usersListService: FileHandlingService = inject(FileHandlingService)
): any => usersListService.getListOfFiles();
