export default function TrItem({ el }) {
    return (
        <>
            <tr>
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.price}</td>
                <td>
                    <img src={el.image} height="100" width="100" />
                </td>
                <td>{el.detail}</td>
                <td>Edit | Delete</td>
            </tr>
        </>
    )
}