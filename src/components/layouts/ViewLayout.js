import Header from "../composed/header/Header";
import SideBar from "../composed/navigation/navigation/SideBar";
import {Helmet} from "react-helmet";


export default function ViewLayout ({children}) {
    return(
        <>
            <Helmet>
                <body className={'bg-gray-100'} />
            </Helmet>
            <Header />
            <main className={'flex gap-2 w-full mx-auto'}>
                {
                    <SideBar/>
                }
                {children}
            </main>
        </>
    )
}