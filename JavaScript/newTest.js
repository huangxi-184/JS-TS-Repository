const data = {
    metaData: [
      { name: 'USER_NAME' },
      { name: 'ENGLISH_NAME' },
      { name: 'CREATE_TIME' }
    ],
    rows: [
      [ 'ws', 'w s', '2023-06-06 09:32:04' ],
      [ '乔连军', 'qiao lian jun', '2023-06-01 15:44:21' ]
    ]
  };
  
  const transformedData = {
    metaData: data.metaData.map(item => item.name),
    rows: data.rows.map(row => {
      const transformedRow = {};
      data.metaData.forEach((item, index) => {
        transformedRow[item.name] = row[index];
      });
      return transformedRow;
    })
  };
  
  console.log(transformedData);
  