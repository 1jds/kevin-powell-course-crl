# My Code and Notes for Kevin Powell's Course 'Conquering Responsive Layouts'

## Em vs. Rem

- `ems` compound. So, if the `root` font size is 16px and then a `footer` element is set to `font-size: 2em` and then a `div` within that `footer` is set to `font-size: 2rem` then the font-size within that nested `div` will be 16 x 2 x 2 = 64 pixels.
- `em` is relative to the `font-size` of the parent (or more distant relative, if not `font-size` is specified, and ultimately to the `root`).
- `rem` is always relative to the `root` ('root element').
- If font sizes and other sizes are in `rems`, then we can just change the `font-size` in a media query to shrink everything at different screen sizes.
- Setting paddings for buttons (for e.g.) in `ems` makes sense, because then if we make a smaller or larger button by changing the font-size, the padding will scale along with that font-size change - as opposed to if we set the padding in `rems`, then the padding would remain the same, even if the font-size shrunk or grew. So, this allows for responsive buttons.
- Paddings and margins and things could be set using `ems`, so that they become more responsive, because they will change relative to the `font-size` that is set on their element. So, when `ems` are used for font-sizes, they refer to and compound the font-size one-level up, but when they are set on things like padding, they refer to the font-size of their own element.

## Final Project

The code for this can be found in the directory 'final-challenge'. Below are screen-shots for the three screen sizes targeted: viz. mobile (at 320px), tablet (at about 800px), and desktop (from 1000px up).

### Interest Points

- Mobile-first design
- Documented code using in-line comments, such as:

  ```css
  /* 
  ===============
  Global Styles
  =============== 
  */

  h1,
  h2,
  h3 {
    font-family: "Oswald", sans-serif;
  }

  ...;
  ```

- One technique among other possibilities for dealing with collapsing margins:
  ```css
  /* This is a variation of Kevin Powell's '.flow > * + *' business.
  It is to handle collapsing margins on text elements. */
  .flow > *:first-child {
    margin-top: 0;
  }
  .flow > *:last-child {
    margin-bottom: 0;
  }
  ```
- Use of modern CSS, such as pseudo-selectors, or `clamp()` for responsive typography

  ```css
  /* 
  ===============
  Utility Classes
  =============== 
  */

  .btn {
    all: unset;
    background: #a59678;
    border-radius: 100px;
    padding: 0.25em 1.5em;
    color: #fff;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    text-align: center;
  }

  .btn:is(:hover, :focus, :focus-visible) {
    opacity: 0.75;
    cursor: pointer;
  }

  ... .hero-title {
    margin: 0;
    font-size: clamp(2.25rem, 1.0227rem + 6.1364vw, 5.625rem);
    line-height: clamp(3.25rem, 2.5909rem + 4.5455vw, 6rem);
  }

  ... @media (min-width: 1000px) {
    ... body > *:not(:first-child) .container {
      padding: 5rem 0;
    }
  }
  ```

- Flex-box only design. This was the challenge - to use only flexbox for the layout. A positive to this is that changing the `flex-direction` at one break-point in a media-query was almost all I needed to do to make the elements responsive (not doubt due to the simplicity of the layout). However, `grid` could also have been used for this layout. I have used grid extensively elsewhere.

<img src="./final-challenge/Desktop-screen-width.png">

<img src="./final-challenge/Tablet-screen-width.png">

<img src="./final-challenge/Mobile-screen-width.png">
