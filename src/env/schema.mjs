import { z } from 'zod'

export const serverSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']),

})

/** @type {{ [k in keyof z.infer<typeof serverSchema>]: z.infer<typeof serverSchema>[k] | undefined }} */
export const serverEnv = {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
}

export const clientSchema = z.object({
    DOMAIN: z.string()
})

/** @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }} */
export const clientEnv = {
    DOMAIN:process.env.DOMAIN,
}