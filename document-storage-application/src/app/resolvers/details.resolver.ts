import { FileHandlingService } from '../file-handling.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { inject } from '@angular/core';

export const DetailsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  usersListService: FileHandlingService = inject(FileHandlingService)
): any => {
  let fileName: string = route.params['name'];
  usersListService.getOneFileInfo(fileName);
};
