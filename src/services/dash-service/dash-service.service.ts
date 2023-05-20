// @ts-nocheck
// @ts-ignore
import { Injectable } from '@angular/core';
import Dash from 'dash';

@Injectable({
  providedIn: 'root'
})
export class DashServiceService {
  private client: any;

  constructor() {
    this.client = new Dash.Client({
      network: "local",
      wallet: {
        mnemonic: null,
      },
    });
    const mnemonic = this.client.wallet.exportWallet();
    console.log({mnemonic});
  }

  init(mnemonic: string) {

  }

  async createMnemonic() {
    console.log("in");
    const account = await this.client.getWalletAccount();
    console.log("1");
    const mnemonic = this.client.wallet?.exportWallet();
    console.log("2");

    return mnemonic?.toString();
   }
}
