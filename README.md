# Project: CRWN Clothing

TODO:

- Link to live version
- Project Image

**Current Version:** 0.1.3

## Description:

**Overview:**

E-commerce site created while learning advanced React concepts.

Although this app was created while following a
[Udemy tutorial](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/),
I still plan to document what we are learning.

**Outcome:**

### Beginner Version:

Although I've created larger React projects before, I have not done so using
class-based components.

To really learn React, I believe it is crucial to understand this aspect even
though i'll likely use hooks.

~~Therefore, besides brushing up on core concepts, the main goal of this project
is to build a large-scale react app with class-based components.~~

After deploying the application to Heroku, i've completed to beginner version of
the course.

At this point, I've learned how to create a fully functional E-commerce store.

During this process, i've been exposed to concepts such as:

- React class-based components
- High-Order-Components
- state-management using Redux
- SASS for styling
- Firebase for authentication
- Stripe API for processing credit card payments.

**Beginner Stack:**

- React (Class-base components)
- Redux
- SASS
- Firebase
- Stripe API (for payments)

### Advanced Version:

After deploying the current version to Heroku, I'm now undertaking the advanced
version of the course.

**In this next stage, I'll be learning about:**

- CSS in JS using the styled-components library
- Advanced Redux & Firebase (adding the store's products to Firebase)
- HOC Patterns
- Async Redux
- The Container Pattern
- Redux-Saga
- React Hooks
- React Context API
- GraphQL & Apollo
- React performance upgrades (Code Splitting, React Lazy, etc)

**Adv. Stack:**

- React (with Hooks)
- Redux, Async Redux & Redux-Saga
- Styled-Components
- Firebase
- Stripe API (for payments)

## Version History:

**Version 0.1.3:** Refactored the shop.data.js into a collection on Firebase.
This allows us (or another team member) to easily update the store's products
from the Firestore.

Also implemented a loading state spinner that is utilized while the application
is fetching data from the database.

**Version 0.1.2:**

Learned about styled-components and began refactoring previous style sheets to
this new methodology.

**Version 0.1.1:**

Pushed current version of site to heroku. It can be found
[here](https://crwn-clothing-im-deane.herokuapp.com/).

This version of the site is fully functional and demonstrates that I have a
fundamental understanding of React.js.

After some optimization, the next versions of the site will utilize more
advanced concepts.

**Version 0.1.0:**

Implemented stripe payments to our checkout page. When the user decides to
checkout, the page utilizes the stripe api to proceed with a mock payment.

A test credit card is provided at the bottom of the page.

Added a custom favicon and title to index.html. The app now looks and feels like
a true online store.

**Version 0.0.20:**

Moved directory and shop data into its own reducer.

Then created the respective selectors and updated corresponding components with
new redux flow for directory shop.

**Version 0.0.19:**

Implemented the redux-persist library. This package utilizes the browsers
local/session storage to persist aspects of the redux store.

Using this package, we've now saved the cart items to the browsers memory. This
enables us to store the selected items between browser refreshes and even if the
user closes the browser window.

**Version 0.0.18:**

Implemented addItem and removeItem functionality to checkout-item component.

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
