export enum Authority {
    User = "ROLE_USER",
    Admin = "ROLE_ADMIN"
}

export default interface User {
    authorities: Array<Authority>
}