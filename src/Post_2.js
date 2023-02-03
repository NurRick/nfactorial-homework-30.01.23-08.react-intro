import './App.css';
import './Post.css';
import img_2 from "./assets/Img2.png";
import ereke from "./assets/Ereke.jpg";
import Ld from "./assets/LinkedIn.png";
import FB from "./assets/Facebook Circled.png";
import TW from "./assets/Twitter.png";

function Post() {
    return (
      <section className="Post">
        <div className='PostDiv'>
            <div className='PostAutor'>
                <div className='PostAutorImg'>
                    <img className='PostIMG' alt="Damir" src={ereke}/>
                </div>
                <div className='AutorName'>
                    <h5>Yerkebulan Omar</h5>
                    <h5 class="opacity">in</h5>
                    <h5>About CSS</h5>
                    <h5>·</h5>
                    <h5 class="opacity">1 february 2023</h5>
                </div>
            </div>
            <div className='PostTitle'>
                <h1>7 Practical CSS Tips</h1>
            </div>
            <div className='PostSummary'>
                <p>Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                    You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, 
                    I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
            </div>
            <div className='PostLastLine'>
                <div className='PostButton'>
                    <div className='PostButt'>
                        <button>
                            <p>Java Script</p>
                        </button>
                    </div>
                    <div>
                        <p class="opacity">17 min read</p>
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
            <img className='PostMainIMG' alt="image 2" src={img_2}/>
        </div>    
      </section>
    );
  }
  
  export default Post;