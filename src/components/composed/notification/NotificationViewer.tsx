import {Notification} from "../../../api/notification/objects/Notifications";
import {NotificationTemplateMapper} from "./mapper/NotificationTemplate";
import TimeAgo from "react-timeago";

interface InputParams {
    notifications: Array<Notification> | undefined
}

export default function NotificationViewer(params: InputParams) {


    const notifications = params.notifications;

    if (notifications === undefined) {
        return (
            <>
                Загрузочка.....
            </>
        )
    }

    if (notifications.length === 0) {
        return (
            <>
                У вас пока пусто :(
            </>
        )
    }
    const notificationsTemplate = NotificationTemplateMapper.build(notifications);

    return (
        <div>
            {
                notificationsTemplate.map((notificationTemplate, index) => {
                    return (
                        <div className={`border rounded w-full mb-2 p-2 flex gap-5 items-center`}
                             key={index + notificationTemplate.getNotification().type}>
                            <div className={``} >
                                {notificationTemplate.getIcon()}
                            </div>

                            <div className={`flex flex-col w-full`}>
                                <div className={`flex gap-2 justify-start items-center`}>
                                    <div className={`font-medium`}> {notificationTemplate.getTitle()}</div>
                                    <TimeAgo className={`text-gray-500 text-sm translate-y-0.1`}
                                             date={notificationTemplate.getNotification().dateCreation}/>
                                </div>

                                <div className={`text-sm`}>
                                    {notificationTemplate.getBody()}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}