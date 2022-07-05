import { HTTP } from '@awesome-cordova-plugins/approov-advanced-http/ngx';

export type RequestOptions =
    | Parameters<typeof HTTP.prototype.sendRequest>[1]
    | {
          data?: Object | FormData | string;
      };
