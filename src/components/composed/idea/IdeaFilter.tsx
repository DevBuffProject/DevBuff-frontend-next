import {Component} from "react";
import {SortType} from "../../../api/idea/IdeaApi";
import {injector} from "../../../config/DependencyInjection";
import SkillService from "../../../services/skill/SkillService";
import Language from "../../../api/skill/objects/Language";

interface IdeaFilterProperties {
    sortType: SortType,
    onFilterChanged: (sortType: SortType, selectedSpecialists: Array<string>, selectedLanguages: Array<string>) => void;
}

export default class IdeaFilter extends Component<IdeaFilterProperties, any> {
    private readonly skillService: SkillService;
    private readonly callback: (sortType: SortType, selectedSpecialists: Array<string>, selectedLanguages: Array<string>) => void;

    constructor(properties: Readonly<IdeaFilterProperties> | IdeaFilterProperties) {
        super(properties);

        this.state = {
            sortType: properties.sortType,
            skillMap: new Map<String, Set<String>>(),
            selectedSpecialists: [],
            selectedLanguages: []
        }

        this.skillService = injector.get(SkillService)
        this.callback = properties.onFilterChanged;


        this.skillService.getSkills()
            .then(languages => {
                this.setState({skillMap: this.skillsToSpecialistTree(languages)})
            })

    }


    private skillsToSpecialistTree(languages: Array<Language>): Map<String, Set<String>> {
        const result: Map<String, Set<String>> = new Map<String, Set<String>>();

        for (const language of languages) {
            for (const specialist of language.specializations) {
                let set = result.get(specialist.name)
                if (set === undefined) {
                    set = new Set<String>();
                    result.set(specialist.name, set)
                }
                set.add(language.name)
            }
        }
        return result;
    }


    render() {

        if (this.state.skillMap?.size) {
            this.callback(
                this.state.sortType,
                this.state.selectedSpecialists,
                this.state.selectedLanguages
            )
        }

        return (
            <>
                <div>
                    <ul>
                        {
                            Array.from(this.state.skillMap.keys()).map((specialist: unknown, index: number) => {
                                const _specialist: string = specialist as string;
                                return (
                                    <li key={`${index}-${_specialist}`}
                                        onClick={() => this.onClickSpecialist(_specialist)}>
                                        {_specialist}
                                    </li>
                                )
                            })
                        }

                    </ul>

                    <p>Languages: </p>
                    <ul>
                        {
                            this.getAvailableLanguagesForSelectedSpecialist(this.state.selectedSpecialists).map((language, index) => {
                                return (
                                    <li key={`${index}-${language}`} onClick={() => this.onClickLanguage(language)}>
                                        {language}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>

        )
    }


    private getAvailableLanguagesForSelectedSpecialist(selectedSpecialists: Array<string>): Array<string> {
        const languages: Set<string> = new Set<string>();
        selectedSpecialists.forEach((specialist: string) => {
            const setOfLanguages: Set<string> = this.state.skillMap.get(specialist);
            setOfLanguages.forEach(languages.add, languages)
        })
        return Array.from(languages).sort()
    }


    private onClickSpecialist(specialist: string): void {
        const selectedSpecialists: Array<string> = this.state.selectedSpecialists;

        const indexSearch = selectedSpecialists.indexOf(specialist);

        if (indexSearch === -1) {
            selectedSpecialists.push(specialist)
        } else {
            selectedSpecialists.splice(indexSearch, 1)
            const availableLanguages: Array<string> = this.getAvailableLanguagesForSelectedSpecialist(selectedSpecialists)

            this.state.selectedLanguages.filter((language: string) => {
                return !availableLanguages.includes(language)
            }).forEach((language: string) => {
                this.onClickLanguage(language)
            })

        }
        this.setState({selectedSpecialists: selectedSpecialists})
    }

    private onClickLanguage(language: string): void {
        const selectedLanguages: Array<string> = this.state.selectedLanguages;

        const indexSearch = selectedLanguages.indexOf(language);

        if (indexSearch === -1) {
            selectedLanguages.push(language)
        } else {
            selectedLanguages.splice(indexSearch, 1)
        }
        this.setState({selectedLanguages: selectedLanguages})
    }

}