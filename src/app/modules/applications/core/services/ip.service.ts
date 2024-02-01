import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError, timeout } from 'rxjs';

@Injectable()
export class IpService {
  private http = inject(HttpClient);

  private validateIp = (ip: string) => {
    const ipArray = ip.split('.');
    if (ipArray.length !== 4) {
      return false;
    }
    for (const i of ipArray) {
      if (isNaN(Number(i)) || Number(i) < 0 || Number(i) > 255) {
        return false;
      }
    }
    return true;
  };
  public testIp = async (ip: string): Promise<boolean> => {
    if (!this.validateIp(ip)) {
      return false;
    }

    const url = `http://${ip}/Plosa/`;

    try {
      await this.http
        .head(url, { observe: 'response' })
        .pipe(
          timeout(2000), // Timeout set to 2 seconds
          catchError((error) => {
            // Handle the timeout error here
            console.error('Request timed out', error);
            if(error.name === 'TimeoutError') return throwError('Request timed out');
            return throwError('Error');
          })
        )
        .toPromise(); // Convert the observable to a promise
      return true; // Request was successful
    } catch (error) {
      console.error('Error', error);
      if(error === 'Request timed out') return false;
      return true;
    }
  };
}
