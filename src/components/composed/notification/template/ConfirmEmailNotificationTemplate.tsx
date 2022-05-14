import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import Image from "next/image";
import NotificationTemplate from "./NotificationTemplate";

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
                Мы отправили вам уведомление
            </div>
        );
    }

    public getIcon(): React.ReactElement {
        return (
            <Image src={'/icons/sliders.svg'} width={35} height={35}/>
        )
    }

    public getTitle(): string {
        return 'Подтверждение почты';
    }


    public getNotification(): Notification {
        return this.notification;
    }
}
