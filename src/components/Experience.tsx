import { Experience as TExperience} from "@/Types";

export default function Experience(experience: TExperience) {
    return (
        <figure>
            <div className="h-[2px] w-12 rounded-md bg-white mb-1"/>
            <figcaption className="space-y-[2px]">
                <p className="text-[.95em] text-gray-300/90">{experience.time}</p>
                <p><b>{experience.role}</b></p>
                <p>
                    <b>{experience.companyName}</b> - {experience.address}
                </p>
                <p className="mb-5 text-[1em] text-gray-300/90">
                    {experience.story}
                </p>
            </figcaption>
        </figure>
    )
}