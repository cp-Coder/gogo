export default function Card(props) {
    const { card } = props;
    return (
        <div>
            <li key={card.id}>
            <span>{card.name}</span>
            </li>
        </div>
    )
}