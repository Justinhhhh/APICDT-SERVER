import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // const cred = {
                //     identifier: credentials.email,
                //     password: credentials.password
                // }
                // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/local`, {
                //     method: 'POST',
                //     body: JSON.stringify(cred),
                //     headers: {
                //         'Content-type': 'application/json',
                //         'Accept': 'application/json'
                //     }
                // })
                // const data = await res.json()
                // const user = { ...data.user, jwt: data.jwt }
                const user = {
                    email: 'amos@test.com',
                    username: 'Amos'
                }
                
                if (user) {
                    return user
                }
                
                return null
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    }, 
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
              return {
                ...token,
                accessToken: user.token,
              };
            }
      
            return token;
          },
      
          async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.accessTokenExpires = token.accessTokenExpires;
      
            return session;
          },
        }
}

const Auth = (req, res) =>
    NextAuth(req, res, authOptions);

export default Auth;