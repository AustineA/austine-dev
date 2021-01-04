---
slug: blog-three
title: Authenticating your Rails app.
description: Vestibulum id ligula porta felis euismod semper.
date: 30 December 2020
image: https://picsum.photos/389/240
---

# Consuming Rails API in Next.js

Step two

```js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.

Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

```rb
def assign_plan(event_body)
    plan = event_body[:data][:plan][:plan_code]

    case plan
    when $ONE_MONTH
      price = 950 * 100
      duration = 1
      subscribe event_body, price, duration
    when $SIX_MONTHS
      price = 900 * 6 * 100
      duration = 6
      subscribe event_body, price, duration
    when $TWELVE_MONTHS
      price = 855 * 12 * 100
      duration = 12
      subscribe event_body, price, duration
    else
      puts "Unknown plan"
      render status: :ok
    end
  end
```

Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
