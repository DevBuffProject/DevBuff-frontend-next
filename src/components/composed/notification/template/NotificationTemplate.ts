import {ReactElement} from "react";
import {Notification} from "../../../../api/notification/objects/Notifications";

export default interface NotificationTemplate {

    getIcon(): ReactElement


    getTitle(): string


    getBody(): ReactElement

    getNotification(): Notification
}