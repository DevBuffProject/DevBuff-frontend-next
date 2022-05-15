import React from "react";

export interface ToggleButtonProperties {
    values: Array<ToggleButtonValueProperty>
    onChanged: Function,
    defaultValue: string | undefined

}

export interface ToggleButtonValueProperty {
    /**
     * Visible value of object.
     */
    title: string
    /**
     * Technical of value for identity objects.
     */
    value: string
}


export default function ToggleButton(properties: ToggleButtonProperties) {

    const callback = properties.onChanged

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        callback.call(null, e.target.value)
    }
    return (
        <div>
            <div className={"flex inline-flex border rounded"}>
                {
                    properties.values.map((property) => {
                        return (
                            <div key={`selector-${property.value}`}>
                                <input className={`hidden absolute`} type="radio" id={`option-${property.value}`}
                                       value={property.value}
                                       name="selector" onChange={handleChange}
                                       defaultChecked={property.value === properties.defaultValue}/>
                                <label className={`label-checked:bg-blue-400 label-checked:text-white 
                                        w-full text-black rounded 
                                        cursor-pointer pt-1 pl-5 pr-5 pb-1 inline-block`}
                                       htmlFor={`option-${property.value}`}>{property.title}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}