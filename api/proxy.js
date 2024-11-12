import fetch from 'node-fetch';

export default async (req, res) => {
    const targetUrl = 'https://sites.google.com/psdschools.org/wooden?usp=sharing';
    const response = await fetch(targetUrl);
    const body = await response.text();

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(body);
};