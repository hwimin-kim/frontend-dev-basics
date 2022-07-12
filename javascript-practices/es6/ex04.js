/**
 *  Default Parameter
 */

const print = function(strs, end = '\n') {
    console.log(strs.join(end));
};

print(['Alaways', 'with', 'me']);
print(['Alaways', 'with', 'me'], ' ');