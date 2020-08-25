const advancedResults = (model) => async (req, res, next) => {
    // '/api/match?startindex={value}&
    console.log(req.query);

    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'limit', 'startindex'];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);

    // Finding resource
    query = model.find(reqQuery);

    // Sort
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('startTime _id');
    }

    // Pagination
    // const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 3;
    const startIndex = parseInt(req.query.startindex);
    const endIndex = startIndex + 10;
    const total = await model.countDocuments(reqQuery);

    query = query.skip(startIndex - 1).limit(limit);

    // Executing query
    const results = await query;

    //check can load more
    let hasNext = false;

    if (endIndex < total) {
        hasNext = true;
    }

    res.advancedResults = {
        success: true,
        count: results.length,
        nextIndex: endIndex,
        hasNext: hasNext,
        data: results
    };

    next();
};

module.exports = advancedResults;