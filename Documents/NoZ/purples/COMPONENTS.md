# ReUsable Components Documentation

You will find these components in the `components` folder.

# Folder Structure

```
.
├── Button
│   └── index.js
├── Card
│   └── Steps.js
├── Container.js
└── Navbar
├── index.js
└── navbar.module.css
```

## Components

### Button

This is a resuable component for the buttons we use

#### Usage

```js
import { Button } from "../components/Button";

<Button type="primary">Get Started</Button>;
```

There are 4 types of buttons:

#### primary

<!-- add image of primary button> -->

#### secondary

<!-- add image of secondary button> -->

#### ternary

<!-- add image of ternary button> -->

#### neutral

<!-- add image of neutral button> -->

## Cards

This is a resuable component for any card related compoenent we use

there are 2 types of cards:

#### Steps Card

This is used in the landing page to show the steps to avail our services

#### Usage

```js
import { StepsCard } from "../components/Card/Steps";

<StepsCard
  step={1}
  title="Take the Quiz"
  description="Our expert team is dedicated to guiding you through the world of medicinal cannabis."
  image="https://via.placeholder.com/556x370"
/>;
```

<!-- insert image of steps card -->

#### Profile Card

This is used in the landing page to show Experience of the doctors

```js
import { ProfileCard } from "../components/Card/Profile";

<ProfileCard
  name="Jenny Williams"
  speciality="herbologist"
  experiance={7}
  rating={5}
  image={"https://via.placeholder.com/556x370"}
/>;
```

<!-- insert image of Profile card -->

#### Profile Card

This is used in the landing page to show customer testimonials

```js
import { CustomerReviewCard } from "../components/Card/CustomerReview";

<CustomerReviewCard head="Jenny Williams" body="herbologist" name={7} />;
```

<!-- insert image of Review Card -->
