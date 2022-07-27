const fetch = (params, callback) => {
  setTimeout(function() {
    if(params === 'param-data')
      callback(null, 'ok');
    else
      callback(new Error('fail'), null);
  }, 2000);
}

// test01: success
fetch('param-data', (error, data) =>{
  if(error) {
    console.log(error);
    return ;
  }
    console.log(data);
});

// test01: fail
fetch('param-error', (error, data) =>{
  if(error) {
    console.log(error);
    return ;
  }
    console.log(data);
});


console.log('wait....');