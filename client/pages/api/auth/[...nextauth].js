import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signIn } from 'next-auth/react'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const cred = {
                    identifier: credentials.email,
                    password: credentials.password
                }
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/local`, {
                    method: 'POST',
                    body: JSON.stringify(cred),
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                const data = await res.json()

                const user = { ...data.user, jwt: data.jwt}
                console.log("######")
                console.log(data)
                console.log(user)
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
        // async signIn({ user, account, profile, email, credentials }) {
        //     if (profile) {
        //         return {
        //             ...user,
        //             id: profile.user.id,
        //             jwt: profile.jwt
        //         }
        //     }
        //     return profile
        // },

        async jwt({ token, user, account, profile }) {
            if (user) {
                token.id = user.id
                token.name = user.username
                token.role = user.userRole
                token.school = user.school
            }
      
            return token;
          },
      
          async session({ session, token }) {
              if (token) {
                  session.id = token.id
                  session.user.name = token.name
                  session.user.role = token.role
                  session.user.school = token.school
            }
      
            return session;
          },
        }
}

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 const cred = {
//                     identifier: credentials.email,
//                     password: credentials.password
//                 }
//                 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/local`, {
//                     method: 'POST',
//                     body: JSON.stringify(cred),
//                     headers: {
//                         'Content-type': 'application/json',
//                         'Accept': 'application/json'
//                     }
//                 })
//                 const data = await res.json()

//                 const user = { ...data.user, jwt: data.jwt}
                
//                 if (user) {
//                     return user
//                 }
                
//                 return null
//             }
//         })
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: '/login',
//     }, 
//     session: {
//         strategy: 'jwt'
//     },
//     callbacks: {
//         async jwt({ token, user, account }) {
//             if (account && user) {
//               return {
//                 ...token,
//                 accessToken: user.token,
//               };
//             }
      
//             return token;
//           },
      
//           async session({ session, token }) {
//             session.user.accessToken = token.accessToken;
//             session.user.accessTokenExpires = token.accessTokenExpires;
      
//             return session;
//           },
//         }
// }

// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//           clientId: "262969199372-kequm2bhls676a27ptm63pe5da765jdn.apps.googleusercontent.com",
//           clientSecret: "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"
//         })
//       ]
// }

const Auth = (req, res) =>
    NextAuth(req, res, authOptions);

export default Auth;