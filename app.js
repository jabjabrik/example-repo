import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env)

app.use('/', (req, res) => {
    res.status(200).json({ status: true, message: `Hello ${process.env.NAME}` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));