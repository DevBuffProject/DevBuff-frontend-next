import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import Link from "next/link";
import NotificationTemplate from "./NotificationTemplate";
import {FcApproval} from "react-icons/fc";

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
            <FcApproval className={`text-4xl`}/>
        )
    }

    public getTitle(): string {
        return `Идея одобрена`
    }

    public getBody(): React.ReactElement {
        return (
            <div>
               <span>Поздравляем,  ваша идея
                   &laquo;<Link href={`idea/${this.notification.data.ideaId}`}>
                    {this.notification.data.ideaName}
                </Link>&raquo; была одобрена. </span>
            </div>
        )
    }

    getNotification(): Notification {
        return this.notification;
    }
}