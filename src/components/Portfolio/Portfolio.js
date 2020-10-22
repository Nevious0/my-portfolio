import React, {Component} from 'react'
import style from './style.module.css'

class Portfolio extends Component {

 render(){ 
    return (
       
        <div className="container">
            <h1 className={style.label}>This is portfolio</h1>
            <div className={style.myImages}>
                <div className={style.food}>
                <img className={style.images} src="/image/Food1.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
    <h3>INFO{"  "}<i className="far fa-caret-square-down"></i><p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>

                <div className={style.food}>
                <img className={style.images}  src="/image/Food2.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
                <h3>INFO{"  "}<i className="far fa-caret-square-down"></i> <p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>

                 <div className={style.food}>
                <img className={style.images} src="/image/Food3.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
    <h3>INFO{"  "}<i className="far fa-caret-square-down"></i><p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>

                 <div className={style.food}>
                <img className={style.images} src="/image/Food4.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
                <h3>INFO{"  "}<i className="far fa-caret-square-down"></i> <p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>

                 <div className={style.food}>
                <img className={style.images} src="/image/Food7.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
                <h3 >INFO{"  "}<i className="far fa-caret-square-down"></i><p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>

                 <div className={style.food}>
                <img className={style.images} src="/image/Food6.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
                <h3>INFO{"  "}<i className="far fa-caret-square-down"></i><p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>
                
                <div className={style.food}>
                <img className={style.images} src="/image/Food8.jpg" alt=""/>
                <h2>This is a nice meal</h2>
                <h1>R300</h1>
                <div className={style.info}>
                <h3>INFO{"  "}<i className="far fa-caret-square-down"></i> <p>Enjoy your meal with us. We highly appreciate and value all our customers. For any more questions please dont hesitate to call us again.</p></h3>
                </div>
                </div>
                
            </div>
        </div>
          
    )
}
}
export default Portfolio