import './InfoBox.css'
function InfoBox() {

    const name = 'Łukasz Bogdzia'
    let date = new Date().toUTCString()
    var ggg = ""

    return <div className="infobox">
        <p>{name}</p>
        <p>{date}</p>
        <p>13:30</p>
    </div>
}
export default InfoBox
// const InfoBox = () => {

// }