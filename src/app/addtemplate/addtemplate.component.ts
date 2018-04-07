import { Component, OnInit } from '@angular/core';
import {Agent} from './agent/agent.model';
import {AddtemplateService} from './addtemplate.service';

@Component({
  selector: 'hc-addtemplate',
  templateUrl: './addtemplate.component.html'
})
export class AddtemplateComponent implements OnInit {

    agents: Agent[]

/*  agents: Agent[] = [
    {
      id: "dhz", name: "dhz_NA901234:NT", template: "Servidor foi decomissionado. Agente foi removido."
    },
    {
      id: "dhz",
      name: "dhz_NA901234:NT",
      template: "Host esta down IN1232132."
    },
    {
      id: "dhz",
      name: "dhz_NA901234:NT",
      template: "De acordo com o SA Fulano, o servidor encontra-se em migração."
    }
  ] */

  constructor(private addtemplateService: AddtemplateService) { }

  ngOnInit() {
    this.addtemplateService.agents().subscribe(agents => this.agents = agents)
  }

}
