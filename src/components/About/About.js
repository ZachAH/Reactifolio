import React from 'react';
import Content from '../Content.js';
import Hero from '../Hero/index';



function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                My name is Zach Howell I am currently enrolled in the UW Extended Campus Bootcamp. After i succesfully finish the course i will be a certified Full Stack Developer!!! I love music i curently play two instruments. The Drums and the Guitar. From what i have found coding is a lot like that learning new langauges every week is definatley tough but a lot like learning new songs or techniques on musical instruments. I will continue to increase my knowledge of programming langauges far beyond the course,(and definately get better at react 😜).
            </Content>
        </div>
    );
}





export default AboutPage;