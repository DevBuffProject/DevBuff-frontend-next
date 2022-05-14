import {Notification, TypeNotification} from "../../../api/notification/objects/Notifications";
import Image from "next/image";

interface InputParams {
    notifications: Array<Notification> | undefined
}

export default function NotificationViewer(params: InputParams) {


    const notifications = params.notifications;


    if (notifications === undefined || notifications.length === 0) {
        return (
            <>
                У вас пока пусто :(
            </>
        )
    }


    return (
        <div>
            {
                notifications.map((notification) => {
                    return (
                        <div className={`border rounded w-full mb-2 flex`} key={notification.toString()}>
                            <div>
                                {getNotificationIcon(notification.type)}
                            </div>

                            <div>
                                {getNotificationTitleByType(notification.type)}
                            </div>

                            <div>
                                {getNotificationBodyByType(notification.type)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


function getNotificationIcon(notificationType: TypeNotification) {
    switch (notificationType) {
        case TypeNotification.ConfirmEmail:
        case TypeNotification.IdeaApproved:
        case TypeNotification.IdeaDenied:
        case TypeNotification.UserPending:
            return (
                <Image src={'/icons/sliders.svg'} width={20} height={20}/>
            )
    }
}

function getNotificationTitleByType(notificationType: TypeNotification) {
    switch (notificationType) {
        case TypeNotification.ConfirmEmail:
            return 'Подтверждение почты'
        case TypeNotification.IdeaApproved:
            return 'Идея одобрена'
        case TypeNotification.IdeaDenied:
            return 'Идея нуждается в доработке'
        case TypeNotification.UserPending:
            return 'Новый отклик'
    }
}

function getNotificationBodyByType(notificationType: TypeNotification){
    switch (notificationType) {
        case TypeNotification.ConfirmEmail:
            return 'Подтверждение почты'
        case TypeNotification.IdeaApproved:
            return 'Идея одобрена'
        case TypeNotification.IdeaDenied:
            return 'Идея нуждается в доработке'
        case TypeNotification.UserPending:
            return 'Новый отклик'
    }
}
