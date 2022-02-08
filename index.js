const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://practical-shaw-203b64.netlify.app/'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('i modified it!.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
