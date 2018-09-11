
export function queryData (params) {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push(Math.random() * 300 + 100)
  }
  return data
}
