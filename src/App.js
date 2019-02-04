import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import profile from './assets/profile.jpg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='About'>          
          <h1 style={{fontWeight:'bold'}}>About Me</h1>
          
          <p> I am an inovative graduate student from the University of Toronto who is ambitious and keen to learning new concepts and techniques.
            I have a set of skills in full-stack and mobile application devlopment with Android and IOS.
          </p>
          <p>Some interesting Facts:</p>
          <ul>
            <li>I grew up playing basketball and video games, I competed in the Ontario Basketball league for 3 years and won a championship in the league in 2009.
              Currently, I enjoy playing games invovling strategy such as Magic the Gathering Arena, Hearthstone, and Chess.
            </li>
            <li>I spent five years learning TaeKwonDo achieving a 3rd degree Black belt and competed provincially in sparring and pattern technique.</li>
          </ul>
          <br/>
          
          <h3 style={{fontWeight:'bold'}}>Publications</h3>
          <p>Reyes, W. (2018). Sphere Packing. Retrieved from <a href='https://www.mathinactionjournal.com/sphere-packing'>https://www.mathinactionjournal.com/sphere-packing</a></p>

          <h3 style={{fontWeight:'bold'}}>Education</h3>
          <p> Honours Bachelor of Science - Double Major in Mathematics and Statistics, University of Toronto</p>

          <h2 style={{fontWeight:'bold'}}>Development</h2>
          <hr/>
          <p style={{fontSize: '15px'}}>* List of proficient skills with deeper focus in <b>bold</b></p>
          <p><b>Javascript</b>, Java, Python,  AngularJS, <b>ReactJS</b>, <b>Redux</b>, <b>React Native</b>, Ionic, Cordova, <b>Node.js</b>, <b>Jest</b>,
           Enzyme, <b>Firebase</b>, MongoDB, AWS, Bash, C, C#, SQL, MySQL, <b>GIT</b>, SVN, <b>HTML5</b>, <b>CSS</b>, LaTeX, MVC, <b>REST</b>,
            Bootstrap, R, SAS</p>

          <br/>
          <h3 style={{fontWeight:'bold'}}>Work Experience</h3>

          <br/>
          <h3 style={{fontWeight:'bold',}}>Proud Achievements</h3>
          <ul>
            <li>In my third year of university (Fall 2016 - Winter 2017) I switched to a Mathematics and Statistics double major and took 6 math courses and 1 stats course. The last grade I had in mathematics
              was a D, and my CGPA was a 1.95. By the end of the year I had achieved a final grade of 80+ in all my 7 courses, it was my first time ever getting an A in university
              and not only that 3 out of the 7 courses I finished with a 4.0 GPA. That year I had achieved an Annual GPA of 3.83.
            </li>
          
            <li>
              In 2015 I volunteered in the Toronto PanAm Games as a <b>Print Distributor</b> and got to watch top athletes compete in water polo, table tennis, 
              and badminton. I even got to meet some of the Gold medal winners.
            </li>
          </ul>

          <h3 style={{fontWeight:'bold'}}>Volunteer and Community Involvement</h3>
          <hr/>
          <p><b>Print Distribution Associate</b> - Toronto Pan American Games, Markham, Ontario - July 2015 to August 2015</p>
          <p><b>Assistant Coach</b> - Markham Unionville Minor Basketball Association (MUMBA), Markham, Ontario - September 2011 to April 2015</p>

        </div>

      </div>
    );
  }
}

export default App;
