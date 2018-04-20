import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Agent} from './agent.model'
import {AddtemplateService} from '../addtemplate.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'hc-agent',
  templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit {
  agentForm: FormGroup

  @Input() agent: Agent
  description_ta:string = '';
  constructor(private addTemplateService: AddtemplateService, private formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.agentForm = this.formBuilder.group({
      customer: this.formBuilder.control(this.agent.customer),
      agent: this.formBuilder.control(this.agent.agent),
      description: this.formBuilder.control('', [Validators.required]),
      status: this.formBuilder.control('', [Validators.required])
    })

  }

  addTemplate(agent: Agent){
  this.addTemplateService.addTemplate(agent).subscribe((agentId:string) =>{
    console.log(`Template adicionado via POST: ${agentId}`)
    this.description_ta = null
    this.agentForm.reset()
    this.agentForm.patchValue({
      customer: this.agent.customer,
      agent: this.agent.agent
    });
    this.snackBar.open('Message archived');
    /*this.snackBar.openFromComponent(SuccessComponent, {
      duration: 500,
    });*/
    console.log(agent)
  })

  }
}
