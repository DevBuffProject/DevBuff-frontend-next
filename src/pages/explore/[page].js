import ViewLayout from "../../components/layouts/ViewLayout";
import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection.ts";
import {useAppSelector} from "../../redux/hooks";
import {wrapper} from "../../redux/store";
import {connect} from "react-redux";

export function Home() {

    useEffect(()=>{
        //TODO а нужен ли тут это?
        injector.get(AuthorizationService)
    },[])
    return(
        <ViewLayout>
        </ViewLayout>
    )
}


export const getStaticProps = wrapper.getServerSideProps((store) => () => {
    injector.get(AuthorizationService).attachDispatch(store.dispatch)
})

const mapDispatchToProps = (dispatch) => {
    injector.get(AuthorizationService).attachDispatch(dispatch)
    return {}
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { page: "1"} }
        ],
        fallback: true
    };
}


export default connect(null, mapDispatchToProps)(Home)

