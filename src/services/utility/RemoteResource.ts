import {AxiosError} from "axios";

export default class RemoteResource<T> {

    readonly httpStatusCode: number;

    /**
     * Data for storage
     * @private
     */
    readonly data: T | null

    constructor(httpStatusCode: number, data: T | null) {
        this.httpStatusCode = httpStatusCode
        this.data = data
    }
}

export class RemoteResourceBuilder<T> {

    private httpStatusCode: number = 200;

    /**
     * Data for storage
     * @private
     */
    private data: T | null  = null


    private setData(data: T | null): RemoteResourceBuilder<T> {
        this.data = data
        return this;
    }

    private setHttpStatusCode(httpStatusCode: number): RemoteResourceBuilder<T> {
        this.httpStatusCode = httpStatusCode;
        return this;
    }

    public async build(promise: Promise<T>): Promise<RemoteResource<T>> {

        try {
            this.setData(await promise)
        } catch (e: AxiosError | any) {
            this.setHttpStatusCode(e.response.status)
        }
        return new RemoteResource<T>(this.httpStatusCode, this.data)
    }
}