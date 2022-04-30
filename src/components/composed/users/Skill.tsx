import Specializations from "./constructor/Specializations";
import UtilityService from "../../../services/utility/UtilityService";
import Profile from "../../../api/profile/objects/Profile";

interface Input {
    profile: Profile
}


export default function Skill(input: Input) {
    return (
        <ul className={'2xl:flex 2xl:h-fit shadow gap-5 w-full overflow-x-scroll'}>
            {
                input.profile.skills.map((skillName, idx) => {
                    return (
                        <li key={idx}
                            className={`${UtilityService.setColorLanguage(skillName.name)}   w-full p-2 opacity-80`}>
                            <span
                                className={' top-0 font-montserratRegular xl:text-xl lg:text-base text-base'}>{skillName.name}</span>
                            <Specializations {...skillName} />
                        </li>
                    )
                })
            }
        </ul>
    )
}