export async function leads(ctx: Context, next: () => Promise<any>) {
  
  const { clients: { leads } } = ctx;

  ctx.body = await leads.getLeads();

  next();
}