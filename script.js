;(function(){
    var num = 9,
        mas1 = [],
        n = 299,
        tmp = 0;
    
    mas1.push(num);

     for (var i = 2; i <= n; i++) {
        // mas1*9
        var tmpResult = [];

        
        for (var j = 0; j < mas1.length; j++) {
            var element = mas1[j],
                curMultiply = 0;
            
            curMultiply = element*num + tmp;
    
            if (curMultiply.toString().length>1) {            
                tmpResult.push(parseInt(curMultiply.toString()[1]));
                tmp = parseInt(curMultiply.toString()[0]);

                if (j==(mas1.length-1)) {
                    tmpResult.push(parseInt(curMultiply.toString()[0]));
                    tmp = 0;
                };

            } else {
                tmpResult.push(curMultiply);
                tmp = 0;
            };
        }

        for (var j = 0; j < tmpResult.length; j++) {
            mas1[j] = tmpResult[j];
        };        
     }

    //  inverting
    var k = 0,
        concat = '';
    for (var j = tmpResult.length-1; j >= 0; j--) {       
        mas1[k] = tmpResult[j];
        concat += mas1[k];
        k++;
    }
    
    // output
    $('#mas1').html(concat);
    
})();