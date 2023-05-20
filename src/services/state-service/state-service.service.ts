import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  private mnemonic: string = '';
  private identity: string = ''

  private dashClient: any;

  constructor() { }

  getMnemonic(): string {
    return this.mnemonic;
  }

  setMnemonic(value: string): void {
    this.mnemonic = value;
  }
}
