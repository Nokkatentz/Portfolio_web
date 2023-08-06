import React from "react";
import Typewriter from "typewriter-effect";
   

function Typewriters(){
    return(
        <div id="type-container">
            <h1>
                <Typewriter options ={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ['Wellcome to My Portfolio' ,'Pratchaya Posom']
                }}/>
            </h1>
        </div>
    );
}
export default Typewriters;