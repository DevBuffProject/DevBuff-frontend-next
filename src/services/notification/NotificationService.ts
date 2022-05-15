import NotificationApi from "../../api/notification/NotificationApi";
import StateManagerService from "../StateManagerService";
import AuthorizationService from "../authorization/AuthorizationService";
import {updateNotifications} from "../../redux/slices/NotificationSlice";
import Notifications, {StatusType} from "../../api/notification/objects/Notifications";

export default class NotificationService {

    private readonly authorizationService: AuthorizationService;

    private readonly notificationApi: NotificationApi;

    private readonly stateManager: StateManagerService;

    private _currentInterval: NodeJS.Timer | undefined;

    constructor(authorizationService: AuthorizationService, notificationApi: NotificationApi, stateManager: StateManagerService) {
        this.authorizationService = authorizationService
        this.notificationApi = notificationApi;
        this.stateManager = stateManager;

        this.stateManager.subscribe(() => this.onStateChanged())
    }


    private onStateChanged() {
        if (this.authorizationService._isAuthorized() && this._currentInterval === undefined) {
            console.log("Notification", "Start interval")
            this.start();
        } else if (!this.authorizationService._isAuthorized() && this._currentInterval !== undefined) {
            console.log("Notification", "Stop interval")
            clearInterval(this._currentInterval);
        }
    }

    /**
     * Start background update
     * @private
     */
    private start() {
        this.updateNotificationState()
        this._currentInterval = setInterval(() => {
            this.updateNotificationState()
        }, 10 * 1000);
    }

    private updateNotificationState() {
        this.notificationApi.getCountUnreadNotifications()
            .then((count) => {
                this.updateCountNotifications(count)
            })
    }


    private updateCountNotifications(count: number) {
        this.stateManager.dispatch(updateNotifications(count > 0))
    }

    /**
     * Get user notifications
     */
    public async getNotifications(page: number, status: StatusType): Promise<Notifications> {
        return await this.notificationApi.getNotifications(page, status);
    }


}