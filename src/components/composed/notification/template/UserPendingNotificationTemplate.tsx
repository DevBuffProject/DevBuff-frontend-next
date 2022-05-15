import NotificationTemplate from "./NotificationTemplate";
import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import Link from "next/link";
import {RiUserSharedLine} from "react-icons/ri";

export default class UserPendingNotificationTemplate implements NotificationTemplate {
    private readonly notification: Notification;

    constructor(notification: Notification) {
        if (notification.type !== TypeNotification.UserPending) {
            throw new Error("Please provide correct notification!")
        }
        this.notification = notification;
    }

    public getBody(): React.ReactElement {
        return (
            <div>
                %_USER_NAME_% хочет присоедениться к <Link href={`idea/${this.notification.data.ideaId}`}>
                {this.notification.data.ideaName}
            </Link>
            </div>
        );
    }

    public getIcon(): React.ReactElement {
        return (
            <RiUserSharedLine className={`text-4xl`}/>
        )
    }

    public getTitle(): string {
        return "У вас новый отлик";
    }

    public getNotification(): Notification {
        return this.notification;
    }
}