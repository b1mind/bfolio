export async function GET(res) {
  const params = res.params
  const [id] = res.url.searchParams

  console.log(res.url)
  console.dir(id[1])

  return new Response(`<h1>${params.args}'s ${id[0]} was a ${id[1]}</h1>`, {
    headers: {
      'Content-Type': 'text/html',
    }
  })
}
