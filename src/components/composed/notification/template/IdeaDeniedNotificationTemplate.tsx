import NotificationTemplate from "./NotificationTemplate";
import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import React from "react";
import Link from "next/link";
import {MdOutlineSmsFailed} from "react-icons/md";

export default class IdeaDeniedNotificationTemplate implements NotificationTemplate {
    private readonly notification: Notification;

    constructor(notification: Notification) {
        if (notification.type !== TypeNotification.IdeaDenied) {
            throw new Error("Please provide correct notification!")
        }

        this.notification = notification;
    }

    public getBody(): React.ReactElement {
        return (
            <div>
                К сожалению ваша идея <Link href={`idea/${this.notification.data.ideaId}`}>
                {this.notification.data.ideaName}
            </Link>
                не прошла процесс модерации, пожалуйста ознакомтесь с правилами публикации.
            </div>
        );
    }

    public getIcon(): React.ReactElement {
        return (
            <MdOutlineSmsFailed className={`text-4xl`}/>
        )
    }

    public getTitle(): string {
        return "Идея нуждается в доработке";
    }

    public getNotification(): Notification {
        return this.notification;
    }


}