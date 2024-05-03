
const strotrasInsertionSql = require('../utils/strotrasData')
const getStrotrasStrapi = require('../utils/strotraService')

const strotrasInsertion = async () => {

    let page = 1;
    let data;
    do {

        data = await getStrotrasStrapi(page);
        const strotras = data.data.data;
        strotrasInsertionSql(strotras);
        page++;
    } while (page <= data.data.meta.pagination.pageCount);



};


module.exports= strotrasInsertion;