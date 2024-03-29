import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import NotificationTemplate from "./NotificationTemplate";
import {MdOutlineEmail} from "react-icons/md";

export default class ConfirmEmailNotificationTemplate implements NotificationTemplate {
    private readonly notification: Notification;

    constructor(notification: Notification) {
        if (notification.type !== TypeNotification.ConfirmEmail) {
            throw new Error("Please provide correct notification!")
        }
        this.notification = notification;
    }

    public getBody(): React.ReactElement {
        return (
            <div>
                <span>Мы отправили вам уведомление для подтверждения вашего Email.</span>
            </div>
        );
    }

    public getIcon(): React.ReactElement {
        return (
            <MdOutlineEmail className={`text-4xl`}/>
        )
    }

    public getTitle(): string {
        return 'Подтверждение почты';
    }


    public getNotification(): Notification {
        return this.notification;
    }
}
