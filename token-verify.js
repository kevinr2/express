const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzOTQ4MzQyN30.J7ofqtxkgR-ftH7kJYjSknyjI11oQhCNx8Vi42jjUaE'

function verifyToken(token, secret) {
    return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret)
console.log(payload)