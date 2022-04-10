export default interface AuthorizationContextHolder {


    getAccessToken(): string | null


    getRefreshToken(): string | null


    updateTokens(accessToken: string, refreshToken: string): void


    destroy():void

}