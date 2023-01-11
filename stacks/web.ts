import { NextjsSite, StackContext } from 'sst/constructs'

export async function Web({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'Web', {
    path: '.',
  })

  return {
    site,
  }
}
