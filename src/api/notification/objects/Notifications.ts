export default interface Notifications {
    countUnread: bigint,
    notifications: Array<Notification>
}

export enum TypeNotification {
    ConfirmEmail = "CONFIRM_EMAIL",
    UserPending = "USER_PENDING",
    IdeaApproved = "IDEA_APPROVED",
    IdeaDenied = "IDEA_DENIED",
}


export interface Notification {
    type: TypeNotification
    data: any //TODO Может нужен будет какой-нибудь маппер
    dateCreation: Date
    read: boolean
}


export enum StatusType {
    All = "ALL",
    Unread = "UNREAD"
}