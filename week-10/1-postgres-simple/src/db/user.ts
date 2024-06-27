import { client } from "..";


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    

    const query= `INSERT INTO users (username,password,name)
    VALUES ($1,$2,$3)`
    return client.query(query,[username,password,name])
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
   
    const query = `SELECT * FROM users where id=$1`
   const res= await client.query(query,[userId])
   return res.rows[0]
}
