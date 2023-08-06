import "./manage-icon-skills.css";

function ManageIconSkills(props){
    const{type ,icon ,text} = props;
    if (type === '1'){
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
    else if(type === '2'){
        return(
        <div id="container-icon">
        <div id="icon-in2">
            <img src={icon} alt="icon"/>
        </div>
        <div id="text-in">
            <p>{text}</p>
        </div>
    </div>
    );
    }
    
};
export default ManageIconSkills