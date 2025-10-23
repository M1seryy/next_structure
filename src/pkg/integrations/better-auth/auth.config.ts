import { betterAuth } from "better-auth";

export const auth = betterAuth({
    secrets: [process.env.AUTH_SECRET!],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            accessType: "offline",
            prompt: "consent",
        },

    },
    storage: {
        sessions: new Map<string, any>(),
        async getSession(id: string) { return this.sessions.get(id); },
        async setSession(id: string, session: any) { this.sessions.set(id, session); },
        async deleteSession(id: string) { this.sessions.delete(id); },
    },
});
