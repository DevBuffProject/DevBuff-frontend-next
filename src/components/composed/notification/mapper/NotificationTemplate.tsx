import {Notification, TypeNotification} from "../../../../api/notification/objects/Notifications";
import ConfirmEmailNotificationTemplate from "../template/ConfirmEmailNotificationTemplate";
import IdeaApprovedNotificationTemplate from "../template/IdeaApprovedNotificationTemplate";
import NotificationTemplate from "../template/NotificationTemplate";
import IdeaDeniedNotificationTemplate from "../template/IdeaDeniedNotificationTemplate";
import UserPendingNotificationTemplate from "../template/UserPendingNotificationTemplate";


export class NotificationTemplateMapper {
    public static build(notifications: Array<Notification>): Array<NotificationTemplate> {
        return notifications.map((notification) => NotificationTemplateMapper.toTemplate(notification));
    }

    private static toTemplate(notification: Notification): NotificationTemplate {
        switch (notification.type) {
            case TypeNotification.ConfirmEmail:
                return new ConfirmEmailNotificationTemplate(notification);
            case TypeNotification.IdeaApproved:
                return new IdeaApprovedNotificationTemplate(notification);
            case TypeNotification.IdeaDenied:
                return new IdeaDeniedNotificationTemplate(notification);
            case TypeNotification.UserPending:
                return new UserPendingNotificationTemplate(notification);
            default:
                throw new Error(`Unsupported notification! ${notification.type}`)
        }
    }
}
