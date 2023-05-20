import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { StateServiceService } from 'src/services/state-service/state-service.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent implements OnInit{
  private successroute: string;

  mnemonicInput = new FormGroup({
    mnemonic: new FormControl(''),
  })

  constructor(
    private stateService: StateServiceService,
    private router: Router
    ) {
    this.successroute = '';
  }

  ngOnInit(): void {
    this.successroute = '/login';
  }

  submit() {
    const mnemonic = this.mnemonicInput.get('mnemonic')?.value;

    if (mnemonic !== null || mnemonic !== undefined) {
      this.stateService.setMnemonic(mnemonic!);
      this.router.navigate([this.successroute]);
    } else {
      throwError(() => new Error('Mnemonic is null or undefined'))
    }
  }
}
