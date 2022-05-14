import NotificationTemplate from "./NotificationTemplate";
import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
            <Image src={'/icons/sliders.svg'} width={35} height={35}/>
        )
    }

    public getTitle(): string {
        return "У вас новый отлик";
    }

    public getNotification(): Notification {
        return this.notification;
    }
}