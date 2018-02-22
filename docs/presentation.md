
'We're blind to our blindness. We have very little idea of how little we know. We're not designed to' 
In other words, we are defined by what we don’t know more than what we know. 
My main goal for today is not for you to be able to walk out of this room and perform from memory everything that I am about to demonstrate, only to name what you you can potentially do in the future as you dive in deeper.

# 3D Vector Geometry

Did you know that you can measure all of space using your hands?
Make a finger pistol with your right hand, aim it to the sky, and shoot your middle finger out 90°. Your thumb is the X axis, your pointer finger is Y, and your middle finger is Z. 

Why your right hand and not your left and does it matter at all? Hold that thought for a second.

Here’s a dot. All alone in the world. No one to connect with. A maudlin blip in space.
Here comes another dot. Boop. 
  “Hey there Soe. Oh hey Susan. I’m going to throw a telephone line over to you so we can chat about boys. Do it!”
Throws the telephone line to the left. (Draw vector in -x)
Word gets out and Wendy wants in. Now that Soe has the telephone line, she throws it to Wendy. 
  Boom. Now they’re all trading stroopwaffle recipes. 
Now wendy and susan’s mom are close, so Wendy throws the line to Momma Susan. 
Momma, now looking to reconnect with her estranged daughter, throws the line back to Susan, and the cycle is complete. 

Now why didn’t Susan just talk to her mom in the first place? 

She could’ve if she was left handed, but Susan is right handed. 

Takeaways 
- Vertices can exist independent from one another
- Only when a vector connects one to the other does an edge form.
- When four vectors link four vertices, a polygon emerges.

## Handedness
### RHR vs LHR
Now why was it so important that the right hand is used to model 3D axes and not the left hand. In 2D, 

Lightwave uses the left hand rule
Zbrush, Maya, Modo, Cinema4D all use the right hand rule and it’s the standard.


## Triangles and Quads

Vector Cross Product and Elipse Minor Axis
Surface Normals and RHR







# ABS vs PLA

Use a raft and make sure build plate is level.
Follow settings in the file Evan has.
https://www.thingiverse.com/thing:269637
Print at Ultra quality if you have the time. 

Thing to test I guess
https://www.thingiverse.com/thing:875237

## PLA 
works with a wide variety of applications because of its easy of use. 
Less resistant to temperature changes in the environment
Great surface quality
Not great for products that will undergo a lot of use or be exposed to the elements
Can handle more weight before breaking
more forgiving with complex features. Can print up to 60° overhang
Prints bridges more reliably.

## ABS
Trickier to print with (more sensitive to temperature changes in the environment).
Need an enclosure and a heated build plate for better chances of success.
If it cools too rapidly, prints can crack along layer lines. 
More susceptible to warping and curving during print process.
Can handle more stress, temperature, and pressure than PLA. Better for wear and tear.
Will distort and bend before breaking
Can only print up to 45° vertical overhang.


# FLAT SHADING
Flat shading is not simply exposing the underlying geometry. It just looks bad. It’s not flat shading you love. It’s simple geometry that is not concealed or obscured by complex textures or maps.

IMG 1
Flat Shader but with Global Illumination / Ambient Occlusion / slight Depth of Field while using only a single light source to act as sunlight:
 
IMG 2
Straight flat render, no effects, but with multiple lights to act as fills, etc (otherwise it'd be pitch black inside the cave):


### Unity definition of GI
Global Illumination (GI) is a system that models how light is bounced off of surfaces onto other surfaces (indirect light) rather than being limited to just the light that hits a surface directly from a light source (direct light).
