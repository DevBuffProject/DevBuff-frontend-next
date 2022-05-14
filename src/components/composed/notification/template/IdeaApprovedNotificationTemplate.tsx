import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NotificationTemplate from "./NotificationTemplate";

export default class IdeaApprovedNotificationTemplate implements NotificationTemplate {

    private readonly notification: Notification;

    constructor(notification: Notification) {
        if (notification.type !== TypeNotification.IdeaApproved) {
            throw new Error("Please provide correct notification!")
        }
        this.notification = notification;
    }

    public getIcon(): React.ReactElement {
        return (
            <Image src={'/icons/sliders.svg'} width={35} height={35}/>
        )
    }

    public getTitle(): string {
        return `Идея одобрена`
    }

    public getBody(): React.ReactElement {
        return (
            <div>
                Ваша идея
                <Link href={`idea/${this.notification.data.ideaId}`}>
                    {this.notification.data.ideaName}
                </Link>
                , была одобрена
            </div>
        )
    }

    getNotification(): Notification {
        return this.notification;
    }
}