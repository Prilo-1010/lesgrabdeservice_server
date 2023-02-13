const {portfolio} = require('../data/db.json')

//desc  GET works
//route /portfolio
const getWorks = async(req, res) => {
    const works = await portfolio
    res.status(200).json(works)
}

//desc  GET a single work
//route /portfolio
const getWork = async(req, res) => {
   const { id } = req.params
   const work = await portfolio.filter(function(portfolio)
   {
      return (portfolio['id'] == id);
  })

   if(!work){
    return  res.status(404).json({error: 'No such blog'})
}
   res.status(200).json(work)
}

module.exports = {
    getWork,
    getWorks
}