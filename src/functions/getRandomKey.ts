/**
 * # getRandomKey
 * @description Generate a random key using the crypto API
 * @return {string}
 */
export const getRandomKey = () => crypto.randomUUID()