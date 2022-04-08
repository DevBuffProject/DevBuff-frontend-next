import Header from "../composed/header/Header";
import SideBar from "../composed/navigation/navigation/SideBar";


export default function ViewLayout ({children,user,token}) {
    return(
        <>
            <Header />
            <main className={'flex gap-2 w-1280 mx-auto'}>
                {
                    !token
                        ? <SideBar />
                        : <SideBar user={user} token={token}/>
                }
                {children}
            </main>
        </>
    )
}