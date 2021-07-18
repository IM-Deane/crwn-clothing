# CRWN Clothing

TODO:

- Project Image

Live Demo:
[https://crwn-clothing-im-deane.herokuapp.com](https://crwn-clothing-im-deane.herokuapp.com/)

**Current Version:** 0.1.10

## Description:

**Overview:**

E-commerce site created while learning advanced React concepts.

Although this app was created while following a
[Udemy tutorial](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/),
I still plan to document what we are learning.

**Stack:**

- React (Class-based components)
- Redux
- SASS
- Firebase
- Stripe API (for payments)

### Outcome:

**Beginner Version:**

Although I've created larger React projects before, I haven't done so using
class-based components.

To really learn React, I believe it is crucial to understand this aspect even
though i'll likely use React hooks in the future.

~~Therefore, besides brushing up on core concepts, the main goal of this project
is to build a large-scale react app with class-based components.~~

After successfully deploying the site to Heroku, i've completed the beginner
version of the course.

At this point, I've learned how to create a fully functional E-commerce store.

During this process, i've been exposed to concepts such as:

- React class-based components
- High-Order-Components
- state-management using Redux
- SASS for styling
- Firebase for authentication
- Stripe API for processing credit card payments.

This half of the course was a great way to solidify my understanding of React.
However, I plan to continue on with the second half of the course which teaches
more advanced concepts.

**Advanced Version:**

After deploying the current version to Heroku, I'm now undertaking the advanced
version of the course.

**Stack:**

- React (with Hooks)
- Redux, Async Redux & Redux-Saga
- Styled-Components
- Firebase
- Stripe API (for payments)

**In this next stage, I'll be learning about:**

- CSS in JS using the styled-components library
- Firebase (adding the store's products to Firebase)
- HOC Patterns
- Adv. Redux incl. Async Redux & Redux-Saga
- The Container Pattern
- React Hooks
- React Context API
- GraphQL & Apollo
- React performance upgrades (Code Splitting, React Lazy, etc)

## Version History:

**Version 0.1.10:**

Converted several more component stylesheets into styled components.

**Version 0.1.9:**

Refactored several component style sheets into styled-components.

Also added media queries to make the site more responsive on smaller devices.

That being said, I would say this application still looks its best on devices
with widths of 800px and up.

**Version 0.1.8:**

Implemented a backend server using Express.js.

The server was needed to handle the stripe payment requests from the client.

To keep the frontend and backend files separate, the client files were moved to
their own directory.

**Version 0.1.7:**

Refactored the app to utilize the useState and useEffect hooks in several
components.

The use of React hooks enabled us to convert the components from class-based to
functional ones.

This is because Hooks allow developers to write functional components which have
access to state and lifecycle methods.

**Version 0.1.6:**

Fixed the bug that was impact the sign out process.

It turns out there were two typos that were impact the app.

The first one I identified was in the root-reducer file. Here, I had misspelled
the whitelist property as "whiteList".

This bug told the app to persist the entire store in local storage. Which meant
that the user state was always being drawn from there.

The second bug was found in the user.types file. Here, I had added an extra C in
SIGN_OUT_SUCCESS.

Because I simply copied this into the action file as well, it would appear that
the sign out was successful even though it wasn't.

This was tricky bug that was very frustrating to solve.

If it wasn't for redux-logger, I may not have found the issue.

**Version 0.1.5:**

Refactored the application to utilize the Redux-saga library.

This was a pretty advanced section of the course that I will definitely need to
revist in the future. It was however, an interesting pattern to learn.

I think it is a pretty powerful library when you need exact control over your
state side effects.

Learning about the ES6 generator functions that redux-sagas are built upon was
also helpful.

**Note:**

I'm currently trying to trackdown a bug with the sign-in/sign-out button in the
app header.

When a user sign's in with an existing account, or sign's up with a new one, the
app works as expected.

However, when the user tries to sign out, nothing seems to happen.

After consulting redux-logger, it appears that the signout action is firing
normally. However, the user state is not being cleared if the action is
successful.

I will begin debugging the app tomorrow when I have more time.

**Version 0.1.4:**

Refactored the shop.component to utilize the promise-based data fetching
pattern.

Previously, we were using the observer/observable pattern. Although both of
these methods work, the course wanted to highlight that there are other ways to
get data from Firebase.

An interesting difference between these two patterns is that the observer
pattern will update our shop page whenever new items are added to the database.
This is because the observer is always watching for new events during the
lifecycle of the component.

In contrast, the promise pattern will only update the data when the component
re-renders.

This tradeoff is something to keep in mind for future applications.

**Version 0.1.3:**

Refactored the shop.data.js into a collection on Firebase. This allows us (or
another team member) to easily update the store's products from the Firestore.

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
