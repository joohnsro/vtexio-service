export async function addLead(ctx: Context, next: () => Promise<any>) {
  
  const { clients: { leads }, req } = ctx;

  ctx.body = await leads.addLead( req );

  next();
}