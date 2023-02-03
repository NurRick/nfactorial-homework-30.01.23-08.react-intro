import './App.css';
import './Post.css';
import img_1 from "./assets/Img1.png";
import damir from "./assets/Damir.jpg";
import Ld from "./assets/LinkedIn.png";
import FB from "./assets/Facebook Circled.png";
import TW from "./assets/Twitter.png";

function Post() {
    return (
      <section className="Post">
        <div className='PostDiv'>
            <div className='PostAutor'>
                <div className='PostAutorImg'>
                    <img className='PostIMG' alt="Damir" src={damir}/>
                </div>
                <div className='AutorName'>
                    <h5>Damir Shayakhmet</h5>
                    <h5 class="opacity">in</h5>
                    <h5>About CSS</h5>
                    <h5>·</h5>
                    <h5 class="opacity">31 january 2023</h5>
                </div>
            </div>
            <div className='PostTitle'>
                <h1>7 Practical CSS Tips</h1>
            </div>
            <div className='PostSummary'>
                <p>You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
            </div>
            <div className='PostLastLine'>
                <div className='PostButton'>
                    <div className='PostButt'>
                        <button>
                            <p>Java Script</p>
                        </button>
                    </div>
                    <div>
                        <p class="opacity">12 min read</p>
                    </div>
                    <div>
                        <p>·</p>
                    </div>
                    <div>
                        <p class="opacity">Selected for you</p>
                    </div>
                </div>
                <div className='PostLinks'>
                    <div>
                        <a href="https://www.linkedin.com/feed/"> <img src={Ld}/></a> 
                    </div>
                    <div>
                        <a href="https://www.facebook.com/"> <img src={FB}/></a>      
                    </div>
                    <div>
                        <a href="https://twitter.com/"><img src={TW}/></a>
                    </div>
                </div>
            </div>

        </div>
        <div className='PostImg'>
            <img className='PostMainIMG' alt="image 1" src={img_1}/>
        </div>    
      </section>
    );
  }
  
  export default Post;