Udip Patel, 1317621, CS4WW3

BOTH add-on tasks attempted.

Part d of Add on Task 2:

i)
In this project, the picture element was used to display the logo of the website at different resolutions.
The page is able to switch between different versions of the logo due to the following HTML (found in the navigation menu of all pages):

    <picture>
      <source srcset='media/logo-2x.png 2x, media/logo.png 1x' />
      <img src='media/logo.png' alt='logo' class='logo cursor-pointer' />
    </picture>

By default, the image referenced by the 'src' attribute of the <img> element will be displayed (logo.png).
However, the source element also informs the browser that the file logo-2x.png should be used when displaying to a device with a 2x higher resolution.

 The source element can also be manipulated by using an attribute called 'media'.
 This was done for part b) of this task by showing different images based on the user's device (or viewport)

 ii)
 The picture and source elements can be used for efficiently switching images to accommodate for devices with high DPI displays.
 The elements can also be used to define rules to display completely different sets of images depending on the size of the screen,
 giving the developer greater control over the DOM without having to rely on Javascript
 The elements can be used to load alternative image file types (ex. webP) which can serve to speed up the performance of the website.

iii)
The feature of selecting images to fit the resolution capacities of devices is already offered by an <img> attribute called srcset.
It is used in the same way that <source>'s srcset is used in the code snippet from (i).

    (SHOWN AGAIN)
    <picture>
      <source srcset='media/logo-2x.png 2x, media/logo.png 1x' />
      <img src='media/logo.png' alt='logo' class='logo cursor-pointer' />
    </picture>

In this case, it would have been easier to just move the srcset attribute from the source element into the img element,
and there would have been no need for the picture or source elements.
