import React, { Component } from 'react';
import { DataTable, TableHeader } from 'react-mdl';
import {Jumbotron, Button, Container} from 'reactstrap';
import pushup from '../images/puss.gif'
import dumbbell from '../images/dumb.gif'
import tricep from '../images/tricep.gif'
import stepup from '../images/stepups.gif'
import squat from '../images/squat.gif'
import lunges from '../images/lunges.jpg'
import deadlift from '../images/singlelift.gif'
import superman from '../images/superman.jpg'
import glute from '../images/glute.gif'
import legs from '../images/leg.gif'





class Running extends Component {
  render () {
   return (


  <div class="jumbotron jumbotron-cover-image">
    <div class="container">
        <h1>Hello, world!</h1>


    <div className="running-text">
    <h2>dfghj  </h2>
    <p>We get it: You like to run, not spend hours in a gym. But strength training, especially if you’re just getting into running regularly, will help you run your best and build up miles without the risk of injury.
    These exercises for beginners use your own body weight to build strong, powerful, and injury-resistant muscles to power up hills, sprint across the finish, and maintain good running form mile after mile. Best part:
    These exercises for beginners require no equipment, so you can do them anytime, anywhere. And yes, bodyweight exercises can help you build muscle.
    How to use this list: Perform each exercise below for the specified number of reps.</p>

    <h4> How to do these exercises:</h4>

    <div className="running-text-1">
    <p>Benefits: Strengthens the chest, shoulders and arms to improve posture and arm drive while running.</p>
<p>●  Lay face down with your hands on the floor either side of your chest. Your toes should be tucked under.</p>
<p>●	Press down into your hands, raising your body off the floor. Keep your body straight and avoid stretching your neck.</p>
<p>●	When your arms are almost fully extended (don’t lock your elbows), lower your body back down, almost to the floor, and repeat.</p>

<div className="push-ups">
<img src={pushup}  alt="push ups" />



<div className="dumbell-row-text">
<p>Benefits: Strengthens the upper back to balance out chest strength.</p>
<p>●	Place your left knee and hand on a bench. Your upper body should be horizontal.</p>
<p>●	Take a dumbbell in your right hand, arm extended towards the floor.</p>
<p>●	Pull the weight up towards you, keeping your elbow close to your waist, then lower to the start position.</p>

<div className="dumbbell-row">
<img src={dumbbell}  alt="dumbbell roll" />




<div className="step-ups-text">
<p>Benefits: Works all major muscle groups in the legs, improving running power.</p>
<p>●	Stand in front of a bench or box (ensure it’s strong enough to hold your weight).</p>
<p>●	Place one foot onto the bench and push off your rear leg to step up, keeping your body tall and your knee over your ankle on your supporting leg.</p>
<p>   Think about bringing your hips forwards and up rather than pulling forwards with your knees.</p>
<p>●	Bring your trail leg up to a high knee position without it touching the bench. Then lower it back down to the floor.</p>
<p>●  To increase difficulty, hold dumbbells in each hand.</p>

<div className="stepup">
<img src={stepup}  alt="stepup roll" />

<div className="squat-text">
<p>Benefits: Strengthens the major muscle groups used when running decreasing injury risk. Also improves flexibility for a faster, more efficient running stride.</p>
<p>●	Stand with your feet a little wider than hip-width apart, toes pointing slightly outwards.</p>
<p>●	Lower yourself down, bending at the knee and hip, as though you’re sitting down on a chair.</p>
<p>●	Keep your knees over your ankles and your chest up. Focus on your bum going back.</p>
<p>●	Lower down close to a sitting position, then push up through your heels and return to standing.</p>
<p>● To increase difficulty, hold a kettlebell at chest height while performing the movement, or rest a barbell across your upper back.</p>

<div className="squat">
<img src={squat}  alt="squat" />



<div className="deadlift-text">
<p>●	Stand tall with a dumbbell or kettlebell in your right hand.</p>
<p>●	Take your left foot off the floor and extend your left leg behind you.</p>
<p>Bend forward at the hip, keeping your back straight and your right arm extended towards the floor.</p>
<p>●	Keep a slight bend in your right knee, and keep your hips level.</p>
<p>●	Bring the weight almost to the floor and your back as close to horizontal as you can, before returning to the start position and repeating on the other side.</p>

<div className="deadlift">
<img src={deadlift}  alt="deadlift" />


<div className="glute-text">
<p>Benefits: Targets the glutes for improved activation when you run.</p>
<p>This will help you to keep your pelvis level and your legs, pelvis and torso aligned when you run, boosting your stability and therefore your running efficiency.</p>
<p>●	Lay on your back with your arms by your sides and your feet flat on the floor.</p>
<p>●	Raise your hips towards the sky to create a straight line between your knees, hips and shoulders.</p>
<p>●	Keep your shoulders on the floor to protect your neck.</p>
<p>●	Hold the position for two seconds before lowering slowly back down and repeating.</p>
<p>●	To make this more challenging, hold your arms outstretched above you.</p>

<div className="glute">
<img src={glute} alt="glutes" />

<div className="legs-text">
<p>Benefits: Strengthens your hip flexors which are responsible for knee lift when you run. Also works the lower abdominals for a more stable torso.</p>
<p>●	Lay on your back with your arms by your sides.</p>
<p>●	Bring your feet together and raise them up as close to vertical as feels comfortable.</p>
<p>●	Lower them slowly back to an inch above the floor and repeat.</p>
<p>● To make easier, perform the exercise using one leg at a time.</p>

<div className="legs">
<img src={legs} alt="legs" />

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>












    // </div>







      )
    }
  }








export default Running;
