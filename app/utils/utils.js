const pagedQuery = async (params, db) => {
  const { pageSize = 10, pageNum = 1, table, orders } = params
  const offset = pageSize * (pageNum - 1)
  const countSql = `select count(*) as count from ${table}`
  const count = await db.query(countSql)
  const total = count[0].count
  if (total === 0 || total <= offset) {
    return {
      total,
      list: []
    }
  }
  const list = await db.select(table, {
    orders,
    limit: pageSize,
    offset
  })
  return {
    total,
    list
  }
}

module.exports = {
  pagedQuery
}
