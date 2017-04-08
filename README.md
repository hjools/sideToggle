# sideToggle

This is a small jQuery plugin that toggles elements sideways, rather than the up-and-down default of jQuery's toggle. There are three versions available for use; one of them uses an extra Javascript library called Velocity.js that offers a performance gain over jQuery's .animate(), but it likely won't be necessary for small use. You can view an example [HERE](http://hjools.github.io/sideToggle/).



## Installation

Download your preferred version of the sidetoggle.js above, and host it. Place it in the page header of your board wrappers. 



## Configuration

Place this script in your board's wrappers, preferably at the bottom. Replace the specified values below with ones that correspond to your page.  

```javascript
<script type="text/javascript">
$(document).ready(function(){
  $('switch').sideToggle({
    moving: 'null',
    direction: 'null'
  });
});
</script>
```

| Property  | Description |
| --------- | ----------- |
| switch    | This refers to whichever element you're clicking on to trigger the toggle.  |
| moving    | This refers to the element that will be toggled. Replace the `null` with the class / id name of the element.  |
| direction | This refers to the side from which the toggle will be activated. Replace the `null` with the class / id name of the element. Possible values are `left` and `right`. If they have not been initialized in the css, i.e. `left: -200px`, the script will not run correctly. |
