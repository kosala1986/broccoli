import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './loading-interceptor';

/** HTTP interceptor providers applied in order. */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
];