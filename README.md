# Project: Crwn Clothing

TODO:

- Link to live version
- Project Image

**Current Version:** 0.0.17

## Description:

**Overview:**

E-commerce site created while learning advanced React concepts.

Although this app was created while following a
[Udemy tutorial](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/),
I still plan to document what we are learning.

**Outcome:**

Although I've created larger React projects before, I have not done so using
class-based components.

To really learn React, I believe it is crucial to understand this aspect even
though i'll likely use hooks.

Therefore, besides brushing up on core concepts, the main goal of this project
is to build a large-scale react app with class-based components.

### Stack:

- React
- Redux
- SASS
- Firebase
- Stripe API (for payments)

## Version History:

**Version 0.0.17:**

Added checkout page, checkout item component, and updated cart to use selectors
from reselect.

**Version 0.0.16:**

Implemented cart item selectors by utilizing the reselect library.

This enables the memoization of for the cart item values.

**Version 0.0.15:**

Implemented cart item components & reducer. These will render the selected items
inside the cart dropdown menu.

The items picture will be displayed as well as the current quanity as well as
the price of each item.

**Version 0.0.14:**

Updated shop data with new data.

Updated car utils to group items in cart reducer.

**Version 0.0.13:**

Added cart icon and cart dropdown components.

The cart icon is located in the header of the site.

The dropdown is trigger once a user clicks on the cart icon.

The clicking of the cart icon is an action which is dispatched to a cart
reducer.

The reducer enables us to control the display state of the dropdown menu.

**Version 0.0.12:**

Added a redirect feature that is triggered when users who're signed in land on
the "/signin" route.

**Version 0.0.11:**

Added Redux config and implemented user reducer and user actions to header and
app components.

**Version 0.0.10:**

Implemented sign in feature using email and password.

**Version 0.0.9:**

Added Firebase utils, included ability to store authenticated users into our
Firestore database.

Also created a sign up form that enables users to create an account using an
email and password.

**Version 0.0.8:**

Implemented Google Firebase Authentication. This allows the user to sign in and
out using their Google Account.

Also added sign in and out button to the header of the site.

**Version 0.0.7:**

Added the sign in form that utilzies custom form inputs and a custom button.

These components are reuseable and provide a more flexible and streamlined way
to construct the forms.

**Version 0.0.6:**

Implemented header component to the site. The app now has true routing.

**Version 0.0.5:**

Added a shop page that a user can navigate to.

Once they land on this page, the user is presented with various collections that
the store has for sale.

To implement this, besides the main shop page, we added a collection preview
component which displayed the first four items in the collection.

We also added an individual collection item component which holds the styling
and data for each product.

**Version 0.0.4:**

Implemented basic routing using react-router-dom.

Since we're not using hooks yet, i've learned how to utilzie the withRouter()
component.

This HOC allows us to access the history, location, and match props without
using prop drilling.

**Version 0.0.3:**

Added additional styling to menu items

**Version 0.0.2:**

Refactored Homepage component into several separate components.

This allows each component to focus on its own job.

Also added styling to the section cards

**Version 0.0.1:**

Added the basic site boilerplate and created the homepage layout of the website.
