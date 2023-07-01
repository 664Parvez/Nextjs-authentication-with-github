import NextAuth from "next-auth"
import GithubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        GithubAuth({
            clientId: "28636ffd1079fa66fdcf",
            clientSecret: "cd180d33d10c04dea9e9f2d53ff456ca922dae22"
        })
    ]
}

export default NextAuth(authOption)