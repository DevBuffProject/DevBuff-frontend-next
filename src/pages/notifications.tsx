import {GetServerSideProps} from "next";
/**
 * import Profile from "../../api/profile/objects/Profile";
 */
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {injector} from "../config/DependencyInjection";
import NotificationService from "../services/notification/NotificationService";
import {StatusType} from "../api/notification/objects/Notifications";
import {Component, ReactElement} from "react";
import NotificationViewer from "../components/composed/notification/NotificationViewer";
import {ALL_NAMESPACES} from "../config/I18nConfiguration";
import ToggleButton from "../components/basic/ToggleButton";
import PagePicker from "../components/basic/PagePicker";
import ViewLayout from "../components/layouts/ViewLayout";

export default class NotificationPage extends Component<any, any> {
    private readonly onStatusTypeChanged: (newValue: StatusType) => void;
    private readonly onPageChanged: (newValue: number) => void;
    private readonly notificationService: NotificationService;
    static getLayout: (page: React.ReactElement) => JSX.Element;


    constructor(props:any, context: any) {
        super(props, context);

        this.state = {
            notifications: undefined,
            statusType: StatusType.Unread,
            page: 1
        }
        this.notificationService = injector.get(NotificationService);

        this.onStatusTypeChanged = (newValue: StatusType) => {
            this.setState({page: 1})
            this.setState({statusType: newValue})
            this.loadNotification(1, newValue)
        }
        this.onPageChanged = (newValue: number) => {
            this.setState({page: newValue})
            this.loadNotification(newValue, this.state.statusType)
        }

        this.loadNotification(this.state.page, this.state.statusType)
    }

    private loadNotification(page: number, status: StatusType) {
        this.setState({notifications: undefined})
        this.notificationService.getNotifications(page, status)
            .then((notificationsData) => {
                    this.setState({notifications: notificationsData})
                }
            )
    }


    public render() {
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
                <div className={`w-full flex justify-end mb-2`}>
                    <ToggleButton onChanged={this.onStatusTypeChanged} defaultValue={StatusType.Unread} values={[
                        {
                            title: "Все",
                            value: StatusType.All
                        },
                        {
                            title: "Не прочитанные",
                            value: StatusType.Unread
                        }
                    ]}/>
                </div>
                <NotificationViewer notifications={this.state.notifications?.notifications}/>

                <PagePicker currentPage={this.state.page}
                            hasNext={this.state.notifications?.notifications.length === 10}
                            onPageChanged={this.onPageChanged}/>
            </div>

        )
    }
}


NotificationPage.getLayout = function getLayout(page: ReactElement) {
    return(
        <ViewLayout>
            {page}
        </ViewLayout>
    )
}

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps = async (context) => {
    return (
        {
            props: {
                ...await serverSideTranslations(context.locale as string, ALL_NAMESPACES),
            }
        }
    )
}