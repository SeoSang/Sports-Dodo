// '/api/match?limit=3&sort=startTime&startTime[gt]=2018-08-11T14:00:00+00:00'
// '/api/match?limit=3&sort=startTime&startTime[gt]=lastContentStartTime&

// const advancedResults = (model, populate)
const advancedResults = (model) => async (req, res, next) => {

    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);

    // query = model.find({ startTime: { $gt: reqQuery.lasttime }, _id: { $gt: reqQuery.lastid } })
    console.log('22222');
    console.log(reqQuery);
    // console.log(query);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);
    console.log(queryStr);
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    console.log('11111111111111111');
    console.log(queryStr);
    // queryStr = queryStr.replace(/\b()\b/g, match => ``)
    /*
&lasttime=2010~&lastid=dsfheklwj232

if (lasttime) {
    lasttime => startTime[gt]={value}
}

if (lastid) {
    lastid => _id[gt]={value}
}
*/
    //find( { qty: { $gt: 20 } } )
    // query = model.find({ startTime : { $gt : reqQuery.lasttime } }, { _id: { $gt : reqQuery.lastid}})

    // Finding resource
    query = model.find(JSON.parse(queryStr));

    // Select Fields
    if (req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields);
    }

    // // Sort
    // query = query.sort('startTime _id');  // ! index로 바꿀지 고민 !

    // Sort
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('startTime');
    }

    // Pagination
    const limit = parseInt(req.query.limit, 10) || 10;

    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;
    const total = await model.countDocuments(JSON.parse(queryStr));

    query = query.limit(limit);

    // if (populate) {
    //   query = query.populate(populate);
    // }

    // Executing query
    const results = await query;

    // Pagination result
    // const pagination = {};

    // if (endIndex < total) {
    //   pagination.next = {
    //     page: page + 1,
    //     limit
    //   };
    // }

    // if (startIndex > 0) {
    //   pagination.prev = {
    //     page: page - 1,
    //     limit
    //   };
    // }

    res.advancedResults = {
        success: true,
        count: results.length,
        // pagination,
        data: results
    };

    next();
};

module.exports = advancedResults;

/* first Query
//request
'/api/match?
    sort=startTime&
    startTime[gt]=Date.now&
    limit=3'
// response
{
    success: true,
    count: results.length,
    data: [
        {
            "_id": "sdfhkle",
            "home",
            "away",
            "startTime"
        },
        {

        }
    ]
}

! save last data to [front] state
state.startTimeOfLastContent = res.body.data[-1].startTime;
state._idOfLastContent = res.body.data[-1]._id;

*/

/* Second Query[loadMore] with query
! 더보기
'api/match?
    sort=startTime&
    startTime[gt]=state.startTimeOfLastContent&
    _id[gt]=idOfLastContent&
    limit=3'

! request
'/api/match/?sort=startTime&startTime[gt]=startTimeOfContent/limit=3'

*/

// http://localhost:1337/api/match?sort=-startTime&startTime[gt]=2018-08-11T14:00:00+00:00&limit=3&


// 더보기
// '/api/match?startTime[gt]=lcst&_id[gt]=lcid