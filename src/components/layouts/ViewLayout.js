import Header from "../composed/header/Header";
import SideBar from "../composed/navigation/navigation/SideBar";


export default function ViewLayout ({children,user}) {
    return(
        <>
            <Header />
            <main className={'flex gap-2 w-1280 mx-auto'}>
                {
                    <SideBar/>
                }
                {children}
            </main>
        </>
    )
}