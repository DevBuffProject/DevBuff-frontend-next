import {GetServerSideProps} from "next";
/**
 * import Profile from "../../api/profile/objects/Profile";
 */
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {injector} from "../config/DependencyInjection";
import NotificationService from "../services/notification/NotificationService";
import Notifications from "../api/notification/objects/Notifications";
import {useEffect, useState} from "react";
import NotificationViewer from "../components/composed/notification/NotificationViewer";
import {ALL_NAMESPACES} from "../config/I18nConfiguration";


export default function NotificationPage() {


    const [notifications, setNotifications] = useState<Notifications>()

    const notificationService: NotificationService = injector.get(NotificationService)

    useEffect(() => {
        notificationService.getNotifications()
            .then((notificationsData) => {
                    setNotifications(notificationsData)
                }
            )
    }, [true])

    return (
        <div className={'ml-5 mr-5 w-full'}>
            <div className={'mb-2'}>
                {/*Title*/}
                <div className={'text-3xl'}>Ваши уведомления</div>
                <div className={'text-gray-400 text-sm'}>
                    Здесь мы собрали все уведомления связанные с вашим аккаунтом.
                </div>
            </div>
            <hr className={`mb-2`}/>

            <NotificationViewer notifications={notifications?.notifications}/>
        </div>

    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return (
        {
            props: {
                ...await serverSideTranslations(context.locale as string, ALL_NAMESPACES),
            }
        }
    )
}