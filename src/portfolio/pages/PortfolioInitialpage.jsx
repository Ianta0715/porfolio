
import React from 'react';
import './stylesPortfolio.css';




export const PortfolioInitialpage = () => {
    return (
        <div>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start'}}>
                <div style={{ flexBasis: '59%', margin: '2rem', backgroundColor: 'rgba(250, 235, 215, 0.438)',padding:'2rem',borderRadius:'1rem'}}>
                    <h1>My Porfolio</h1>
                    <h3 style={{ marginTop: '3rem' }}>Hello, I am a 23 year old programming student living in Hannover,Germany. <br/>
                    Working on various projects, I love to travel  and learn new things. </h3>
                    
                    <h5 style={{marginTop:'3rem'}}>I made this portfolio to show all my personal proyect so here I leave you all my works and also to let you know all my favorities things in life,enjoy.</h5>
                </div>
               <div> <img style={{ width: '310px', height: '290px',borderRadius:'3rem', alignItems:'flex-end', margin: '2rem 0 1rem 9rem', }} src='./assets/foto-perfil.jpg' alt="Perfil Photo" />
                    <h4>WEB DEVELOPMENT AND PROGRAMMING STUDENT</h4>
                </div>
            </div>
            <h3 style={{ margin: '3rem 0 0 2rem' }}><u>Proyects:</u></h3>
            <div style={{ display: 'flex', marginTop: '4rem', alignItems: 'center', justifyContent: 'center' }}>
                
            <div className="card" style={{ width: '18rem',margin:'1rem' }}>
                <img src='./assets/gifs.png' className="card-img-top" alt="..." />
                
                    <div className="card-body">
                        <h5 className="card-title">Gif App</h5>
                    <p className="card-text">this is an App that has an &lt;input&gt; where you put the first thing that come's to your mind and it will show you diferent gifs of it. </p>
                        <a href=" https://iantarquini15.github.io/gifApp/" target='_blank'  className="btn btn-primary">Visit</a>
                    </div>
            </div>
            <div className="card" style={{ width: '18rem', margin: '2rem' }}>
                <img src='./assets/heros.png' className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Heros App</h5>
                    <p className="card-text">In this App there are diferent types of &lt;Routes&gt; (privates and publics),just by login in you can see all the app,enjoy it.</p>
                        <a href="https://iantarquini15.github.io/heroApp/" target='_blank' className="btn btn-primary">Visit</a>
                    </div>
                    
                </div>
                <div className="card" style={{ width: '18rem', margin: '2rem' }}>
                    <img src='./assets/budget.png' className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">Budget App</h5>
                        <p className="card-text">In this App a compani ask for a budget aplication that can manage their amounts of money in dirent deparments as they wanto to.</p>
                        <a href="#" target='_blank' className="btn btn-primary">Visit</a>
                    </div>

                </div>
            </div>
            <hr style={{ marginTop: '3rem' }} />
            <h3 style={{ margin: '3rem 0 0 2rem',marginBottom:'4rem'}}><u>Things that I like the most in life:</u></h3>
            <div className='wraper'>
                <div className='track'>
                    <div className='logo'> <img src='./assets/asado1.JPG'
                     alt="" /></div>
                    <div className='logo'> <img src='./assets/asado2.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado3.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado4.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado5.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado6.JPG' alt="" />
                    </div>
                    
                    <div className='logo'> <img src='./assets/asado8.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado9.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado10.JPG' alt="" />
                    </div>
                    <div className='logo'> <img src='./assets/asado11.JPG' alt="" />
                    </div>
                </div>
                <h5 style={{ backgroundColor: 'rgba(250, 235, 215, 0.438)', padding: '4rem 1rem 4rem 1rem', fontSize: '1.4rem' }}>Besides from coding.
                    I also lived in Italy,Rome for 5 months in 2021 and one one the things that I learned there,that I love the thing of geting start the fire,season the meat, leting the meat cook at easy heat,with family and friends,this is one of the best hoobies that I have.</h5>
                
            </div>
            <hr style={{margin:'6rem 0 2rem 0'}}/>
            <div className='wraper' style={{margin:'4rem 0 0 0'}}>
                <div className='track'>
                    <div className='logo'> <img src='./assets/Coliseo,Rom.jpeg'
                        alt="" />
                        <div style={{marginLeft:'1rem', color:'antiquewhite'}} class="centrado">Coliseo,ROM</div>
                    </div>
                    <div className='logo'> <img src='./assets/Castello sant Angelo,Rom.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem',color: 'antiquewhite' }} class="centrado">Castello Sant Angelo,ROM</div>
                    </div>
                    <div className='logo'> <img src='./assets/Castello sant Angelo 2.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Castello Sant Angelo,ROM</div>
                    </div>
                    <div className='logo'> <img src='./assets/Savona,Ita.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Savona</div>
                    </div>
                    <div className='logo'> <img src='./assets/Roma,Ita.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Rome</div>
                    </div>
                    <div className='logo'> <img src='./assets/Bocca della Verita.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Rome</div>
                    </div>

                    <div className='logo'> <img src='./assets/Baticano,Rom.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Baticano</div>
                    </div>
                    <div className='logo'> <img src='./assets/Milan,Ita.jpeg' alt="" />
                        <div style={{ marginLeft: '1rem', color: 'antiquewhite' }} class="centrado">Milan</div>
                    </div>
                    
                </div>
                <h5 style={{ backgroundColor: 'rgba(250, 235, 215, 0.438)', padding: '4rem 1rem 4rem 1rem', fontSize: '1.4rem' }}>One of the most things that I like in life is to travel and know new places around the world,herre are some places that I had been.</h5>

            </div>

            <footer style={{ backgroundColor: 'rgba(250, 235, 215, 0.438)', padding: '2rem', borderRadius: '1rem',margin:'6rem 0 0 0',width:'40%' }}>
                <h3><u>Contact:</u></h3>
                <h5><i class="fa-solid fa-envelope"></i> <a href="https://mail.google.com/mail/u/0/#inbox" style={{ color: 'black', textDecoration:'none'}}>iantarquini4.gmail.com</a></h5>
                <h5><i class="fa-brands fa-github"></i> <a href="https://github.com/iantarquini15" style={{color:'black',textDecoration:'none'}}>iantarquini15</a></h5>
                <h5><i class="fa-brands fa-linkedin"> </i> <a href="https://www.linkedin.com/in/ian-tarquini-b83b72247/" style={{ color: 'black', textDecoration: 'none' }}>Ian Tarquini</a></h5>
            </footer>



            </div>
  )
}
