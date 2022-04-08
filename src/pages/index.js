import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();
    useEffect(()=>{
        router.push('/explore/1')
    },[])
    return (
        <div></div>
    )
}
