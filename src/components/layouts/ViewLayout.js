import Header from "../composed/header/Header";
import SideBar from "../composed/navigation/navigation/SideBar";
import {Helmet} from "react-helmet";


export default function ViewLayout ({children}) {
    return(
        <>
            <Helmet>
                <body className={'bg-white '} />
            </Helmet>
            <Header />
            <main className={'flex gap-20 w-full h-full mx-auto '}>
                {
                    <SideBar/>
                }
                {children}
            </main>
        </>
    )
}