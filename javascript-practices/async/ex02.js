const fetch = (params) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(params === 'param-data')
        resolve('ok');
      else
        reject(new Error('fail'), null);
    }, 2000);
  });
};

if(require.name == module) {
  // test02: success
  fetch("param-data").then(function(result) {
    console.log(result);
  });

  // test02: fail
  fetch("param-error").catch(function(error) {
    console.error(error);
  });

  /**
   * 일반적인 Promise 사용방법
   * fetch('param....')
   * .then(function(result) { })
   * .catch(function(error) { });
   */

  console.log('wait....')
} else {
  module.exports = fetch;
}
