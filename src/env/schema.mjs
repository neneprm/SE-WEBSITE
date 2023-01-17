import { z } from 'zod'

export const serverSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
    NEXTAUTH_URL: z.preprocess(
        (str) => process.env.VERCEL_URL ?? str,
        process.env.VERCEL ? z.string() : z.string().url()
    ),

})

/** @type {{ [k in keyof z.infer<typeof serverSchema>]: z.infer<typeof serverSchema>[k] | undefined }} */
export const serverEnv = {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
}

export const clientSchema = z.object({
})

/** @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }} */
export const clientEnv = {
}