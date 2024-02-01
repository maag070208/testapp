import { Injectable } from '@angular/core';
import { environment } from 'src/env/enviroment';

@Injectable()
export class IpService {
  private SERVER_IP!: string;

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

  private setMarketIp(): void {
    let ip = environment.marketIP;

    if (!this.validateIp(ip)) return;

    this.SERVER_IP = ip;
  }

  private setPlosaIp(): void {
    let ip = environment.plosaIP;

    if (!this.validateIp(ip)) return;

    this.SERVER_IP = ip;
  }

  private getIpName = () => localStorage.getItem('IP_NAME');

  public getCurrentIp(): string | null {
    const ipName = this.getIpName();

    if (!ipName) return null;

    if (ipName === 'market') {
      this.setMarketIp();
    } else if (ipName === 'plosa') {
      this.setPlosaIp();
    } else {
      return null;
    }

    return this.SERVER_IP;
  }
}
