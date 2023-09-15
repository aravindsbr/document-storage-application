import { FileHandlingService } from './../file-handling.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
export const RouteResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  filesListService: FileHandlingService = inject(FileHandlingService)
): any => filesListService.getListOfFiles();
