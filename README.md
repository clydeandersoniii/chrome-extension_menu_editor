# Dynatrace Menu Editor
#### By Clyde Anderson, III ####  

Hi! This is my (unofficial) chrome extension to add some functionality to the Dynatrace environment.

## Dynatrace is already awesome. What could *you* add? ##
That's a great question, I'm glad you asked!
Recently, a new, richer hambuger menu was released - but any major UI change requires time to adapt and it's impossible to make everyone happy.

Here's the old menu:

![Dynatrace Old Menu](/screenshots/old_menu.png)

It's a good menu, but the list was getting a bit long, because Dynatrace continues to grow and evolve as any great company should.
That's where the new menu comes to help make things more logical and accessible.

Here's the new menu:

![Dynatrace New Menu](/screenshots/menu_default.png)

I won't go in-depth, but you can see how there are sections dedicated to solutions, topics, etc. with those old options grouped under each.
However, some people need to access specific items in different groups pretty regularly and toggling those open/closed all the time can be cumbersome where time is money.

Have no fear, Dynatrace thought of that too! There's a *Favorites* section at the top to handle just that. Users can click a little star icon (⭐) next to each item and
it'll be moved up to that *Favorites* section automatically.  So then, just leave that section expanded and you can always quickly find your preferred options.
And, of course, these preferences *persist*.  When a user adjusts their favorites or expand certain sections, that will appear that same way after they log off, close the browser,
and return again later.

## That's cool and all, but what does this extension do to help? ##

There's one area that users can further benefit from the menu. Currently, these settings only persist on a per-environment basis; if we were to configure our preferences and jump
to a new environment, everything would be completely different!  We *could* configure the same settings for every environment, so it matches, but any
preference changes requires updating every environment manually and the menu should be the last place we're looking to have to regularly configure changes - there's much bigger 
fish to fry.

So that's where this extension comes in: set your menu preferences once and you're good to go! Preferences will persist across different environments seamlessly.  All you need
to do is set them once in the extension, update as you need, and you'll never notice the difference between environments.

Let's take a look at the extension and how to leverage it.

Here's the UI:

![Extension UI](/screenshots/ui.png)

You can see we have a Favorites and Expanded tab - each handles the items that are favorited and groups expanded by default, respectively.

Update your preferences, click the convenient refresh button, and you will see your menu update accordingly.

![Dynatrace Extension Demo](/screenshots/demo.gif)

Here's the menu now after using the extension:

![Dynatrace Menu After Using the Extension](/screenshots/menu_post_demo.png)

Pretty convenient, huh?

And for those Dynatrace employees... we didn't forget about your invaluable Devops tools!
To see those, just hop to the extension settings and enable Devops.  Once you revisit the extension, you'll see the menu options and the devops group listed for inclusion.

Options:

![Extension Options](/screenshots/extension_options.png)

Enable devops:

![How to Enable Devops](/screenshots/enable_devops.png)

## And there you have it!
An over-engineered solution to a minor inconvenience. Enjoy!

\- Clyde Anderson, III
