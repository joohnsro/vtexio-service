import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Leads extends ExternalClient {

  private routes = {
    leads: '/UAT/data',
    leadEmail: '/UAT/set-client'
  }

  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://txkozo138c.execute-api.sa-east-1.amazonaws.com', context, options)
    // super('http://httpstat.us', context, options)
  }

  public async getLeads(): Promise<string> {
    return this.http.get(this.routes.leads, {
      metric: 'leads-get',
    })
  }

  public async addLead(lead: any): Promise<string> {
    return this.http.post(this.routes.leads, lead, {
      metric: 'lead-add',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}
