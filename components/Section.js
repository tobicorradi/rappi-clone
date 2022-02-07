const Section = ({backgroundColor, container = true, border, children}) => {
    return (
        <section className={`py-12 ${backgroundColor} ${border}`}>
            <div className={container ? 'container' : null}>
                {children}
            </div>
        </section>
    );
};

export default Section;
