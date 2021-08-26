export async function catalog(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog },
  } = ctx

  const { data, range: { total } } = await catalog.getProductsAndSkus()

  ctx.body = {
    data,
    total
  }

  await next()
}