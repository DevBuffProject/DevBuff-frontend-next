import RemoteResource from "../../services/utility/RemoteResource";
import {ReactNode} from "react";
import Link from "next/link";
import HttpStatus from "../../config/HttpStatus";

interface Input {
    children: ReactNode,
    remoteResource: RemoteResource<any>
}

export default function StatusHandler(input: Input) {


    if (input.remoteResource.httpStatusCode !== HttpStatus.OK) {
        return  <div className={'flex gap-2 items-center justify-center bg-blue-50 w-screen h-screen'}><span
            className={'font-montserratThin text-md'}>Something went wrong, go</span><Link href={'/explore/1'}><a><span
            className={'font-montserratBold text-x4l opacity-80 text-blue-400'}>Back</span></a></Link></div>
    }


    return <>
        {input.children}
    </>

}