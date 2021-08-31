// import { Catalog } from '@vtex/clients'
import { IOClients } from '@vtex/api'

import Leads from './leads'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get leads() {
    return this.getOrSet('leads', Leads)
  }

  public get leadEmail() {
    return this.getOrSet('leads', Leads)
  }
}
