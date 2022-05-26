import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__decorationLine section__decorationLine--position"></div>
        <ul className="section__listOfTasks">{body}</ul>
    </section>
);

export default Section;