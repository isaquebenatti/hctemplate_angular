import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Agent} from './agent.model'
import {AddtemplateService} from '../addtemplate.service'
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'hc-agent',
  templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit {

  @Input() agent: Agent
  description_ta:string = '';
  constructor(private addTemplateService: AddtemplateService) { }
  @ViewChild(NgForm) form: NgForm;

  ngOnInit() {
  }
  addTemplate(agent: Agent){
  this.addTemplateService.addTemplate(agent).subscribe((agentId:string) =>{
    console.log(`Template adicionado via POST: ${agentId}`)
    this.description_ta = null
    //this.form.value.description = null
    //this.form.value.status = null
    this.form.resetForm()
    this.form.value.agent = this.agent.agent
    //this.form.value.agent = this.agent.agent
    console.log(agent)
  })
  }



}
