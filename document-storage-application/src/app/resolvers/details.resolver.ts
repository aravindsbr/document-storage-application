import { FileHandlingService } from '../file-handling.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';

export const DetailsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  filesListService: FileHandlingService = inject(FileHandlingService)
): any => filesListService.getOneFileInfo(route.params['name']);
