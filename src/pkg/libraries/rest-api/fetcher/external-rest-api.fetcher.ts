import ky, { type KyInstance } from 'ky'


export const externalRestApiFetcher: KyInstance = ky.create({
    credentials: 'include',
    throwHttpErrors: false,
})


