import { Component, OnInit } from '@angular/core';
import { DashServiceService } from 'src/services/dash-service/dash-service.service';
import { StateServiceService } from 'src/services/state-service/state-service.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit{

  constructor(
    private dashService: DashServiceService,
    private stateService: StateServiceService,
  ){

  }

  async ngOnInit(): Promise<void> {
    const mnemonic = await this.dashService.createMnemonic();
    console.log(mnemonic);
  }
}
