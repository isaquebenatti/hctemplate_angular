import { Component, OnInit, Input } from '@angular/core';
import {Agent} from './agent.model'

@Component({
  selector: 'hc-agent',
  templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit {

  @Input() agent: Agent

  constructor() { }

  ngOnInit() {
  }

}
