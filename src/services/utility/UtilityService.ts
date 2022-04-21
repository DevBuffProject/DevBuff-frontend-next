


export default class UtilityService {

    // static setPage(operation : string, ideas  : number = 0) : void {
    //     const router = useRouter()
    //
    //     switch (operation) {
    //         case 'Back' :
    //             let pageBack :any = router.query.page
    //             if (pageBack === 1) return;
    //             router.push({
    //                 pathname : '/explore/[page]',
    //                 query : { page : pageBack - 1 }
    //             })
    //             return
    //         case 'Forward' :
    //             let pageForward :any = router.query.page
    //             console.log(ideas)
    //             if (ideas < 10) return;
    //             router.push({
    //                 pathname : '/explore/[page]',
    //                 query : { page : pageForward + 1 }
    //             })
    //             return
    //     }
    // }

    static setColorLanguage(language : string | undefined) : string {
        const colors = ['red','blue','sky','orange','brown','black','indigo','yellow','green'];

        switch (language) {
            //Languages
            case 'PHP' :
                return colors[1]
            case 'CPlusPlus' :
                return colors[2]
            case 'CSharp' :
                return colors[2]
            case 'JavaScript' :
                return colors[7]
            case 'TypeScript' :
                return colors[2]
            case 'Java' :
                return colors[4]
            case 'Kotlin' :
                return colors[4]
            case 'Python' :
                return colors[7]
            //Tech
            case 'Spring' :
                return colors[4]
            case '.NET Framework' :
                return colors[2]
            case 'Unity' :
                return colors[6]
            case 'Unreal Engine' :
                return colors[5]
            case 'Vue.js' :
                return colors[8]
            case 'React' :
                return colors[1]
            case 'TensorFlow' :
                return colors[3]
            case 'Node.js' :
                return colors[8]

            // Specs

            case 'front-end' :
                return colors[2]
            case 'back-end' :
                return colors[4]
            case 'android' :
                return colors[8]
            case 'game' :
                return colors[6]
            case 'desktop' :
                return colors[1]
            case 'microcontrollers' :
                return colors[5]
            case 'ML' :
                return colors[7]
            case 'apple' :
                return colors[5]
            default :
                return colors[0]
        }
    }

}