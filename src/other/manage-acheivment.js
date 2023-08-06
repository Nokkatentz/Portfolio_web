import './manage-acheivment.css';

function ManageAcheivment(props){
    const {type ,head ,text ,img} = props;
    if(type === '1'){
        return(
            <div id='content'>
                <div id='head-text'>
                    <p>
                        {head}
                    </p>
                </div>
                <div id='text'>
                    <p>
                        {text}
                    </p>
                </div>
                <div id='acheiv-img1'>
                    <img src={img} alt='acheiv-img'/>
                </div>
            </div>
        );
    }
    else if(type === '2'){
        return(
            <div id='content'>
            <div id='head-text'>
                <p>
                    {head}
                </p>
            </div>
            <div id='text'>
                <p>
                    {text}
                </p>
            </div>
            <div id='acheiv-img2'>
                <img src={img} alt='acheiv-img'/>
            </div>
        </div>
        );
    }
    else if(type === '3'){
        return(
            <div id='content'>
            <div id='head-text'>
                <p>
                    {head}
                </p>
            </div>
            <div id='text'>
                <p>
                    {text}
                </p>
            </div>
            <div id='acheiv-img3'>
                <img src={img} alt='acheiv-img'/>
            </div>
        </div>
        );
    }
}
export default ManageAcheivment;
