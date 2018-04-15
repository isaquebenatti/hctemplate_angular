import {Injectable} from '@angular/core'
import {Agent} from './agent/agent.model'
import {HCT_API} from "../app.api"
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
@Injectable()

export class AddtemplateService{

  constructor(private http: Http){}

  agents(): Observable<Agent[]>{
    return this.http.get(`${HCT_API}`).map(response => response.json())
    .catch(ErrorHandler.handleError)
  }
  addTemplate(agent: Agent): Observable<string>{
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`http://localhost:3000/addtemplate`, JSON.stringify(agent), new RequestOptions({headers: headers})).map(response=> response.json())
  }
}
