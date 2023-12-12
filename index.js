let express = require('express');
let app = express();
app.listen(3000);
app.get("/", function(request, response){
    // отправляем ответ
   response.send("<h2>Привет Express!</h2>");
});
