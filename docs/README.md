---
icon: question
---

# FAQ

Here are some answers to some common eesel AI questions. Not finding your question here? Reach out via the in-app support channel to ask us directly.

<details>

<summary>I hit my interaction usage limit. What do I do?</summary>

If you've hit your interaction usage limit, please review your average usage for the month across all of your bots and reach out to support to let them know what kind of usage you will need moving forward.&#x20;

We'll be able to provide you with a quote and apply the usage changes to your account from there.

</details>

<details>

<summary>What exactly counts as an interaction? </summary>

Interactions are individual actions that our AI bot takes, such as replying to a query, tagging a ticket, escalating, or routing. One ticket can have multiple interactions. If the AI replies several times in one ticket, it is counted as multiple interactions.

</details>

<details>

<summary>How do I change the name of the Default Bot or another Bot?</summary>

The Administrator of the account will need to be the one who changes the name for Bots. With the administrator role, you can then:

1. Head to Settings > Bots
2. Click on the Bot you want to rename
3. Type out the new name of the bot in the name field
4. You're all set!

</details>

<details>

<summary>Can we get an extension on trial? How long will the trial last?</summary>

When you're successfully signed up for the eesel dashboard, you will get 7 days of trial as a business plan so you can explore the eesel product. After that time, the trial will automatically pause if you want to extend it further you can login again to your account and click "extend trial" and you will receive a further 7 days.

\
**Note:** You can't extend the trial after 14 days.&#x20;

</details>

<details>

<summary>Why did the crawl get stuck?</summary>

Crawling issues usually come down to one of these reasons:

* The URL is private, so our crawler can’t access it.
* The link contains a large number of pages or heavy content, which can take longer to crawl. You can either wait for it to finish or try re-adding the links by refreshing the page.
* The sitemap hasn’t been picked up properly.
* The URL is for a help center or other platform and should be used by our help center crawler instead (see: integrations)

If you are facing these issues, you can try a few ways by using our [Browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en) to add specific pages by open the AI Copilot sidebar when you open the specific page and click "add page" (This way will work for private/authenticated sites as well). Re-add the sitemap directly to the crawler.

</details>

<details>

<summary>How do I correct the bot's responses?</summary>

To provide specific instructions to correct your AI bot's responses, you can use our edit button. To do so:

1. Ask the AI a question in the "chat" tab of the dashboard.
2. Click the "edit" button at the bottom of the response you'd like to correct.
3. This will open up a new chat interface where you can have a conversation with the bot about what to change in its response.
4. You should explain to the bot what parts were bad, and what it should have said instead.&#x20;
5. The bot will revise its response, and confirm whether you are happy with it.
6. Make sure you confirm you'd like that to be the updated way it response to similar queries.
7. The bot will update its Articles to incorporate this new training, and future responses will use this knowledge.

</details>

<details>

<summary>What are Articles? How do I use them?</summary>

Articles are a quick, simple way of adding straightforward knowledge to your bot. They will be used as a source of information to answer questions. You can draft articles, edit them, and set them live to be used to answer queries.

Articles are also what is generated when you have used the [past ticket training](./#what-is-the-process-of-training-on-past-tickets-issues) feature, and the [corrections ](./#how-do-i-correct-the-bots-responses)feature when you edit the AI's response.&#x20;

#### How to create, edit, and use Articles

1. To create an Article, simply head to the Article tab and click "New Article".
2. Ensure it contains a straight forward and clear title&#x20;
3. Write out any content that you'd like the bot to know in plain text
4. Click "Add article" to create the Draft.
5. Select any articles you want to go live with, and hit "Set status to live" to enable the bot to use the Articles in its responses.

At any point in time you can had back to the Articles tab, set the Articles back to draft or edit them live to ensure the bot has the most up to date information.

</details>

<details>

<summary>How do I train on past tickets/issues?</summary>

#### What is past ticket training?

Training your AI bot with past tickets allows eesel to pull selected tickets from your helpdesk and convert them into help articles. You can specify which tickets using a query for ticket parameters like a date range, closed, which agent handled them, specific tags, and more.

The AI processes the selected tickets, and then articles are created based on them. These articles are then used to improve your bot's accuracy and provide more relevant, context-aware responses.&#x20;

The articles will not be adding live instantly, nor are they added to your public help center. The articles will only appear inside the eesel dashboard for the bot to use. You can find them on the "Articles" tab on the left sidebar.&#x20;

Once the ticket training is completed, you can:&#x20;

* Review the articles that were generated
* Edit or remove any that don't suit what you want the bot to know
* Set them live for the bot to use for its resposnes

#### Who can use past ticket training?

Past ticket training is available for certain helpdesks users, who are also:

* Trial users (with limited usage, and only for some helpdesks)
* Business Plan customers
* Custom Plan customers

The following helpdesks have trial versions available for testing:&#x20;

* Zendesk
* Gorgias
* Freshdesk
* Jira

For other helpdesk inquiries, we may be able to conduct past ticket training upon request. Please reach out to hi@eesel.app with the helpdesk you'd like to run the past ticket training for and we can review your request.

#### How do I use past ticket training?

In order to complete past ticket training you must have the following:&#x20;

* Your helpdesk domain added to the bot you want to train&#x20;
* A query or set of parameters you want to use as a filter for the tickets
* A trial account or paid account with eesel AI

Once you've completed the above, you can then head to the Integrations on the sidebar, select your helpdesk and select "sources" or "tickets".&#x20;

From there, simply:

1. Input the query of your choice
2. Preview the tickets to ensure you are capturing the ones you'd like to process
3. Select process, and wait for the training to be completed (Usually 10-20 minutes, depending on the volume)
4. Once completed, review the "Articles" tab and review all the newly drafted articles.
5. Edit, remove or set live each article that you'd like.
6. Test your bot!

When you use our past ticket training feature, the output from this training is in the form of [Articles](./#what-are-articles-how-do-i-use-them).&#x20;

Once you've finished running the past ticket training, you will see a set of Articles with the AI symbol to demonstrate that they've been generated by AI.&#x20;

It's best practice to quickly review the generated Articles before going live with them, so you can edit or delete any that may not contain knowledge you want the bot to know.

</details>

<details>

<summary>How do I get in touch with support?</summary>

If you've reviewed our help center and are still unable to find an answer to your question, then please reach out. To get in touch with support, please:

1. Head to your dashboard
2. Click Help and Support in the bottom left.
3. Click "Chat with us".&#x20;

</details>

<details>

<summary>What are the eesel support hours?</summary>

The eesel AI team usually operates between 9AM-5PM AEST as we're primarily based in Australia.&#x20;

However, some of our team will be online after 5PM on some days to help accommodate other time zones.&#x20;

We'll do our best to ensure we get to your questions as soon as we can!

</details>

<details>

<summary>What kind of support will I get for configuring our setup?</summary>

Each customer of ours will be able to get setup support for default integrations without extra cost. However, for more complex prompt engineering and actions, we do have limited availability.&#x20;

We can offer an Engineering Consultation Add-On for prompt engineering support and complex configuration. For more details about this, check out our [pricing page](https://www.eesel.ai/pricing) or [pricing help page](pricing-admin-and-more/pricing.md).

</details>
