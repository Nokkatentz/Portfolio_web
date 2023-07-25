import "./manage-icon-skills.css"

function Manage_icon_skills(props){
    const{icon ,text} = props;
    return(
        <div id="container-icon">
            <div id="icon-in">
                <img src={icon} alt="icon"/>
            </div>
            <div id="text-in">
                <p>{text}</p>
            </div>
        </div>
    );
}
export default Manage_icon_skills