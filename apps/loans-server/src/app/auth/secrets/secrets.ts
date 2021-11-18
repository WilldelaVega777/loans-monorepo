/* This data should be stored in an Env Variable within the host */
export const secrets = {
    jwt: {
        jwtSecret: 'secretKey',
        jwtExpiration: '24h',
    },
    db: {
        host: 'localhost',
        dbName: 'loans',
        user: 'loans',
        password: 'Z0rr1t022'
    }
}
