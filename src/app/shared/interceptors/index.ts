import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./jwt.interceptor";

/** Http interceptor providers*/

export const httpInterceptorsProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true,
    },
];