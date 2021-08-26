export async function catalogUniqueProduct(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog },
  } = ctx

  const { code } = ctx.vtex.route.params

  let response = await catalog.getSkuById(code.toString());

  ctx.body = {
    response
  }

  await next()
}