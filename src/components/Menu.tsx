type MenuProps = {
    checked: boolean;
    onChange: () => void;
};

export function Menu({ checked, onChange }: MenuProps) {
    return (
        <label className="flex flex-col gap-2 w-8 cursor-pointer relative">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="peer absolute opacity-0 w-full h-full z-10 cursor-pointer"
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white peer-checked:bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
            <div className="rounded-2xl h-[3px] w-full bg-white peer-checked:bg-black duration-500 peer-checked:-rotate-45" />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white peer-checked:bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
        </label>
    );
}