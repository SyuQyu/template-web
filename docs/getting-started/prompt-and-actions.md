---
icon: square-terminal
---

# Prompt and actions

## What is the prompt?

For each bot, there is a Customization section on the sidebar of your dashboard.

Once there, you will see a text box for your to craft a prompt for your bot. This prompt will be used for this specific bot across all Destinations you’ve assigned it to.

You can use this customization box to provide instructions on things like:

* Tone
  * Describe what kind of bot it is. “You are a bubbly and kind bot working for Acme.”
* Instructions
  * Provide simple instructions about what to do in certain scenarios. “If you can’t help, inform them you’re unable to answer and suggest they contact [support@acme.com](mailto:support@acme.com)”
* Parameters and rules
  * Don’t answer in any other language unless specifically requested to.
  * Always use a relevant emoji at the start and end of your message.

The prompt has a very long context window, so you can be as specific as you like. You can create conditional scenarios, add in simple FAQs that the bot should know about, and explain how to handle different types of tickets.

The following prompt ideas are helpful for lots of different types of AI bots. For more specific examples, or prompts that work for specific integrations, see our [integrations page](broken-reference).

### Suggested Prompts

<details>

<summary><strong>Business Hours</strong></summary>

The bot is aware of the time in UTC time zone. You can use the prompt to explain to the bot what your business's hours are, and what it should do if it's within or outside of those hours.&#x20;

Make sure you add the **"think" action** through the 'create new action' button, and then mention the "think" action in the prompt.&#x20;

You also need to include your time zone based around UTC.

An example prompt might be:\
\
`"Business hours context to ALWAYS follow: our business operates on Monday - Friday. The time zone we operate in is UTC-4. Always use the think tool to think about the current time and our business hours before making a decision on whether its in business hours."`

</details>

<details>

<summary><strong>Clarifying Questions</strong></summary>

Your bot is able to ask clarifying questions that enable the AI to ensure it's addressing the right questions with the right information.&#x20;

An easy way to use the prompt to ensure it is asking clarifying questions is to include something like:&#x20;

"If a user asks a question, always ensure you clarify with them what product they are referring to (if they haven't already specified)."

Or, you can add in more specific guidelines for clarifying questions:&#x20;

`"At the start of every conversation, always ask the user to provide the following:`&#x20;

* `Email address`
* `Product name`
* `A summary of their issue`

`Once this has been provided, then you can assist with their query."`

</details>

<details>

<summary><strong>Language</strong></summary>

By default, eesel AI has access to 80+ languages and is able to respond and understand all of these languages.&#x20;

Using the prompt, you can tell the bot to either:&#x20;

`"Always respond in the language of the user."`

Or

`"Only ever respond in English".`&#x20;

If you'd like to provide a translation of the messages, like as an internal note or to the user, you can then specify that the bot should answer the query, and also provide a translated version etc.

</details>

<details>

<summary><strong>What to do when the AI doesn't know the answer</strong></summary>

Having guardrails for when the bot doesn't know the answer is always recommended to include. Depending on how you want the AI to handle things in this instance, there are a few options:&#x20;

* Ask clarifying questions (see above) to ensure the AI understands what is being asked
* Let the user know that it's unable to answer their query and they should contact another support channel
* Let the user know that it's unable to answer their query, and that they will escalate them to an agent to handle
* Let the user know that it's unable to answer their query, and if they would like to create a support ticket.&#x20;

In each instance, these can be used in conjunction with the suitable actions that align with the integrations you have. For example, using the `zendesk_create_ticket` action or the `freshdesk_assign_ticket` action.

</details>

<details>

<summary><strong>Escalation</strong></summary>

Escalation is important for instances where you'd like the user to be able to access a chat with a live human. In more instances, this is highly recommended to avoid frustration with customers who prefer to speak to humans.&#x20;

Within the prompt, you can add in a simple `"If the user asks to speak to a human, then always use 'zendesk_assign_ticket' action with new_assignee='[Sales Team Assignee ID]'"` (or the equivalent) helpdesk action.&#x20;

This will allow you to assign tickets to an agent or a team, based on the ID of that agent or team.

</details>

<details>

<summary><strong>When you don't want the bot to reply</strong></summary>

In certain circumstances, you may not want the bot to reply. This might be useful if:

* You don't want the bot to reply to spam, or harmful messages
* You don't want the bot to attempt to handle sensitive tickets, so that it can hand off immediately

To do this, you can use the **"do not reply" action.** Simply add the action via "create new action" and add to the prompt something like:&#x20;

`"If the user's question is about purchasing a custom plan, then use 'do_not_reply'. Then, use 'zendesk_internal_note' to leave a note about why you didn't leave a reply, and what the suggested response might be."`

</details>

## What are actions?&#x20;

Actions are things the bot can do or tools it can use when it's triggered. They can be used during conversations, triggered by the user's messages, or can be done under certain conditions. Some actions are platform specific and others are for the bot to take on its own (like increasing reasoning for certain conditionals, or using info from another bot.)

### How to enable actions

1. Head to the Customize tab
2. Click "Create new action"
3. Select the action you'd like to enable, and click 'enable'.&#x20;
   1. Some actions require information like API keys or domains to be connected
4. Add the 'action' name in the prompt. For example, "Use 'create\_ticket' action when XYZ".&#x20;

### Integration actions

Integration actions are those that take actions inside other platforms. This is useful for teams looking to take actions inside help desks to help triage tickets, or action things like pulling Shopify order information during a conversation.

Some examples:&#x20;

* Assigning a ticket to an agent or team
* Creating a ticket
* Pulling order information
* Updating a ticket status or field

If you head to the 'create new action' screen, you should be able to filter by each platform we currently have actions for.&#x20;

Actions with helpdesks require you to connect your helpdesk domain. Actions to Shopify and other platforms also require things like an API key etc. to enable.&#x20;

These actions also require mention in the prompt of when and how to use these actions, once enabled. Explore information about your specific [integration](broken-reference) for more details.

We're constantly adding to our action menu, so keep your eyes on new actions!

### Suggested Actions (non-integration specific)

<details>

<summary><strong>Think</strong></summary>

**Think** action: add the think action to enable the bot to spend more time reasoning, useful for complex conditionals.&#x20;

Example: "Use the '`think`' action when you decide which set of instructions you follow below, based on the product the user has specified."

</details>

<details>

<summary><strong>Do not reply</strong></summary>

**Do not reply** action: add this action to tell the bot in which instances it should not reply at all.&#x20;

Example: "If the query is using rude words, is confrontational, and extremely negative, then use the '`Do not reply`' action."

</details>

<details>

<summary><strong>Read full document</strong></summary>

**Read full document** action: add this action if you want eesel to read an entire document in certain scenarios to ensure it's able to pull full context from important documents.&#x20;

Example: Always use the `retrieve_full_document` tool to find the most relevant product document and read it fully, before responding to the query.

</details>

<details>

<summary><strong>Use knowledge from another bot</strong></summary>

**Search documents of another bot**

1. This is used if you want a new bot but want it to be able to access the training resources/knowledge of another bot.
2. Example prompt: "If the question is to do with "Product A", then always use `retrieve_sibling_documents` with "2da11eac-5585-4837-91b9-09b97f631288" to retrieve the relevant documents for "Product A" before answering"

</details>

<details>

<summary><strong>Consult/direct query to another bot</strong></summary>

**Consult another bot**

1. This is used if you want a new bot but you want it to be able to access the training and _actions/customization_ of another bot. Useful in instances where you want one bot to welcome/triage the queries, and then consult another bot to handle it entirely.This is useful when:
   1. Situations when adding all Sources one bot alone leads to inaccurate answers.
   2. Helpdesk triaging needs to be set up
   3. You want to ask several clarifying questions before routing
2. Example prompt: "If the question is about "Product A", then always use consult\_bot with bot ID:123489 to answer the question."
3. The bot ID can be found by going to the chat page of the dashboard of the target bot, looking at the URL of the bot and copying the string of letters and number found between /v2/ and /chat.

</details>
