const SectionTitle = ({text, className}) => {
    return (
        <h2 className={"font-black text-xl text-slate-800 "+ className}>
            {text}
        </h2>
    );
};

export default SectionTitle;
